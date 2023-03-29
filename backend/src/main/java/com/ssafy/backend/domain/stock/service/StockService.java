package com.ssafy.backend.domain.stock.service;

import com.ssafy.backend.domain.dailyStock.dto.DailyStockDto;
import com.ssafy.backend.domain.dailyStock.service.DailyStockService;
import com.ssafy.backend.domain.industry.dto.IndustryDto;
import com.ssafy.backend.domain.industry.mapper.IndustryMapper;
import com.ssafy.backend.domain.keyword.dto.KeywordNameDto;
import com.ssafy.backend.domain.keyword.dto.StockKeywordDto;
import com.ssafy.backend.domain.keyword.repository.KeywordRepository;
import com.ssafy.backend.domain.stock.dto.BusinessDto;
import com.ssafy.backend.domain.stock.dto.StockDto;
import com.ssafy.backend.domain.stock.dto.StockPreviewDto;
import com.ssafy.backend.domain.stock.entity.Business;
import com.ssafy.backend.domain.stock.entity.Stock;
import com.ssafy.backend.domain.stock.mapper.BusinessMapper;
import com.ssafy.backend.domain.stock.mapper.StockMapper;
import com.ssafy.backend.domain.stock.repository.StockRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StockService {

    private final StockRepository stockRepository;
    private final StockMapper stockMapper;
    private final IndustryMapper industryMapper;
    private final BusinessMapper businessMapper;
    private final DailyStockService dailyStockService;
    private final KeywordRepository keywordRepository;
    public StockDto getStock(Long stockId) throws Exception {
        Stock stock = stockRepository.findById(stockId).orElseThrow(()->new Exception());
        StockDto stockDto = stockMapper.toStockDto(stock);
        IndustryDto industryDto = industryMapper.toDto(stock.getIndustry());
        List<BusinessDto> businessDtos = businessMapper.toDto(stock.getBusinesses());
        stockDto.setIndustry(industryDto);
        stockDto.setBusinesses(businessDtos);
        return stockDto;
    }


    public List<StockPreviewDto> getStockRandom(Integer count) throws Exception{
        List<Stock> stocks = stockRepository.findStockRandom(count);
        List<StockPreviewDto> stockPreviewDtos = new ArrayList<>();
        for (Stock s :stocks){
            StockPreviewDto stockPreviewDto = stockMapper.toPreviewDto(s);
            DailyStockDto dailyStockDto =dailyStockService.getTodayDailyStock(s.getId());
            stockPreviewDto.setTodayDailyStock(dailyStockDto);
            stockPreviewDtos.add(stockPreviewDto);
        }
        return stockPreviewDtos;
    }


    public List<StockKeywordDto> getStockKeyword(Long stockId) {
        List<StockKeywordDto> stockKeywords = keywordRepository.findStockKeywords(stockId);
        return stockKeywords;
    }
}
