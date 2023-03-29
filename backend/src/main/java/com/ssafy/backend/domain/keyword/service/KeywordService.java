package com.ssafy.backend.domain.keyword.service;

import com.ssafy.backend.domain.keyword.dto.StockKeywordDto;
import com.ssafy.backend.domain.keyword.repository.KeywordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class KeywordService {

    private final KeywordRepository keywordRepository;

    public List<StockKeywordDto> getStockKeyword(Long stockId) throws Exception{
        List<StockKeywordDto> stockKeywords = keywordRepository.findStockKeywords(stockId);
        return stockKeywords;
    }
}
