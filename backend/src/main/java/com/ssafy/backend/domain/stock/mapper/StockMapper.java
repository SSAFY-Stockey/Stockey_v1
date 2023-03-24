package com.ssafy.backend.domain.stock.mapper;

import com.ssafy.backend.domain.stock.dto.IndustryDto;
import com.ssafy.backend.domain.stock.dto.StockDto;
import com.ssafy.backend.domain.stock.entity.Stock;
import com.ssafy.backend.temp.Industry;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface StockMapper {

    StockDto toStockDto(Stock stock);
}
