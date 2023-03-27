package com.ssafy.backend.domain.industry.service;

import com.ssafy.backend.domain.industry.api.response.IndustryCapitalDto;
import com.ssafy.backend.domain.industry.dto.IndustryDto;
import com.ssafy.backend.domain.stock.dto.StockBriefDto;

import java.util.List;

public interface IndustryService {
    public List<IndustryDto> getAll();
    public IndustryDto getOne(Long id);
    public List<IndustryCapitalDto> getAllMarketCap();
    public List<StockBriefDto> getStockList();
    public List<StockBriefDto> getStockList(Long id);
}
