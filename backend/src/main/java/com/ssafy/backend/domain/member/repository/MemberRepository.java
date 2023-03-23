package com.ssafy.backend.domain.member.repository;

import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.member.enums.OauthType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByOauthIdAndOauthType(Long oauthId, OauthType oauthType);

    Optional<Member> findByNickname(String nickName);
}
