package com.ssafy.backend.domain.member.service;

import com.ssafy.backend.domain.member.dto.OauthMemberDto;

public interface AuthService {
    OauthMemberDto getKakaoMemberInfo(String token);
    String getKakaoAccessToken (String code);

}
