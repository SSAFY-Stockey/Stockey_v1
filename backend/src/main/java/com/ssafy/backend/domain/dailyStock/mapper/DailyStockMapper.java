package com.ssafy.backend.domain.dailyStock.mapper;

import com.ssafy.backend.domain.dailyStock.dto.DailyStockDto;
import com.ssafy.backend.domain.dailyStock.entity.DailyStock;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DailyStockMapper {
    DailyStockDto toDailyStockDto(DailyStock dailyStock);
}
