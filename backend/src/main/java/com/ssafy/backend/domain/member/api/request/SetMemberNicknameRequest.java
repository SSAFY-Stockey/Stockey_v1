package com.ssafy.backend.domain.member.api.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SetMemberNicknameRequest {
    private String nickname;
    private Long oauthId;
    private String oauthType;
}
