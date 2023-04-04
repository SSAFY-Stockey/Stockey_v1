package com.ssafy.backend.domain.member.service;


import com.auth0.jwt.interfaces.DecodedJWT;
import com.ssafy.backend.domain.member.dto.MemberDto;
import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.member.enums.OauthType;
import com.ssafy.backend.domain.member.mapper.MemberMapper;
import com.ssafy.backend.domain.member.repository.MemberRepository;
import com.ssafy.backend.global.jwt.JwtUtil;
import com.ssafy.backend.global.redis.RefreshToken;
import com.ssafy.backend.global.redis.RefreshTokenRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
@Transactional
class AuthServiceImplTest {

    @Autowired
    JwtUtil jwtUtil;

    @Autowired
    RefreshTokenRepository refreshTokenRepository;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    MemberMapper memberMapper;
    @Autowired
    MemberService memberService;

    @Test
    void createJwt(){
        // given
        memberRepository.save(Member.oAuthBuilder()
                .oAuthId(213L)
                .oAuthType(OauthType.KAKAO)
                .nickname("junTest")
                .build());
        MemberDto memberDto = memberMapper.toDto(memberRepository.findByNickname("junTest").get());

        // when - accessToken 정상 생성?
        String accessToken = jwtUtil.createJwt(memberDto);

//        accessToken = accessToken.substring(7);
        DecodedJWT payload = jwtUtil.getDecodedJWT(accessToken);
        long memberId = Long.parseLong(payload.getAudience().get(0));
        String nickname = String.valueOf(payload.getClaim("nickname")).replaceAll("\"", "");

        assertThat(memberId).isEqualTo(memberDto.getId());
        assertThat(nickname).isEqualTo(memberDto.getNickname());
    }

    @Test
    void tokenRefresh() {

    }

    @Test
    void logout() {
    }
}