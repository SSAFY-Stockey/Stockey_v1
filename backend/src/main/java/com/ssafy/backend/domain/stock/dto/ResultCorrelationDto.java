package com.ssafy.backend.domain.stock.dto;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ResultCorrelationDto {
    Long id;
    String name;
    Double correlation;
}
