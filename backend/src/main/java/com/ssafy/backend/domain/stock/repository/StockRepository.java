package com.ssafy.backend.domain.stock.repository;

import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.stock.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StockRepository extends JpaRepository<Stock,Long> {
    List<Stock> findStocksByIndustry(Industry industry);
}
