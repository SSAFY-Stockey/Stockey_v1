package com.ssafy.backend.domain.stock.repository;

import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.stock.entity.Stock;
import org.h2.mvstore.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StockRepository extends JpaRepository<Stock,Long> {
    @Query("select s from Stock s where s.industry = :industry order by s.marketCap  desc")
    List<Stock> findTop5Stocks(@Param("industry") Industry industry);
    @Query("select s from Stock s order by s.marketCap desc")
    List<Stock> findTop5Stocks();
}
