package com.ssafy.backend.domain.stock.mapper;

import com.ssafy.backend.domain.industry.dto.StockBriefDto;
import com.ssafy.backend.domain.stock.entity.Stock;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel= "spring")
public interface StockMapper {
    List<StockBriefDto> toDto(List<Stock> stockList);

}
