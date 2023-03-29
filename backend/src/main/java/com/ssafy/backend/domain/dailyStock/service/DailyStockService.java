package com.ssafy.backend.domain.dailyStock.service;

import com.ssafy.backend.domain.dailyStock.dto.DailyStockDto;
import com.ssafy.backend.domain.dailyStock.entity.DailyStock;
import com.ssafy.backend.domain.dailyStock.mapper.DailyStockMapper;
import com.ssafy.backend.domain.dailyStock.repository.DailyStockRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DailyStockService {

    private final DailyStockRepository dailyStockRepository;
    private final DailyStockMapper dailyStockMapper;
    public DailyStockDto getTodayDailyStock(Long stockId)throws Exception{
        DailyStock dailyStock = dailyStockRepository.findTodayDailyStock(stockId).orElseThrow(()->new Exception());
        DailyStockDto dailyStockDto = dailyStockMapper.toDailyStockDto(dailyStock);
        return dailyStockDto;
    }
}
