package com.ssafy.backend.domain.keyword.repository;

import com.ssafy.backend.domain.keyword.dto.StockKeywordDto;
import com.ssafy.backend.domain.keyword.entity.Keyword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface KeywordRepository extends JpaRepository<Keyword, Long> {

    @Query(value = "SELECT k.keyword_id, k.name, b.count\n" +
            "FROM keyword k\n" +
            "JOIN (SELECT keyword_id,count(*) as count\n" +
            "FROM news_relation\n" +
            "WHERE stock_id = :stockId \n" +
            "GROUP BY keyword_id\n" +
            "ORDER BY count DESC\n" +
            "LIMIT 6) as b\n" +
            "ON k.keyword_id = b.keyword_id\n" +
            "ORDER BY count DESC;",nativeQuery = true)
    List<StockKeywordDto> findStockKeywords(Long stockId);
}
