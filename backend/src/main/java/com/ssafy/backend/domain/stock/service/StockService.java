package com.ssafy.backend.domain.stock.service;

import com.ssafy.backend.domain.stock.dto.IndustryDto;
import com.ssafy.backend.domain.stock.dto.StockDto;
import com.ssafy.backend.domain.stock.entity.Stock;
import com.ssafy.backend.domain.stock.mapper.IndustryMapper;
import com.ssafy.backend.domain.stock.mapper.StockMapper;
import com.ssafy.backend.domain.stock.repository.StockRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StockService {

    private final StockRepository stockRepository;
    private final StockMapper stockMapper;
    private final IndustryMapper industryMapper;
    public StockDto getStock(Long stockId) throws Exception {
        Stock stock = stockRepository.findById(stockId).orElseThrow(()->new Exception());
        IndustryDto industryDto = industryMapper.toIndustryDto(stock.getIndustry());
        StockDto stockDto = stockMapper.toStockDto(stock);
        stockDto.setIndustry(industryDto);
        return stockDto;
    }
}
