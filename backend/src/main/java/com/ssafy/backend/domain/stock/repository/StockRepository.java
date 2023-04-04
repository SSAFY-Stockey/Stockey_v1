package com.ssafy.backend.domain.stock.repository;

import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.stock.dto.IndustrySumDto;
import com.ssafy.backend.domain.stock.entity.Stock;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

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
    Integer findIndustryMarketCapRank(Long stockId, Long industryId);

    @Query(value = "SELECT ranking\n" +
            " FROM  (\n" +
                " SELECT stock_id, count(*), rank() over (order by count(*) desc) as ranking \n" +
                " FROM  favorite f \n" +
                " WHERE f.industry_id = :industryId \n" +
                " GROUP BY :stockId \n" +
            ") s\n" +
            " where s.stock_id = stockId;" ,nativeQuery = true)
    Integer findIndustryFavoriteRank(Long stockId,Long industryId);

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
