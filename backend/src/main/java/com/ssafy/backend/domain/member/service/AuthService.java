package com.ssafy.backend.domain.member.service;

import com.ssafy.backend.domain.member.dto.KakaoMemberDto;

public interface AuthService {
    KakaoMemberDto getKakaoMemberInfo(String token);
    String getKakaoAccessToken (String code);
}
