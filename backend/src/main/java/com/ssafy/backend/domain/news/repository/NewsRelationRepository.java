package com.ssafy.backend.domain.news.repository;

import com.ssafy.backend.domain.keyword.dto.TopKeywordDTO;
import com.ssafy.backend.domain.news.entity.NewsRelation;
import com.ssafy.backend.domain.news.entity.enums.NewsType;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface NewsRelationRepository extends JpaRepository<NewsRelation, Long> {

    @Query("SELECT nr.keyword.id as keywordId, COUNT(nr.keyword.id) as keywordCount " +
            "FROM NewsRelation nr " +
            "JOIN nr.news n " +
            "JOIN nr.keyword k " +
            "WHERE nr.newsType = :newsType " +
            "WHERE nr.stockId = :domainId " +
            "AND n.pressedAt BETWEEN :startDate AND :endDate " +
            "GROUP BY nr.keyword.id " +
            "ORDER BY COUNT(DISTINCT nr.news.id) DESC, nr.keyword.id ASC")
    List<TopKeywordDTO> getTopNKeywords(LocalDate startDate, LocalDate endDate, Pageable topN,
                                        String newsType, Long domainId);
}
