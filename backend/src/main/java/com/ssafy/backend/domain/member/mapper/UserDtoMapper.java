package com.ssafy.backend.domain.member.mapper;

import com.ssafy.backend.domain.member.api.response.KakaoLoginResponse;
import com.ssafy.backend.domain.member.dto.MemberDto;
import org.mapstruct.Mapper;

@Mapper
public interface UserDtoMapper {
    KakaoLoginResponse toKakaoLoginResponse(MemberDto dto);
}
