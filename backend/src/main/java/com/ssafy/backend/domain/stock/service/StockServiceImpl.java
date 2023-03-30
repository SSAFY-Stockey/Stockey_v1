package com.ssafy.backend.domain.stock.service;

import com.ssafy.backend.domain.stock.dto.*;
import com.ssafy.backend.domain.industry.dto.IndustryDto;
import com.ssafy.backend.domain.industry.mapper.IndustryMapper;
import com.ssafy.backend.domain.keyword.dto.StockKeywordDto;
import com.ssafy.backend.domain.keyword.repository.KeywordRepository;
import com.ssafy.backend.domain.stock.entity.DailyStock;
import com.ssafy.backend.domain.stock.entity.Stock;
import com.ssafy.backend.domain.stock.mapper.BusinessMapper;
import com.ssafy.backend.domain.stock.mapper.StockMapper;
import com.ssafy.backend.domain.stock.repository.DailyStockRepository;
import com.ssafy.backend.domain.stock.repository.StockRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StockServiceImpl implements StockService{

    private final StockRepository stockRepository;
    private final StockMapper stockMapper;
    private final IndustryMapper industryMapper;
    private final BusinessMapper businessMapper;
    private final KeywordRepository keywordRepository;

    private final DailyStockRepository dailyStockRepository;

    public StockDto getStock(Long stockId) throws Exception {
        Stock stock = stockRepository.findById(stockId).orElseThrow(()->new Exception());
        StockDto stockDto = stockMapper.toStockDto(stock);
        IndustryDto industryDto = industryMapper.toDto(stock.getIndustry());
        List<BusinessDto> businessDtos = businessMapper.toDto(stock.getBusinesses());
        stockDto.setIndustry(industryDto);
        stockDto.setBusinesses(businessDtos);
        Integer rank = getStockIndustryRank(stockId, industryDto.getId());
        stockDto.setIndustryRank(rank);
        Float avgRate = getAverageIndustryChangeRate(industryDto.getId());
        stockDto.setIndustryAvgChangeRate(avgRate);
        DailyStockDto dailyStockDto =getTodayDailyStock(stockId);
        stockDto.setTodayDailyStock(dailyStockDto);
        return stockDto;
    }

    public Integer getStockIndustryRank(Long stockId, Long industryId)throws Exception{
        Integer rank = stockRepository.findIndustryRank(stockId, industryId);
        return rank;
    }

    public Float getAverageIndustryChangeRate(Long industryId) throws Exception{
        Float avgChangeRate = stockRepository.findAverageIndustryChangeRate(industryId);
        return avgChangeRate;
    }

    public List<StockPreviewDto> getStock() throws Exception {
        List<Stock> stocks = stockRepository.findAll();
        List<StockPreviewDto> stockPreviewDtos = new ArrayList<>();
        for (Stock s :stocks){
            StockPreviewDto stockPreviewDto = stockMapper.toPreviewDto(s);
            DailyStockDto dailyStockDto =getTodayDailyStock(s.getId());
            stockPreviewDto.setTodayDailyStock(dailyStockDto);
            stockPreviewDtos.add(stockPreviewDto);
        }
        return stockPreviewDtos;
    }

    public List<StockPreviewDto> getStockRandom(Integer count) throws Exception{
        List<Stock> stocks = stockRepository.findStockRandom(count);
        List<StockPreviewDto> stockPreviewDtos = new ArrayList<>();
        for (Stock s :stocks){
            StockPreviewDto stockPreviewDto = stockMapper.toPreviewDto(s);
            DailyStockDto dailyStockDto =getTodayDailyStock(s.getId());
            stockPreviewDto.setTodayDailyStock(dailyStockDto);
            stockPreviewDtos.add(stockPreviewDto);
        }
        return stockPreviewDtos;
    }


    public List<StockKeywordDto> getStockKeyword(Long stockId) throws Exception{
        List<StockKeywordDto> stockKeyword = keywordRepository.findStockKeywords(stockId);
        return stockKeyword;
    }

    public List<DailyStockDto> getDailyStock(Long stockId) throws Exception{
        List<DailyStock> dailyStock = dailyStockRepository.findByStockId(stockId);
        List<DailyStockDto> dailyStockDtos = stockMapper.toDailyStockDto(dailyStock);
        return dailyStockDtos;
    }

    public DailyStockDto getTodayDailyStock(Long stockId)throws Exception{
        DailyStock dailyStock = dailyStockRepository.findTodayDailyStock(stockId).orElseThrow(()->new Exception());
        DailyStockDto dailyStockDto = stockMapper.toDailyStockDto(dailyStock);
        return dailyStockDto;
    }

    public List<StockSearchDto> getSearchStock(String keyword) throws Exception{
        keyword = '%'+keyword+'%';
        List<Stock> stocks = stockRepository.findByName(keyword);
        List<StockSearchDto> stockSearchDtos = stockMapper.toSearchDto(stocks);
        return stockSearchDtos;
    }
}
