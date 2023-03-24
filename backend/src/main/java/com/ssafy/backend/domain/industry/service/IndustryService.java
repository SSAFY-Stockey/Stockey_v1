package com.ssafy.backend.domain.industry.service;


import com.ssafy.backend.domain.industry.api.response.IndustryCapitalDto;
import com.ssafy.backend.domain.industry.dto.IndustryDto;
import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.industry.mapper.IndustryDtoMapper;
import com.ssafy.backend.domain.industry.mapper.IndustryMapper;
import com.ssafy.backend.domain.industry.repository.IndustryRepository;
import com.ssafy.backend.domain.stock.dto.StockBriefDto;
import com.ssafy.backend.domain.stock.entity.Stock;
import com.ssafy.backend.domain.stock.mapper.StockMapper;
import com.ssafy.backend.domain.stock.repository.StockRepository;
import com.ssafy.backend.global.exception.industry.IndustryException;
import com.ssafy.backend.global.exception.industry.IndustryExceptionType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class IndustryService {
    private final IndustryRepository industryRepository;
    private final StockRepository stockRepository;
    private final IndustryMapper industryMapper;
    private final IndustryDtoMapper industryDtoMapper;
    private final StockMapper stockMapper;

    //모든 산업 반환
    public List<IndustryDto> getAll() {
        List<Industry> industries = industryRepository.findAll();
        return industryMapper.toDto(industries);
    }

    //단일 산업 상세
    public IndustryDto getOne(Long id) {
        Industry industry = getIndustry(id);
        return industryMapper.toDto(industry);
    }

    // 모든 산업에 대하여 시가총액순으로 반환
    public List<IndustryCapitalDto> getAllMarketCap() {
        List<Industry> industries = industryRepository.findAll();
        List<IndustryCapitalDto> results = new ArrayList<>();
        for (Industry industry : industries) {
            long sum = 0;
            // 해당 산업의 모든 종목들
            List<Stock> stocks = stockRepository.findTop5Stocks(industry);
            for (Stock stock : stocks) {
                sum += stock.getMarketCap();
            }
            // 시가총액이 존재한다면
            if (sum > 0) {
                results.add(industryDtoMapper.toDto(industry, sum));
            }
        }
        Collections.sort(results, ((o1, o2) -> -o1.getSum().compareTo(o2.getSum())));
        return results;
    }

    //시가총액 상위 5개 종목
    public List<StockBriefDto> getStockList() {
        List<Stock> stockList = stockRepository.findTop5Stocks();
        return stockMapper.toDto(stockList);

    }

    //해당 산업의 시가총액 상위 5개 종목
    public List<StockBriefDto> getStockList(Long id) {
        // 단방향 매핑으로 찾기
        Industry industry = getIndustry(id);
        List<Stock> stockList = stockRepository.findTop5Stocks(industry);
        return stockMapper.toDto(stockList);
    }

    // 산업 엔티티 반환
    private Industry getIndustry(Long id) {
        // 존재하지 않을 시 NOT FOUND 예외 발생
        return industryRepository.findById(id).orElseThrow(() -> new IndustryException(IndustryExceptionType.NOT_FOUND));
    }


}
