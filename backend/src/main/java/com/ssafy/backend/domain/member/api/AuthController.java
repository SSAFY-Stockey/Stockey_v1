package com.ssafy.backend.domain.member.api;


import com.ssafy.backend.domain.member.api.request.SetMemberNicknameRequest;
import com.ssafy.backend.domain.member.api.response.KakaoLoginResponse;
import com.ssafy.backend.domain.member.dto.MemberDto;
import com.ssafy.backend.domain.member.enums.NicknameType;
import com.ssafy.backend.domain.member.enums.OauthType;
import com.ssafy.backend.domain.member.dto.OauthMemberDto;
import com.ssafy.backend.domain.member.mapper.MemberDtoMapper;
import com.ssafy.backend.domain.member.service.AuthService;
import com.ssafy.backend.domain.member.service.MemberService;
import com.ssafy.backend.global.annotation.Auth;
import com.ssafy.backend.global.dto.ResponseDto;
import com.ssafy.backend.global.exception.member.MemberException;
import com.ssafy.backend.global.exception.member.MemberExceptionType;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@Tag(name = "인증 ", description = "인증 관련 API 입니다.")
public class AuthController {

    private final AuthService oAuthService;
    private final MemberService memberService;
    private final MemberDtoMapper memberDtoMapper;


    @Operation(summary = "카카오 로그인/회원가입", description = "카카오로 로그인/회원가입 수행")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공"),
                    @ApiResponse(responseCode = "201", description = "닉네임 변경 필요"),
                    @ApiResponse(responseCode = "400", description = "잘못된 요청"),
                    @ApiResponse(responseCode = "404", description = "가입 정보 없음")
            }
    )
    @GetMapping("/login/kakao")
    public ResponseEntity<ResponseDto> kakaoLogin(@RequestParam String code) {
        // 클라이언트에게 받은 code로 AccessToken 생성
        String kakaoAccessToken = oAuthService.getKakaoAccessToken(code);
        // 생성한 AccessToken으로 인증서버로부터 유저 정보 가져오기
        OauthMemberDto oAuthMemberDto = oAuthService.getKakaoMemberInfo(kakaoAccessToken);
        // 기존에 등록된 정보가 있는지 우리 db 조회
        Optional<OauthMemberDto> oauthMemberDtoOptional = memberService.getMember(oAuthMemberDto.getId(), OauthType.KAKAO);

        if (oauthMemberDtoOptional.isEmpty()) {
            // 신규 회원 등록
            memberService.saveMember(oAuthMemberDto.getId(), NicknameType.NONAMED.toString(), OauthType.KAKAO);
            // db에 해당 kakao oAuth의 id를 가진 레코드가 없다면 -> 회원 가입
            return new ResponseEntity<>(getOauthMemberRespDto(oAuthMemberDto.getId()), HttpStatus.CREATED);
        }
        else if (oauthMemberDtoOptional.get().getNickname().equals(NicknameType.NONAMED.toString())) {
            // if 닉네임이 아직도 NONAME이면 위랑 상태코드 똑같이 해서 닉네임 받는 페이지 가도록
            return new ResponseEntity<>(getOauthMemberRespDto(oAuthMemberDto.getId()), HttpStatus.CREATED);
        }

        // JWT token 생성 및 리턴
        String accessToken = oAuthService.createJwt(memberDtoMapper.toMemberDto(oAuthMemberDto));
        KakaoLoginResponse kakaoLoginResponse = KakaoLoginResponse.builder().accessToken(accessToken).build();
        return new ResponseEntity<>(new ResponseDto("로그인 완료!", kakaoLoginResponse), HttpStatus.OK);
    }


    @Operation(summary = "회원가입 후 기본 닉네임 변경", description = "회원가입 후 기본 닉네임(NONAMED)을 변경")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공"),
                    @ApiResponse(responseCode = "400", description = "잘못된 요청"),
                    @ApiResponse(responseCode = "404", description = "가입 정보 없음")
            }
    )
    @PutMapping("/nickname")
    public ResponseEntity<ResponseDto> setMemberNickname(
            @Valid @RequestBody SetMemberNicknameRequest setMemberNicknameRequest) {
        // 가입된 회원 정보 가져오기
        MemberDto memberDto = memberDtoMapper.toMemberDto(memberService
                .getMember(setMemberNicknameRequest.getOauthId(), OauthType.valueOf(setMemberNicknameRequest.getOauthType()))
                .orElseThrow(() -> new MemberException(MemberExceptionType.NOT_FOUND_MEMBER)));
        // 닉네임 변경
        String changedNickname = memberService.changeNickname(memberDto, setMemberNicknameRequest.getNickname());
        // 새로운 memberDto 생성
        MemberDto newMemberDto = MemberDto.builder().id(memberDto.getId()).nickname(changedNickname).build();
        // JWT token 생성 및 리턴
        return new ResponseEntity<>(new ResponseDto("로그인 완료!",
                KakaoLoginResponse.builder().accessToken(oAuthService.createJwt(newMemberDto)).build()),
                HttpStatus.OK);
    }


    @Operation(summary = "Access token refresh", description = "Access token을 Refresh token을 통해 refresh")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공"),
                    @ApiResponse(responseCode = "400", description = "잘못된 요청"),
                    @ApiResponse(responseCode = "401", description = "refresh token 만료 -> 재 로그인 필요"),
                    @ApiResponse(responseCode = "404", description = "가입 정보 없음")
            }
    )
    @GetMapping("/refresh")
    public ResponseEntity<ResponseDto> tokenRefresh() {
        String accessToken = oAuthService.tokenRefresh();
        return new ResponseEntity<>(new ResponseDto("token refresh 완료!", accessToken), HttpStatus.OK);
    }


    @Operation(summary = "Logout", description = "Logout")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공"),
                    @ApiResponse(responseCode = "400", description = "잘못된 요청"),
                    @ApiResponse(responseCode = "401", description = "인증정보 없음")
            }
    )
    @Auth
    @PostMapping("/logout")
    public ResponseEntity<ResponseDto> logout() {
        oAuthService.logout();
        return new ResponseEntity<>(new ResponseDto("logout 완료!", null), HttpStatus.OK);
    }


    private ResponseDto getOauthMemberRespDto(long oauthMemberId) {
        OauthMemberDto oauthMemberDto = OauthMemberDto.builder()
                .nickname(NicknameType.NONAMED.toString())
                .oauthMemberId(oauthMemberId)
                .oauthType(OauthType.KAKAO)
                .build();
        return new ResponseDto("닉네임 변경 필요!", oauthMemberDto);
    }
}
