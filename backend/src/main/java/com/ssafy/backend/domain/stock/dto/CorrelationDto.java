package com.ssafy.backend.domain.stock.dto;

import java.time.LocalDate;

public interface CorrelationDto {
    LocalDate getStockDate();
    Integer getClosePrice();
    Integer getCount();

}
