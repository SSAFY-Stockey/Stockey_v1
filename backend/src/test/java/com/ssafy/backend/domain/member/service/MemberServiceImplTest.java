package com.ssafy.backend.domain.member.service;

import com.ssafy.backend.domain.member.dto.MemberDto;
import com.ssafy.backend.domain.member.dto.OauthMemberDto;
import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.member.enums.OauthType;
import com.ssafy.backend.domain.member.mapper.MemberDtoMapper;
import com.ssafy.backend.domain.member.repository.MemberRepository;
import com.ssafy.backend.global.exception.member.MemberException;
import com.ssafy.backend.global.exception.member.MemberExceptionType;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class MemberServiceImplTest {

    @Autowired MemberService memberService;
    @Autowired MemberRepository memberRepository;
    @Autowired MemberDtoMapper memberDtoMapper;

    @PersistenceContext
    private EntityManager entityManager;

    @Test
    void checkDuplicatedNickname() {
        // given
        memberService.saveMember(12345, "testjunmo99", OauthType.KAKAO);
        assertThrows(MemberException.class, ()->{
            memberService.checkDuplicatedNickname("testjunmo99");
        });

    }

    @Test
    void changeNickname() {
        // given
        memberService.saveMember(12345, "testjunmo99", OauthType.KAKAO);
        OauthMemberDto oauthMemberDto = memberService.getMember(12345, OauthType.KAKAO).get();
        MemberDto memberDto = memberDtoMapper.toMemberDto(oauthMemberDto);
        // when
        String changeNickname = memberService.changeNickname(memberDto, "superJun");
        // then
        assertThat(changeNickname).isEqualTo("superJun");
    }


    @Test
    void member_save_get_test() {
        // given
        memberService.saveMember(12345, "junmo", OauthType.KAKAO);
        // when
        OauthMemberDto oauthMemberDto = memberService.getMember(12345, OauthType.KAKAO).get();
        // then
        assertThat(oauthMemberDto.getNickname()).isEqualTo("junmo");
    }
}