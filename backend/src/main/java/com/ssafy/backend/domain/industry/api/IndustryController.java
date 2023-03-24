package com.ssafy.backend.domain.industry.api;

import com.ssafy.backend.domain.industry.api.response.IndustryCapitalDto;
import com.ssafy.backend.domain.industry.dto.IndustryDto;
import com.ssafy.backend.domain.stock.dto.StockBriefDto;
import com.ssafy.backend.domain.industry.service.IndustryService;
import com.ssafy.backend.global.dto.ResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@Slf4j
@RequestMapping("/industry")
@RequiredArgsConstructor
@Tag(name = "산업 ", description = "산업 관련 API 입니다.")
public class IndustryController {
    private final IndustryService industryService;


    @Operation(summary = "산업 리스트 목록 반환 ", description = "산업 리스트를 반환해주는 메소드입니다.")
    @GetMapping
    public ResponseEntity<ResponseDto> getAll() {
        List<IndustryDto> all = industryService.getAll();
        return new ResponseEntity<>(new ResponseDto("OK", all), HttpStatus.OK);
    }

    // 산업 상세 설명

    @Operation(summary = "단일 산업 반환 ", description = "산업 하나의 정보를 반환해주는 메소드입니다.")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공"),
                    @ApiResponse(responseCode = "404", description = "해당 산업 없음")
            }
    )
    @GetMapping("/{id}")
    public ResponseEntity<ResponseDto> getOne(@PathVariable Long id) {
        IndustryDto one = industryService.getOne(id);
        return new ResponseEntity<>(new ResponseDto("OK", one), HttpStatus.OK);
    }

    @Operation(summary = "산업별 시가총액 리스트", description = "산업별 시가총액 리스트를 반환합니다. 시가총액 순으로 정렬")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공"),
            }
    )
    @GetMapping("/marketcap")
    public ResponseEntity<ResponseDto> getAllMarketCapList() {
        List<IndustryCapitalDto> allMarketCap = industryService.getAllMarketCap();
        return new ResponseEntity<>(new ResponseDto("OK", allMarketCap), HttpStatus.OK);
    }


    @Operation(summary = "종목 시가총액 top5 ", description = "시가총액 순으로 정렬")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공"),
            }
    )
    @GetMapping("/stocklist")
    public ResponseEntity<ResponseDto> getTop5Stocks() {
        List<StockBriefDto> stockList = industryService.getStockList();
        return new ResponseEntity<>(new ResponseDto("OK", stockList), HttpStatus.OK);
    }


    @Operation(summary = "해당 산업 시가총액 top5", description = "해당 산업에 해당하는 종목 리스트들을 반환해주는 리스트입니다.(시가총액 순으로 정렬)")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공"),
                    @ApiResponse(responseCode = "404", description = "해당 산업 없음"
                    )
            }
    )
    @GetMapping("/stocklist/{id}")
    public ResponseEntity<ResponseDto> getStockList(@PathVariable Long id) {
        List<StockBriefDto> stockList = industryService.getStockList(id);
        return new ResponseEntity<>(new ResponseDto("OK", stockList), HttpStatus.OK);
    }

    // TODO 관심 산업 추가 기능

}
