package com.ssafy.backend.domain.favorites.service;

import com.ssafy.backend.domain.favorites.entity.Favorite;
import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.member.entity.Member;

import java.util.List;

public interface FavoriteService {
    List<Favorite> _findByIndustry(Member member);

    boolean existsByMemberAndIndustry(Industry industry, Member member);


}
