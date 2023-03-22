package com.ssafy.backend.domain.industry.service;


import com.ssafy.backend.domain.industry.dto.IndustryDto;
import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.industry.mapper.IndustryMapper;
import com.ssafy.backend.domain.industry.repository.IndustryRepository;
import com.ssafy.backend.global.exception.industry.IndustryException;
import com.ssafy.backend.global.exception.industry.IndustryExceptionType;
import lombok.RequiredArgsConstructor;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class IndustryService {
    private final IndustryRepository industryRepository;

    //    private final StockRepository stockRepository;
    private final IndustryMapper industryMapper = Mappers.getMapper(IndustryMapper.class);

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

    // 현재 산업에 대한 모든 시가총액 리스트 출력 ( Stock이 구현되어야 함)
//    public List<StockDto> getStockList(Long id)  {
//        //check industry
//        Industry industry = getIndustry(id);
//
//        // 단방향 매핑으로 찾기
//        List<Stock> stockList = stockRepository.findByIndustry(industry);
//        Collections.sort(stockList,(o1, o2)-> o1.getMarketCap().compareTo(o2.getMarketCap()));
//
//
//        return stock;
//    }


    // 산업 엔티티 반환
    private Industry getIndustry(Long id) {
        // 존재하지 않을 시 NOT FOUND 예외 발생
        return industryRepository.findById(id).orElseThrow(() -> new IndustryException(IndustryExceptionType.NOT_FOUND));
    }



}
