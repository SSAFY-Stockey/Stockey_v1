package com.ssafy.backend.domain.keyword.mapper;

import com.ssafy.backend.domain.keyword.api.response.KeywordDetailResponse;
import com.ssafy.backend.domain.keyword.api.response.KeywordResponse;
import com.ssafy.backend.domain.keyword.api.response.KeywordSearchResponse;
import com.ssafy.backend.domain.keyword.dto.KeywordDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface KeywordDtoMapper {
    KeywordDetailResponse toKeywordDetailResponse(KeywordDto keywordDto);
    List<KeywordResponse> toKeywordResponse(List<KeywordDto> keywordDto);

    List<KeywordSearchResponse> toKeywordSearchResponse(List<KeywordDto> keywordDto);
}
