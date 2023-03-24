package com.ssafy.backend.domain.member.api.request;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Pattern;


@Builder
@Data
public class SetMemberNicknameRequest {
    @Pattern(regexp = "^[a-zA-Z0-9가-힣]{4,8}$")
    private String nickname;
    @Max(50)
    private Long oauthId;
    @Pattern(regexp = "^(KAKAO)$")
    private String oauthType;
}
