package com.ssafy.backend.domain.member.service;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.ssafy.backend.common.exception.jwt.JwtException;
import com.ssafy.backend.common.exception.jwt.JwtExceptionType;
import com.ssafy.backend.common.exception.member.MemberException;
import com.ssafy.backend.common.exception.member.MemberExceptionType;
import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.member.enums.OAuthType;
import com.ssafy.backend.jwt.JwtUtil;
import com.ssafy.backend.jwt.dto.TokenRespDto;
import com.ssafy.backend.member.domain.dto.MemberCoinRespDto;
import com.ssafy.backend.member.domain.dto.MemberIdAndNicknameDto;
import com.ssafy.backend.member.domain.dto.SuperMemberCafeAuthReqDto;
import com.ssafy.backend.member.domain.entity.Member;
import com.ssafy.backend.member.domain.entity.MemberCoin;
import com.ssafy.backend.member.domain.enums.OauthType;
import com.ssafy.backend.member.repository.MemberCoinRepository;
import com.ssafy.backend.member.repository.MemberRepository;
import com.ssafy.backend.redis.CafeAuth;
import com.ssafy.backend.redis.CafeAuthRepository;
import com.ssafy.backend.redis.RefreshTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberServiceImpl implements com.ssafy.backend.member.service.MemberService {

    private final MemberRepository memberRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final JwtUtil jwtUtil;
    private final MemberCoinRepository memberCoinRepository;
    private final CafeAuthRepository cafeAuthRepository;

    @Override
    public void checkDuplicatedNickname(String nickName) {
        // 닉네임 조회 후 존재하면 에러 발생 시킴
        memberRepository.findByNickname(nickName).ifPresent(x -> {
            throw new MemberException(MemberExceptionType.ALREADY_EXIST_NICKNAME);
        });
    }

    @Override
    public String changeNickname(Member member, String newNickname) {

        // 닉네임 유효성 체크 = 받는 dto에서!

        if (member.getNickname().equals(newNickname)) {
            throw new MemberException(MemberExceptionType.SAME_NICKNAME);
        }

        member.setNickname(newNickname);

        return newNickname;
    }

    @Override
    public Optional<Member> getMember(long oAuthId, OauthType oauthType) {
        return memberRepository.findByOauthIdAndOauthType(oAuthId, oauthType);
    }

    @Override
    public Member saveMember(long oAuthId, String nickname, OAuthType oauthType) {
        Member member = Member.oAuthBuilder()
                .nickname(nickname)
                .oAuthId(oAuthId)
                .oAuthType(oauthType)
                .build();
        Member savedMember = memberRepository.save(member);
    }

    @Override
    public TokenRespDto tokenRefresh() {
        // refresh token 받아오기
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String refreshToken = request.getHeader("Authorization-RefreshToken");

        // refresh token 인증
        jwtUtil.isValidForm(refreshToken);
        refreshToken = refreshToken.substring(7);
        jwtUtil.isValidToken(refreshToken, "RefreshToken");

        // refresh token 에서 유저 aud값 가져오기
        DecodedJWT payload = jwtUtil.getDecodedJWT(refreshToken);
        long memberId = Long.parseLong(payload.getAudience().get(0));

        // redis에 refresh 토큰이 없다면(리프레쉬 토큰 만료시)
        if (refreshTokenRepository.findById(refreshToken).isEmpty()) {
            throw new JwtException(JwtExceptionType.TOKEN_EXPIRED);
        }

        TokenRespDto tokenRespDto = new TokenRespDto();
        // 리프레쉬 토큰이 redis에 존재 하는 상황
        refreshTokenRepository.findById(refreshToken).ifPresent(a -> {
            Optional<Member> dbMemberOpt = memberRepository.findById(memberId);
            if (dbMemberOpt.isEmpty()) {
                throw new MemberException(MemberExceptionType.NOT_FOUND_MEMBER);
            }
            Member dbMember = dbMemberOpt.get();
            String accessToken = jwtUtil.getAccessToken(dbMember);

            tokenRespDto.setAccessToken(accessToken);
        });
        return tokenRespDto;
    }

    @Override
    public void logout() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String refreshToken = request.getHeader("Authorization-RefreshToken");

        String nickname = getMemberIdAndNicknameByJwtToken().getNickname();

        // refresh token 인증
        jwtUtil.isValidForm(refreshToken);
        refreshToken = refreshToken.substring(7);
        jwtUtil.isValidToken(refreshToken, "RefreshToken");

        // redis에 저장된 refresh토큰 삭제하기
        refreshTokenRepository.deleteById(refreshToken);

        refreshTokenRepository.findById(refreshToken).ifPresent(a -> {
            throw new MemberException(MemberExceptionType.NOT_DELETE_REFRESH_TOKEN);
        });

        // 사용자 위치 인증 정보 삭제하기
        cafeAuthRepository.deleteById(nickname);
    }

    @Override
    public MemberIdAndNicknameDto getMemberIdAndNicknameByJwtToken() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String accessToken = request.getHeader("Authorization");
        accessToken = accessToken.substring(7);
        DecodedJWT payload = jwtUtil.getDecodedJWT(accessToken);
        long memberId = Long.parseLong(payload.getAudience().get(0));
        String nickname = String.valueOf(payload.getClaim("nickname"));
        String trimmedNickname = nickname.replaceAll("\"", "");
        return new MemberIdAndNicknameDto(memberId, trimmedNickname);
    }

    @Override
    public void deleteMember() {
        long memberId = getMemberIdAndNicknameByJwtToken().getId();
        memberRepository.deleteById(memberId);
        memberRepository.findById(memberId).ifPresent(a -> {
            throw new MemberException(MemberExceptionType.NOT_DELETE_MEMBER);
        });
    }

    @Override
    public void addMemberCoin(int addCoinVal) {
        long memberId = getMemberIdAndNicknameByJwtToken().getId();
        Optional<MemberCoin> optionalMemberCoin = memberCoinRepository.findByMemberId(memberId);
        if (optionalMemberCoin.isEmpty()) {
            throw new MemberException(MemberExceptionType.NOT_FOUND_MEMBER);
        }
        int coffeeBeanCount = optionalMemberCoin.get().getCoffeeBeanCount();
        optionalMemberCoin.get().setCoffeeBeanCount(coffeeBeanCount + addCoinVal);
    }

    @Override
    public MemberCoinRespDto getMemberCoin() {
        MemberCoin memberCoin = memberCoinRepository.findByMemberId(getMemberIdAndNicknameByJwtToken().getId())
                .orElseThrow(() -> new MemberException(MemberExceptionType.MEMBER_DB_ERR));
        return MemberCoinRespDto.builder().CoffeeBeanCnt(memberCoin.getCoffeeBeanCount())
                .CoffeeCnt(memberCoin.getCoffeeCount()).build();
    }

    @Override
    public void setHyncholAuth(SuperMemberCafeAuthReqDto superMemberCafeAuthReqDto) {
        String nickname = getMemberIdAndNicknameByJwtToken().getNickname();
        if (!nickname.equals("조현철")) {
            throw new MemberException(MemberExceptionType.HACKING_PREVENT);
        }
        CafeAuth cafeAuth = CafeAuth.builder()
                .cafeId(superMemberCafeAuthReqDto.getCafeId())
                .nickname(nickname)
                .expiration(6000000)
                .build();
        cafeAuthRepository.save(cafeAuth);
    }
}
