package com.ssafy.backend.domain.member.mapper;

import com.ssafy.backend.domain.member.dto.MemberDto;
import com.ssafy.backend.domain.member.dto.OauthMemberDto;
import com.ssafy.backend.domain.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.Optional;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    MemberDto toDto(Member member);
    @Mapping(source = "oauthId", target = "oauthMemberId")
    OauthMemberDto toAuthDto(Member member);
}
