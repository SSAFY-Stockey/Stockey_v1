package com.ssafy.backend.domain.stock.repository;

import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.stock.dto.IndustrySumDto;
import com.ssafy.backend.domain.stock.entity.Stock;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StockRepository extends JpaRepository<Stock,Long> {



    @Query(value = "SELECT sum(cap) as marketCap, temp.stock_date as stockDate \n" +
            "FROM \n" +
            "(SELECT s.stock_count * ds.close_price as cap, ds.stock_date, s.stock_id, s.industry_id\n" +
            "FROM \n" +
            "daily_stock ds\n" +
            "JOIN stock s\n" +
            "ON ds.stock_id = s.stock_id\n" +
            "WHERE \n" +
            "ds.stock_id in (select stock_id from stock t where t.industry_id=1)) AS temp \n" +
            "GROUP BY temp.stock_date;",nativeQuery = true)
    List<IndustrySumDto> getMarketList(Industry industry);

    List<Stock> findByIndustry(Industry industry);
    @Query("select s from Stock s where s.industry = :industry order by s.marketCap  desc")
    List<Stock> findTop5Stocks(@Param("industry") Industry industry,Pageable pageable);
    @Query("select s from Stock s order by s.marketCap desc")
    List<Stock> findTop5Stocks(Pageable pageable);
}
