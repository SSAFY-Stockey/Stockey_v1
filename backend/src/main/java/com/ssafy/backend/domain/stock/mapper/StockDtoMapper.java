package com.ssafy.backend.domain.stock.mapper;

import com.ssafy.backend.domain.stock.api.response.GetStockResponse;
import com.ssafy.backend.domain.stock.dto.StockDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StockDtoMapper {
    GetStockResponse toGetStockResponse(StockDto stockDto);


}
