package com.ssafy.backend.domain.stock.mapper;


import com.ssafy.backend.domain.stock.dto.StockBriefDto;
import com.ssafy.backend.domain.stock.dto.StockDto;
import com.ssafy.backend.domain.stock.dto.StockPreviewDto;
import com.ssafy.backend.domain.stock.entity.Stock;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel= "spring")
public interface StockMapper {
    StockPreviewDto toPreviewDto(Stock s);
    List<StockBriefDto> toDto(List<Stock> stockList);
    List<StockDto> toStockDto(List<Stock> stockList);
    StockDto toStockDto(Stock stock);
}
