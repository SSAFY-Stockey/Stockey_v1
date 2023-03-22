package com.ssafy.backend.domain.member.service;


import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.member.enums.OAuthType;

import java.util.Optional;

public interface MemberService {
    void checkDuplicatedNickname(String nickName);

    String changeNickname(Member member, String newNickname);

    // 메소드 오버로딩으로 구현할것
    Optional<Member> getMember(long oAuthId, OAuthType oAuthType);

    Member saveMember(long oAuthId, String nickname, OAuthType oAuthType);

    TokenRespDto tokenRefresh();

    void logout();

    MemberIdAndNicknameDto getMemberIdAndNicknameByJwtToken();

    void deleteMember();

    void addMemberCoin(int addCoinVal);

    MemberCoinRespDto getMemberCoin();

    void setHyncholAuth(SuperMemberCafeAuthReqDto locationDto);
}
