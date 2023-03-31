package com.ssafy.backend.domain.favorites.repository;

import com.ssafy.backend.domain.favorites.entity.Favorite;
import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.stock.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FavoriteRepository extends JpaRepository<Favorite,Long> {

    @Query("select f from Favorite f where f.member = :member and f.industry != null")
    List<Favorite> findByIndustry(@Param("member")Member member);
    @Query("select f from Favorite f where f.member = :member and f.stock != null")
    List<Favorite> findByStock(@Param("member")Member member);

    boolean existsByMemberAndIndustry(Member member, Industry industry);
    boolean existsByMemberAndStock(Member member, Stock stock);
    Favorite findByMemberAndIndustry(Member member,Industry industry);
    Favorite findByMemberAndStock(Member member, Stock stock);

}
