package com.ssafy.backend.domain.keyword.service;

import com.ssafy.backend.domain.keyword.api.request.SearchKeywordRequest;
import com.ssafy.backend.domain.keyword.dto.KeywordDto;
import com.ssafy.backend.domain.keyword.dto.KeywordStatisticDto;

import java.util.List;

public interface KeywordService {
//    List<KeywordDto> searchKeyword(SearchKeywordRequest searchKeyword);

    KeywordDto getKeywordDetail(Long keywordsId);

    List<KeywordStatisticDto> getKeywordFreq(Long keywordsId);

//     getKeywordFreq(Long keywordsId);
}
