package com.ssafy.backend.domain.stock.dto;


import java.time.LocalDate;

public interface IndustrySumDto {
    LocalDate getStockDate();
    Long getMarketCap();
}
