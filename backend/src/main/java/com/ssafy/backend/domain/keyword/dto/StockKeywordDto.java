package com.ssafy.backend.domain.keyword.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StockKeywordDto {

    private Long keyword_id;
    private String name;
    private Long count;
}
