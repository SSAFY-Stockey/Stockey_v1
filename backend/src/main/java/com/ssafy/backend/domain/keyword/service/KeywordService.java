package com.ssafy.backend.domain.keyword.service;

import com.ssafy.backend.domain.keyword.api.request.GetKeyphraseRequest;
import com.ssafy.backend.domain.keyword.api.request.GetTopNKeywordRequest;
import com.ssafy.backend.domain.keyword.dto.GetKeyPhraseResponse;
import com.ssafy.backend.domain.keyword.dto.KeywordDto;
import com.ssafy.backend.domain.keyword.dto.KeywordStatisticDto;
import com.ssafy.backend.domain.keyword.dto.TopKeywordDTO;

import java.util.List;

public interface KeywordService {
//    List<KeywordDto> searchKeyword(SearchKeywordRequest searchKeyword);

    KeywordDto getKeywordDetail(Long keywordsId);

    List<KeywordStatisticDto> getKeywordFreq(Long keywordsId);

    List<KeywordDto> getMyKeywords();

    boolean checkFavorite(Long id);

    void addFavorite(Long id);

    void deleteFavorite(Long id);

    Long getTargetNewsCount(GetTopNKeywordRequest getTopNKeywordRequest);

    List<TopKeywordDTO> getTopNKeyword(GetTopNKeywordRequest getTopNKeywordRequest);

    List<GetKeyPhraseResponse.Message> getKeyphrase(Long keywordId, GetKeyphraseRequest getKeyphraseRequest);
//    List<Object[]> findAvgKeywordCount(Keyword keyword, LocalDate startDate, LocalDate endDate);

}
