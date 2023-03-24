package com.ssafy.backend.domain.member.api;


import com.ssafy.backend.domain.member.api.request.SetMemberNicknameRequest;
import com.ssafy.backend.domain.member.dto.MemberDto;
import com.ssafy.backend.domain.member.enums.NicknameType;
import com.ssafy.backend.domain.member.enums.OauthType;
import com.ssafy.backend.domain.member.dto.OauthMemberDto;
import com.ssafy.backend.domain.member.mapper.MemberDtoMapper;
import com.ssafy.backend.domain.member.service.AuthService;
import com.ssafy.backend.domain.member.service.MemberService;
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
//    private final JwtService jwtService;


    @Operation(summary = "카카오 로그인/회원가입", description = "카카오로 로그인/회원가입 수행")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공"),
                    @ApiResponse(responseCode = "201", description = "닉네임 변경 필요"),
                    @ApiResponse(responseCode = "404", description = "잘못된 요청")
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

        //////////////////////////// JWT 들어갈 부분, 메소드로 빼기 ////////////////////////////
//        // jwt 토큰 생성
//        TokenRespDto jwtTokens = jwtService.createJwt(defaultNicknameMember);
//
//        LoginRespDto loginRespDto = LoginRespDto.builder()
//                .nickname(changedNickname)
//                .jwtTokens(jwtTokens)
//                .build();

        ////////////////////////////////////////////////////////////////////////////////////

        ResponseDto ResponseDto = new ResponseDto("로그인 완료!", null);
        return new ResponseEntity<>(ResponseDto, HttpStatus.OK);
    }


    @Operation(summary = "회원가입 후 기본 닉네임 변경", description = "회원가입 후 기본 닉네임(NONAMED)을 변경")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공"),
                    @ApiResponse(responseCode = "404", description = "잘못된 요청")
            }
    )
    @PutMapping("/nickname")
    public ResponseEntity<ResponseDto> setMemberNickname(
            @Valid @RequestBody SetMemberNicknameRequest setMemberNicknameRequest) {
        // 서버에서 한번 더 닉네임 중복 체크
        memberService.checkDuplicatedNickname(setMemberNicknameRequest.getNickname());
        // 가입된 회원 정보 가져오기
        MemberDto memberDto = memberDtoMapper.toMemberDto(memberService
                .getMember(setMemberNicknameRequest.getOauthId(), OauthType.valueOf(setMemberNicknameRequest.getOauthType()))
                .orElseThrow(() -> new MemberException(MemberExceptionType.NOT_FOUND_MEMBER)));
        // 닉네임 변경
        String changedNickname = memberService.changeNickname(memberDto, setMemberNicknameRequest.getNickname());

        //////////////////////////// JWT 들어갈 부분, 메소드로 빼기 ////////////////////////////
//        // jwt 토큰 생성
//        TokenRespDto jwtTokens = jwtService.createJwt(defaultNicknameMember);
//
//        LoginRespDto loginRespDto = LoginRespDto.builder()
//                .nickname(changedNickname)
//                .jwtTokens(jwtTokens)
//                .build();

        ////////////////////////////////////////////////////////////////////////////////////
        ResponseDto ResponseDto = new ResponseDto("로그인 완료!",  null);
        return new ResponseEntity<>(ResponseDto, HttpStatus.OK);
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