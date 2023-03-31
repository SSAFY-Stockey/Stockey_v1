package com.ssafy.backend.domain.keyword.repository;

import com.ssafy.backend.domain.keyword.dto.KeywordStatisticDto;
import com.ssafy.backend.domain.keyword.entity.KeywordStatistic;
import com.ssafy.backend.domain.keyword.enums.StatisticType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface KeywordStatisticRepository extends JpaRepository<KeywordStatistic, Long> {
    @Query("SELECT ks.statisticDate, ks.count " +
            "FROM KeywordStatistic ks " +
            "WHERE ks.category = :category AND ks.keyword.id = :keywordId")
    List<KeywordStatisticDto> findStatisticsByCategoryAndKeywordId(@Param("category") StatisticType category,
                                                                   @Param("keywordId") Long keywordId);
//    @Query("SELECT ks.statisticDate, ks.count " +
//            "FROM KeywordStatistic ks " +
//            "WHERE ks.category = :category AND ks.keyword.id = :keywordId")
//    List<KeywordStatistic> findStatisticsByCategoryAndKeywordId(@Param("category") StatisticType category,
//                                                                   @Param("keywordId") Long keywordId);

}
