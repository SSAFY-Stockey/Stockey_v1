package com.ssafy.backend.domain.stock.repository;

import com.ssafy.backend.domain.stock.entity.DailyStock;
import com.ssafy.backend.domain.stock.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface DailyStockRepository extends JpaRepository<DailyStock, Long> {

    @Query(value = "SELECT * FROM daily_stock WHERE stock_id = :stockId ORDER BY stock_date DESC LIMIT 1", nativeQuery = true)
    Optional<DailyStock> findTodayDailyStock(Long stockId);

    List<DailyStock> findByStockId(Long stockId);


    @Query("SELECT AVG(ds.closePrice) AS avgAmount " +
            " FROM DailyStock ds " +
            " WHERE ds.stock = :stock " +
            " AND ds.stockDate BETWEEN :startDate and :endDate " +
            " GROUP BY WEEK(ds.stockDate) ")
    List<Double> getStockweekStatistic(Stock stock, LocalDate startDate, LocalDate endDate);

}
