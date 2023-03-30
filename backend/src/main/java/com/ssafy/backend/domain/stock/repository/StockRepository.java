package com.ssafy.backend.domain.stock.repository;

import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.stock.entity.DailyStock;
import com.ssafy.backend.domain.stock.entity.Stock;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

public interface StockRepository extends JpaRepository<Stock,Long> {

    Optional<Stock> findById(Long id);

    List<Stock> findByIndustry(Industry industry);

    @Query(value = "SELECT * FROM stock ORDER BY RAND() LIMIT :count", nativeQuery = true)
    List<Stock> findStockRandom(Integer count);
    @Query("select s from Stock s where s.industry = :industry order by s.marketCap  desc")
    List<Stock> findTop5Stocks(@Param("industry") Industry industry,Pageable pageable);
    @Query("select s from Stock s order by s.marketCap desc")
    List<Stock> findTop5Stocks(Pageable pageable);

    @Query(value = "SELECT ranking\n" +
            "FROM (\n" +
            "\tSELECT stock_id, dense_rank() over (order by market_cap desc) as ranking \n" +
            "\tFROM stock\n" +
            "\tWHERE industry_id = :industryId ) as b\n" +
            "WHERE stock_id = :stockId ;", nativeQuery = true)
    Integer findIndustryRank(Long stockId, Long industryId);

    @Query(value = "select avg(change_rate), stock_date\n" +
            "from daily_stock\n" +
            "where stock_id in (select stock_id from stock where industry_id= :industryId )\n" +
            "group by stock_date\n" +
            "order by stock_date DESC\n" +
            "limit 1;", nativeQuery = true)
    Float findAverageIndustryChangeRate(Long industryId);

    @Query("select s from Stock s where s.name like :keyword")
    List<Stock> findByName(String keyword);
}
