package com.ssafy.backend.domain.member.api.response;

import lombok.Builder;

@Builder
public class KakaoLoginResponse {
    private final String accessToken;
}
