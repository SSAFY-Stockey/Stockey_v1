package com.ssafy.backend.domain.member.mapper;

import com.ssafy.backend.domain.member.api.response.KakaoLoginResponse;
import com.ssafy.backend.domain.member.api.response.MemberResponse;
import com.ssafy.backend.domain.member.dto.MemberDto;
import com.ssafy.backend.domain.member.dto.OauthMemberDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberDtoMapper {
    MemberDto toMemberDto(OauthMemberDto dto);

    MemberResponse toGetMemberResponse(MemberDto dto);
}
