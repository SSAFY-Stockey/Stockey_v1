package com.ssafy.backend.domain.stock.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StockSearchDto {
    private Long id;
    private String name;
    private String code;
}
