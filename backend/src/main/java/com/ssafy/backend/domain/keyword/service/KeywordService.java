package com.ssafy.backend.domain.keyword.service;

import com.ssafy.backend.domain.keyword.api.request.SearchKeywordRequest;
import com.ssafy.backend.domain.keyword.dto.KeywordDto;

import java.util.List;

public interface KeywordService {
//    List<KeywordDto> searchKeyword(SearchKeywordRequest searchKeyword);

    KeywordDto getKeywordDetail(Long keywordsId);

     getKeywordFreq(Long keywordsId);
}
