package com.ssafy.backend.domain.member.api.response;

import lombok.Data;

@Data
public class KakaoLoginResponse {
    private final String accessToken;
}
