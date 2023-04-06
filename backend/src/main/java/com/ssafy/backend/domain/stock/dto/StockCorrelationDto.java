package com.ssafy.backend.domain.stock.dto;

import com.ssafy.backend.domain.stock.entity.Stock;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class StockCorrelationDto implements  Comparable<StockCorrelationDto>{
    Stock stock;
    Double correlation;

    @Override
    public int compareTo(StockCorrelationDto o) {
        Double me = Math.abs(this.correlation);
        Double other = Math.abs(o.correlation);
        return -1*me.compareTo(other);
    }
}
