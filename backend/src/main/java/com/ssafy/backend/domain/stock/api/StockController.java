package com.ssafy.backend.domain.stock.api;

import com.ssafy.backend.domain.keyword.dto.StockKeywordDto;
import com.ssafy.backend.domain.stock.api.response.GetStockResponse;
import com.ssafy.backend.domain.stock.dto.DailyStockDto;
import com.ssafy.backend.domain.stock.dto.StockDto;
import com.ssafy.backend.domain.stock.dto.StockPreviewDto;
import com.ssafy.backend.domain.stock.dto.StockSearchDto;
import com.ssafy.backend.domain.stock.mapper.StockDtoMapper;
import com.ssafy.backend.domain.stock.service.StockService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stock")
@RequiredArgsConstructor
public class StockController {

    private final StockService stockService;
    private final StockDtoMapper stockDtoMapper;

    /*
            3. 산업중에 사이트 내에서 검색된 순위
        * */
    @GetMapping("/{stockId}")
    public ResponseEntity<GetStockResponse> getStock(@PathVariable("stockId") Long stockId) throws Exception{
        StockDto stockDto = stockService.getStock(stockId);
        return ResponseEntity.ok(stockDtoMapper.toGetStockResponse(stockDto));
    }

    @GetMapping
    public ResponseEntity<List<StockPreviewDto>> getStock() throws Exception {
        List<StockPreviewDto> stockPreviewDtos = stockService.getStock();
        return ResponseEntity.ok(stockPreviewDtos);
    }

    @GetMapping("/random")
    public ResponseEntity<List<StockPreviewDto>> getStockRandom(@RequestParam Integer count) throws Exception {
        List<StockPreviewDto> stockPreviewDtos = stockService.getStockRandom(count);
        return ResponseEntity.ok(stockPreviewDtos);
    }

    @GetMapping("/search")
    public ResponseEntity<List<StockSearchDto>> getStockSearch(@RequestParam String keyword)throws Exception{
        List<StockSearchDto> stockSearchDtos = stockService.getSearchStock(keyword);
        return ResponseEntity.ok(stockSearchDtos);
    }

    @GetMapping("/{stockId}/keyword")
    public ResponseEntity<List<StockKeywordDto>> getStockKeyword(@PathVariable("stockId") Long stockId) throws Exception {
        List<StockKeywordDto> keywords = stockService.getStockKeyword(stockId);
        return ResponseEntity.ok(keywords);
    }

    @GetMapping("/{stockId}/dailystock")
    public ResponseEntity<List<DailyStockDto>> getDailyStock(@PathVariable("stockId") Long stockId) throws Exception {
        List<DailyStockDto> dailyStockDtos = stockService.getDailyStock(stockId);
        return ResponseEntity.ok(dailyStockDtos);
    }
}
