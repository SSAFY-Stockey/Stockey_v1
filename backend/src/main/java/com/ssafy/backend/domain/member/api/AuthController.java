package com.ssafy.backend.domain.member.api;


import com.ssafy.backend.domain.member.api.request.SetMemberNicknameRequest;
import com.ssafy.backend.domain.member.enums.NicknameType;
import com.ssafy.backend.domain.member.enums.OauthType;
import com.ssafy.backend.domain.member.dto.OauthMemberDto;
import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.member.service.AuthServiceImpl;
import com.ssafy.backend.domain.member.service.MemberService;
import com.ssafy.backend.global.dto.ResponseDto;
import com.ssafy.backend.global.exception.member.MemberException;
import com.ssafy.backend.global.exception.member.MemberExceptionType;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final AuthServiceImpl oAuthService;
    private final MemberService memberService;
//    private final JwtService jwtService;


    @GetMapping("/login/kakao")
    public ResponseEntity<ResponseDto> kakaoLogin(@RequestParam String code) {
        // 클라이언트에게 받은 code로 AccessToken 생성
        String kakaoAccessToken = oAuthService.getKakaoAccessToken(code);

        // 생성한 AccessToken으로 인증서버로부터 유저 정보 가져오기
        OauthMemberDto oAuthMemberDto = oAuthService.getKakaoMemberInfo(kakaoAccessToken);
        long kakaoMemberId = oAuthMemberDto.getId();

        // 기존에 등록된 정보가 있는지 우리 db 조회
        Optional<OauthMemberDto> dbMemberDto = memberService.getMember(kakaoMemberId, OauthType.KAKAO);

        if (dbMemberDto.isEmpty()) {
            // 신규 회원 등록
            memberService.saveMember(kakaoMemberId, NicknameType.NONAMED.toString(), OauthType.KAKAO);
            // db에 해당 kakao oAuth의 id를 가진 레코드가 없다면 -> 회원 가입
            return new ResponseEntity<>(getOauthMemberRespDto(kakaoMemberId), HttpStatus.CREATED);
        }
        else if (dbMemberDto.get().getNickname().equals(NicknameType.NONAMED.toString())) {
            // if 닉네임이 아직도 NONAME이면 위랑 상태코드 똑같이 해서 닉네임 받는 페이지 가도록
            return new ResponseEntity<>(getOauthMemberRespDto(kakaoMemberId), HttpStatus.CREATED);
        }

        // 메소드로 빼기
        // 닉네임 변경까지 완료된 상태이면 로그인 가능. JWT 생성해 클라이언트에 보내주기
//        TokenRespDto jwtTokens = jwtService.createJwt(dbMember.get());

//        LoginRespDto loginRespDto = LoginRespDto.builder()
//                .nickname(dbMember.get().getNickname())
//                .jwtTokens(jwtTokens)
//                .build();

        ResponseDto ResponseDto = new ResponseDto("로그인 완료!", null);
        return new ResponseEntity<>(ResponseDto, HttpStatus.OK);
    }

    // 회원가입 후 DEFAULT 닉네임을 변경
    @PutMapping("/nickname")
    public ResponseEntity<ResponseDto> setMemberNickname(@RequestBody SetMemberNicknameRequest setMemberNicknameRequest) {
        // 서버에서 한번 더 닉네임 중복 체크
        memberService.checkDuplicatedNickname(setMemberNicknameRequest.getNickname());
        // 가입된 회원 정보 가져오기
        Member defaultNicknameMember = memberService.getMember(setMemberNicknameRequest.getOauthId(),
                        OauthType.valueOf(setMemberNicknameRequest.getOauthType()))
                .orElseThrow(() -> new MemberException(MemberExceptionType.NOT_FOUND_MEMBER));
        // 닉네임 변경
        String changedNickname = memberService.changeNickname(defaultNicknameMember, setMemberNicknameRequest.getNickname());

        // 메소드로 빼기
//        // jwt 토큰 생성
//        TokenRespDto jwtTokens = jwtService.createJwt(defaultNicknameMember);
//
//        LoginRespDto loginRespDto = LoginRespDto.builder()
//                .nickname(changedNickname)
//                .jwtTokens(jwtTokens)
//                .build();
        ResponseDto ResponseDto = new ResponseDto("로그인 완료!",  null);
        return new ResponseEntity<>(ResponseDto, HttpStatus.OK);
    }

    private ResponseDto getOauthMemberRespDto(long oauthMemberId) {
        OauthMemberDto oauthMemberDto = OauthMemberDto.builder()
                .nicknameType(NicknameType.NONAMED)
                .oauthMemberId(oauthMemberId)
                .oauthType(OauthType.KAKAO)
                .build();
        return new ResponseDto("닉네임 변경 필요!", oauthMemberDto);
    }
}
