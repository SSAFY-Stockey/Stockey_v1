package com.ssafy.backend.domain.member.service;


import com.ssafy.backend.domain.member.dto.MemberDto;
import com.ssafy.backend.domain.member.dto.OauthMemberDto;
import com.ssafy.backend.domain.member.enums.OauthType;

import java.util.Optional;

public interface MemberService {
    void checkDuplicatedNickname(String nickName);
    String changeNickname(MemberDto member, String newNickname);
    // 메소드 오버로딩 : 회원가입, 로그인시 사용되는 getMember
    Optional<OauthMemberDto> getMember(long oAuthId, OauthType oAuthType);

    MemberDto getMember(long memberId);
    void saveMember(long oAuthId, String nickname, OauthType oAuthType);

//    MemberIdAndNicknameDto getMemberIdAndNicknameByJwtToken();
//
//    void deleteMember();
}
