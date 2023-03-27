package com.ssafy.backend.domain.stock.entity;

import com.ssafy.backend.domain.industry.entity.Industry;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "stock")
public class Stock {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stock_id", nullable = false)
    private Long id;

    @Size(max = 45)
    @NotNull
    @Column(name = "name", nullable = false, length = 45)
    private String name;

    @Size(max = 45)
    @NotNull
    @Column(name = "code", nullable = false, length = 45)
    private String code;

    @Size(max = 500)
    @Column(name = "description", length = 500)
    private String description;

    @Column(name = "market_cap")
    private Long marketCap;

    @NotNull
    @Column(name = "stock_count", nullable = false)
    private Long stockCount;

    @Size(max = 45)
    @Column(name = "company_size", length = 45)
    private String companySize;

    @Size(max = 100)
    @Column(name = "company_sales", length = 100)
    private String companySales;

    @Size(max = 100)
    @Column(name = "credit_rank", length = 100)
    private String credit_rank;

    @Size(max = 200)
    @Column(name = "basic_info", length = 200)
    private String basic_info;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "industry_id", nullable = false)
    private Industry industry;

    @Builder
    public Stock(String name, String code, String description, Long marketCap, Long stockCount, Industry industry) {
        this.name = name;
        this.code = code;
        this.description = description;
        this.marketCap = marketCap;
        this.stockCount = stockCount;
        this.industry = industry;
    }
}