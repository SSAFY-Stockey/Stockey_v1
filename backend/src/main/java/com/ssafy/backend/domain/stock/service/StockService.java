package com.ssafy.backend.domain.stock.service;

import com.ssafy.backend.domain.keyword.dto.StockKeywordDto;
import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.stock.api.response.GetStockTodayResponse;
import com.ssafy.backend.domain.stock.dto.DailyStockDto;
import com.ssafy.backend.domain.stock.dto.StockDto;
import com.ssafy.backend.domain.stock.dto.StockPreviewDto;
import com.ssafy.backend.domain.stock.dto.StockSearchDto;

import java.util.List;

public interface StockService {
     StockDto getStock(Long stockId) throws Exception;
     Integer getStockIndustryMarketCapRank(Long stockId, Long industryId)throws Exception;
     Integer getStockIndustryFavoriteRank(Long stockId, Long industryId);
     Float getAverageIndustryChangeRate(Long industryId) throws Exception;
     List<StockPreviewDto> getStock() throws Exception;
     List<StockPreviewDto> getStockRandom(Integer count) throws Exception;
     List<StockKeywordDto> getStockKeyword(Long stockId) throws Exception;
     List<DailyStockDto> getDailyStock(Long stockId)throws Exception;
     DailyStockDto getTodayDailyStock(Long stockId)throws Exception;
     List<StockSearchDto> getSearchStock(String keyword)throws Exception;

     List<GetStockTodayResponse> getMyStocks(Member member);

     void addFavorite(Member member,Long id);
     void deleteFavorite(Member member,Long id);
     boolean checkFavorite(Member member,Long id);


}
