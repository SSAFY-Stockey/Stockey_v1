package com.ssafy.backend.domain.stock.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class StockTodayDto {
    Long id;
    String name;
    Integer price;
    Float rate;
}
