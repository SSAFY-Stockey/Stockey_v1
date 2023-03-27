package com.ssafy.backend.domain.favorites.service;

import com.ssafy.backend.domain.favorites.entity.Favorite;
import com.ssafy.backend.domain.favorites.repository.FavoriteRepository;
import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FavoriteServiceImpl implements  FavoriteService{
    private final FavoriteRepository favoriteRepository;


    // 내 관심 산업
    public List<Favorite> findByIndustry(Member member){
        List<Favorite> favoriteList = favoriteRepository.findByIndustry(member);
        return favoriteList;
    }

    // 특정산업 관심여부
    public boolean existsByMemberAndIndustry (Industry industry,Member member){
        boolean result = favoriteRepository.existsByMemberAndIndustry(member, industry);
        return result;
    }



}
