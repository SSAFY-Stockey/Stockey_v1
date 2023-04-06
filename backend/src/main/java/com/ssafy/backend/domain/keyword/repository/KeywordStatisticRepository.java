package com.ssafy.backend.domain.keyword.repository;

import com.ssafy.backend.domain.keyword.dto.KeywordStatisticDto;
import com.ssafy.backend.domain.keyword.entity.Keyword;
import com.ssafy.backend.domain.keyword.entity.KeywordStatistic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

public interface KeywordStatisticRepository extends JpaRepository<KeywordStatistic, Long> {
    @Query("SELECT ks.statisticDate as statisticDate, ks.count as count " +
            "FROM KeywordStatistic ks " +
            "WHERE ks.category = 'FREQ' AND ks.keyword.id = :keywordId")
    List<KeywordStatisticDto> findFreqStatisticsByKeywordId(@Param("keywordId") Long keywordId);

    @Query("    SELECT" +
            " CASE " +
            " WHEN ks.statisticDate IN :stockDates THEN ks.count" +
            " ELSE 0 " +
            " END  " +
            " FROM KeywordStatistic ks " +
            " WHERE ks.keyword = :keyword ")
    List<Double> findKeywordCount(Keyword keyword,List<LocalDate> stockDates);

}
