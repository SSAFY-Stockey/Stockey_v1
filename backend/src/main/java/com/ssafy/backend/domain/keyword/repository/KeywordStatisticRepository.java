package com.ssafy.backend.domain.keyword.repository;

import com.ssafy.backend.domain.keyword.dto.KeywordStatisticDto;
import com.ssafy.backend.domain.keyword.entity.Keyword;
import com.ssafy.backend.domain.keyword.entity.KeywordStatistic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface KeywordStatisticRepository extends JpaRepository<KeywordStatistic, Long> {
    @Query("SELECT ks.statisticDate as statisticDate, ks.count as count " +
            "FROM KeywordStatistic ks " +
            "WHERE ks.category = 'FREQ' AND ks.keyword.id = :keywordId")
    List<KeywordStatisticDto> findFreqStatisticsByKeywordId(@Param("keywordId") Long keywordId);

    @Query("SELECT AVG(ks.count) AS avgAmount " +
            " FROM KeywordStatistic ks " +
            " WHERE ks.keyword = :keyword " +
            " AND ks.statisticDate BETWEEN :startDate and :endDate " +
            " GROUP BY WEEK(ks.statisticDate) ")
    List<Double> findAvgKeywordCount(Keyword keyword, LocalDate startDate, LocalDate endDate);

}
