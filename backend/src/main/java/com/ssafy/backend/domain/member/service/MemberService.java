package com.ssafy.backend.domain.member.service;


import com.ssafy.backend.domain.member.dto.OauthMemberDto;
import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.member.enums.OauthType;

import java.util.Optional;

public interface MemberService {
    void checkDuplicatedNickname(String nickName);

    String changeNickname(Member member, String newNickname);

    Optional<OauthMemberDto> getMember(long oAuthId, OauthType oAuthType);

    Member saveMember(long oAuthId, String nickname, OauthType oAuthType);

//    TokenRespDto tokenRefresh();
//
//    void logout();
//
//    MemberIdAndNicknameDto getMemberIdAndNicknameByJwtToken();
//
//    void deleteMember();
//
//    void addMemberCoin(int addCoinVal);
//
//    MemberCoinRespDto getMemberCoin();
//
//    void setHyncholAuth(SuperMemberCafeAuthReqDto locationDto);
}
