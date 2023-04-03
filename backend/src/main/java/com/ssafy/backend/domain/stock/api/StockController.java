package com.ssafy.backend.domain.stock.api;

import com.ssafy.backend.domain.keyword.dto.StockKeywordDto;
import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.member.repository.MemberRepository;
import com.ssafy.backend.domain.member.service.MemberService;
import com.ssafy.backend.domain.stock.api.response.GetStockResponse;
import com.ssafy.backend.domain.stock.api.response.GetStockTodayResponse;
import com.ssafy.backend.domain.stock.dto.DailyStockDto;
import com.ssafy.backend.domain.stock.dto.StockDto;
import com.ssafy.backend.domain.stock.dto.StockPreviewDto;
import com.ssafy.backend.domain.stock.dto.StockSearchDto;
import com.ssafy.backend.domain.stock.mapper.StockDtoMapper;
import com.ssafy.backend.domain.stock.service.StockService;
import com.ssafy.backend.global.annotation.Auth;
import com.ssafy.backend.global.dto.ResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stock")
@RequiredArgsConstructor
public class StockController {

    private final StockService stockService;
    private final StockDtoMapper stockDtoMapper;
    private final MemberService memberService;
    //TODO 삭제 예정
    private final MemberRepository memberRepository;

    /*
            3. 산업중에 사이트 내에서 검색된 순위
        * */
    @GetMapping("/{stockId}")
    public ResponseEntity<GetStockResponse> getStock(@PathVariable("stockId") Long stockId) throws Exception {
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
    public ResponseEntity<List<StockSearchDto>> getStockSearch(@RequestParam String keyword) throws Exception {
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

    // 내 관심종목 리스트
//    @Auth
    @Operation(summary = "관심 종목 리스트", description = "내 관심 종목 리스트를 출력합니다.")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공")
            }
    )
    @GetMapping("/my")
    public ResponseEntity<ResponseDto> getMyIndustries() {
        Member member = getMember();
        List<GetStockTodayResponse> myStocks = stockService.getMyStocks(member);
        return new ResponseEntity<>(new ResponseDto("OK", myStocks), HttpStatus.OK);

    }


    // 관심 여부 확인
//    @Auth
    @Operation(summary = "종목 관심 여부 체크", description = "해당 종목이 관심등록 했는지 체크합니다.")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공"),
                    @ApiResponse(responseCode = "401", description = "로그인 필요"),
                    @ApiResponse(responseCode = "404", description = "종목 없음"),
            }
    )
    @GetMapping("/my/{id}")
    public ResponseEntity<ResponseDto> checkFavorite(@PathVariable Long id) {
        Member member = getMember();
        boolean result = stockService.checkFavorite(member, id);
        return new ResponseEntity<>(new ResponseDto("OK", result), HttpStatus.OK);
    }

    // 관심 종목 등록
//    @Auth
    @Operation(summary = "관심 종목 등록", description = "관심 종목을 등록합니다.")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "201", description = "등록 성공"),
                    @ApiResponse(responseCode = "400", description = "이미 관심 종목 등록"),
                    @ApiResponse(responseCode = "404", description = "종목 없음"),
            }
    )
    @PostMapping("/my/{id}")
    public ResponseEntity<ResponseDto> addFavorite(@PathVariable Long id) {
        Member member = getMember();
        stockService.addFavorite(member, id);
        return new ResponseEntity<>(new ResponseDto("CREATED", null), HttpStatus.CREATED);
    }

    // 관심 종목 삭제
//    @Auth
    @Operation(summary = "관심 종목 삭제", description = "관심 종목을 삭제합니다.")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "201", description = "등록 성공"),
                    @ApiResponse(responseCode = "400", description = "다른 유저, 관심 종목 등록 X"),
                    @ApiResponse(responseCode = "404", description = "종목 없음"),
            }
    )
    @DeleteMapping("/my/{id}")
    public ResponseEntity<ResponseDto> deleteFavorite(@PathVariable Long id) {
        Member member = getMember();
        stockService.deleteFavorite(member, id);
        return new ResponseEntity<>(new ResponseDto("DELETED", null), HttpStatus.OK);
    }

    // TODO 수정 예정
    private Member getMember() {
        return memberRepository.findById(1L).get();
//        return memberService.getMemberEntity();

    }


}
