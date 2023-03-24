package com.ssafy.backend.domain.stock.dto;

import com.ssafy.backend.temp.Industry;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StockDto {

    private Long id;
    private String name;
    private String code;
    private String description;
    private Long marketCap;
    private Long stockCount;

    private IndustryDto industry;
    @Builder
    public StockDto(Long id, String name, String code, String description, Long marketCap, Long stockCount, IndustryDto industry) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.description = description;
        this.marketCap = marketCap;
        this.stockCount = stockCount;
        this.industry = industry;
    }
}
