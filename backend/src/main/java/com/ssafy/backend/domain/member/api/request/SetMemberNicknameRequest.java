package com.ssafy.backend.domain.member.api.request;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Builder
@Data
public class SetMemberNicknameRequest {
    private String nickname;
    private Long oauthId;
    private String oauthType;
}
