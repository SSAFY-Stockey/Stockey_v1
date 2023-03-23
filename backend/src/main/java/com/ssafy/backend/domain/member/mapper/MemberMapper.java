package com.ssafy.backend.domain.member.mapper;

import com.ssafy.backend.domain.member.dto.MemberDto;
import com.ssafy.backend.domain.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper
public interface MemberMapper {
    MemberDto toDto(Member member);
}
