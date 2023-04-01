package com.ssafy.backend.domain.keyword.api;

import com.ssafy.backend.domain.keyword.api.request.SearchKeywordRequest;
import com.ssafy.backend.domain.keyword.api.response.KeywordDetailResponse;
import com.ssafy.backend.domain.keyword.dto.KeywordDto;
import com.ssafy.backend.domain.keyword.dto.KeywordStatisticDto;
import com.ssafy.backend.domain.keyword.mapper.KeywordDtoMapper;
import com.ssafy.backend.domain.keyword.service.KeywordService;
import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.member.service.MemberService;
import com.ssafy.backend.domain.stock.api.response.GetStockTodayResponse;
import com.ssafy.backend.global.annotation.Auth;
import com.ssafy.backend.global.dto.ResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/keywords")
public class KeywordController {

    private final KeywordService keywordService;
    private final KeywordDtoMapper keywordDtoMapper;

    @Operation(summary = "keyword detail", description = "키워드 상세정보")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공"),
                    @ApiResponse(responseCode = "400", description = "잘못된 요청"),
                    @ApiResponse(responseCode = "404", description = "키워드 데이터 없음")
            }
    )
    @GetMapping("/{keywordsId}")
    public ResponseEntity<ResponseDto> getKeywordDetail(@Valid @NotNull @Min(value = -1) @PathVariable Long keywordsId) {
        KeywordDto keywordDto = keywordService.getKeywordDetail(keywordsId);
        KeywordDetailResponse keywordDetailResponse = keywordDtoMapper.toKeywordDetailResponse(keywordDto);
        return new ResponseEntity<>(new ResponseDto("키워드 상세 정보", keywordDetailResponse), HttpStatus.OK);
    }


    @Operation(summary = "keyword frequency", description = "모든 기간의 키워드 빈도")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공"),
            }
    )
    @GetMapping("/{keywordsId}/frequency")
    public ResponseEntity<ResponseDto> getKeywordFreq(@Valid @NotNull @Min(value = -1) @PathVariable Long keywordsId) {
        List<KeywordStatisticDto> keywordFreq = keywordService.getKeywordFreq(keywordsId);
        return new ResponseEntity<>(new ResponseDto("일자별 키워드 빈도", keywordFreq), HttpStatus.OK);
    }


    // 내 관심종목 리스트
    @Auth
    @Operation(summary = "관심 종목 리스트", description = "내 관심 종목 리스트를 출력합니다.")
    @ApiResponses(
            value = {
                    @ApiResponse(responseCode = "200", description = "요청 성공")
            }
    )
    @GetMapping("/my")
    public ResponseEntity<ResponseDto> getMyKeywords() {
        List<KeywordDto> myKeywords = keywordService.getMyKeywords();
        return new ResponseEntity<>(new ResponseDto("관심 키워드 출력!",
                keywordDtoMapper.toKeywordResponse(myKeywords)), HttpStatus.OK);

    }
}
