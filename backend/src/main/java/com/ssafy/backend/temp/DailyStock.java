package com.ssafy.backend.temp;

import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Entity
@Table(name = "daily_stock")
public class DailyStock {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "daily_stock_id", nullable = false)
    private Long id;

    @NotNull
    @Column(name = "stock_date", nullable = false)
    private LocalDate stockDate;

    @NotNull
    @Column(name = "open_price", nullable = false)
    private Integer openPrice;

    @NotNull
    @Column(name = "close_price", nullable = false)
    private Integer closePrice;

    @NotNull
    @Column(name = "low_price", nullable = false)
    private Integer lowPrice;

    @NotNull
    @Column(name = "high_price", nullable = false)
    private Integer highPrice;

    @NotNull
    @Column(name = "volume", nullable = false)
    private Integer volume;

    @NotNull
    @Column(name = "change_rate", nullable = false)
    private Float changeRate;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "stock_id", nullable = false)
    private Stock stock;

}