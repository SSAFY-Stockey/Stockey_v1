package com.ssafy.backend.domain.member.service;

import com.ssafy.backend.domain.member.dto.MemberDto;
import com.ssafy.backend.domain.member.dto.OauthMemberDto;

public interface AuthService {
    OauthMemberDto getKakaoMemberInfo(String token);
    String getKakaoAccessToken (String code);
    String createJwt(MemberDto memberDto);
    String tokenRefresh();
    void logout();
}
