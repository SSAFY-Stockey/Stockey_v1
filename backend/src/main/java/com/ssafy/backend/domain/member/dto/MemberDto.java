package com.ssafy.backend.domain.member.dto;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.ToString;


@Builder
@Getter
@ToString
public class MemberDto {
    private final Long id;
    private final String nickname;
}
