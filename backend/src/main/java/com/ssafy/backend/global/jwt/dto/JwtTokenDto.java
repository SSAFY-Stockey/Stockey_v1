package com.ssafy.backend.global.jwt.dto;

import lombok.*;

@Builder
@Getter
public class JwtTokenDto {
    private String AccessToken;
    private String RefreshToken;
}
