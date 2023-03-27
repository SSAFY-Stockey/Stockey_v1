package com.ssafy.backend.domain.member.service;


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

    @Test
    void getKakaoMemberInfo() {
    }

    @Test
    void getKakaoAccessToken() {
    }

    @Test
    void createJwt() throws Exception{
        // given
        memberRepository.save(Member.oAuthBuilder()
                .oAuthId(213L)
                .oAuthType(OauthType.KAKAO)
                .nickname("junTest")
                .build());
        MemberDto memberDto = memberMapper.toDto(memberRepository.findByNickname("junTest").get());

        // when - accessToken 정상 생성?
        String accessToken = jwtUtil.createJwt(memberDto);
        if (accessToken != null) {
            assertThat(accessToken.length()).isGreaterThan(0);
        } else {

        }

        // when - refresh token이 cookie에 잘 저장 되었나?
        String refreshTokenFromCookie = jwtUtil.getRefreshTokenFromCookie();

        if (refreshTokenFromCookie != null) {
            assertThat(refreshTokenFromCookie.length()).isGreaterThan(0);
        } else {
            throw new Exception("refresh token이 cookie에 잘 저장 되지 않음!!");
        }
    }

    @Test
    void tokenRefresh() {

    }

    @Test
    void logout() {
    }
}