package com.ssafy.backend.domain.member.api;


import com.ssafy.backend.domain.member.dto.MemberDto;
import com.ssafy.backend.domain.member.enums.NicknameType;
import com.ssafy.backend.domain.member.enums.OAuthType;
import com.ssafy.backend.domain.member.dto.KakaoMemberDto;
import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.member.service.AuthServiceImpl;
import com.ssafy.backend.domain.member.service.MemberService;
import com.ssafy.backend.global.dto.ResponseDto;
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
    private final JwtService jwtService;


    private ResponseDto registMember(long oAuthMemberId, OAuthType oauthType) {
        // 신규 회원 등록 - 신규 회원이 등록되면 회원-재화 엔티티도 같이생성
        memberService.saveMember(oAuthMemberId, NicknameType.DEFAULT.toString(), oauthType);

        KakaoMemberInfoDto memberInfoDto = MemberDto.builder()
                .nicknameType(NicknameType.DEFAULT.toString())
                .kakaoMemberId(kakaoMemberId)
                .oauthType(OauthType.KAKAO.toString())
                .build();

        // 해당 상태코드를 받고 프론트에서 닉네임 표출하는 화면 주기 201
        // 클라에서 201를 받으면 닉네임 입력 페이지를 띄워줘라!!
        return new ResponseDto("닉네임 변경 필요!", "", HttpStatus.CREATED, memberInfoDto);
    }


    @GetMapping("/login/kakao")
    public ResponseEntity<ResponseDto> kakaoLogin(@RequestParam String code) {
        // 클라이언트에게 받은 code로 AccessToken 생성
        String kakaoAccessToken = oAuthService.getKakaoAccessToken(code);

        // 생성한 AccessToken으로 인증서버로부터 유저 정보 가져오기
        KakaoMemberDto kakaoMemberDto = oAuthService.getKakaoMemberInfo(kakaoAccessToken);
        long kakaoMemberId = kakaoMemberDto.getId();

        // 기존에 등록된 정보가 있는지 우리 db 조회
        Optional<Member> dbMember = memberService.getMember(kakaoMemberId, OAuthType.KAKAO);

        // db에 해당 kakao oAuth의 id를 가진 레코드가 없다면 -> 회원 가입
        if (dbMember.isEmpty()) {
            return new ResponseEntity<>(registMember(kakaoMemberId, OAuthType.KAKAO), HttpStatus.OK);
        }


        // if 닉네임이 아직도 NONAMED면 위랑 상태코드 똑같이 해서 닉네임 받는 페이지 가도록
        if (dbMember.get().getNickname().equals(NicknameType.DEFAULT.toString())) {

            KakaoMemberInfoDto memberInfoDto = KakaoMemberInfoDto.builder()
                    .nicknameType(NicknameType.DEFAULT.toString())
                    .kakaoMemberId(kakaoMemberId)
                    .oauthType(OauthType.KAKAO.toString())
                    .build();

            ResponseDto ResponseDto
                    = new ResponseDto("닉네임 변경 필요!", "", HttpStatus.CREATED, memberInfoDto);
            return new ResponseEntity<>(ResponseDto, HttpStatus.OK);
        }

        // 닉네임 변경까지 완료된 상태이면 로그인 가능. JWT 생성해 클라이언트에 보내주기
        TokenRespDto jwtTokens = jwtService.createJwt(dbMember.get());
        LoginRespDto loginRespDto = LoginRespDto.builder()
                .nickname(dbMember.get().getNickname())
                .jwtTokens(jwtTokens)
                .build();


        ResponseDto ResponseDto = new ResponseDto("로그인 완료!", "", HttpStatus.OK, loginRespDto);
        return new ResponseEntity<>(ResponseDto, HttpStatus.OK);
    }

    // 회원가입 후 DEFAULT 닉네임을 변경
    @PostMapping("/setNickname")
    public ResponseEntity<ResponseDto> setMemberNickname(@RequestBody OauthLoginDto oauthLoginDto) {
        // 서버에서 한번 더 닉네임 중복 체크
        memberService.checkDuplicatedNickname(oauthLoginDto.getNickname());
        // 가입된 회원 정보 가져오기
        Member defaultNicknameMember = memberService.getMember(oauthLoginDto.getOauthId(),
                        OauthType.valueOf(oauthLoginDto.getOauthType()))
                .orElseThrow(() -> new MemberException(MemberExceptionType.NOT_FOUND_MEMBER));
        // 닉네임 변경
        String changedNickname = memberService.changeNickname(defaultNicknameMember, oauthLoginDto.getNickname());
        // jwt 토큰 생성
        TokenRespDto jwtTokens = jwtService.createJwt(defaultNicknameMember);

        LoginRespDto loginRespDto = LoginRespDto.builder()
                .nickname(changedNickname)
                .jwtTokens(jwtTokens)
                .build();
        ResponseDto ResponseDto = new ResponseDto("로그인 완료!", "", HttpStatus.OK, loginRespDto);
        return new ResponseEntity<>(ResponseDto, HttpStatus.OK);
    }
}
