package com.ssafy.backend.domain.keyword.mapper;

import com.ssafy.backend.domain.keyword.api.response.KeywordDetailResponse;
import com.ssafy.backend.domain.keyword.dto.KeywordDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface KeywordDtoMapper {
    KeywordDetailResponse toKeywordDetailResponse(KeywordDto keywordDto);
}
