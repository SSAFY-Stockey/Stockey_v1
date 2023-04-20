package com.ssafy.backend.domain.keyword.mapper;

import com.ssafy.backend.domain.keyword.dto.KeywordDto;
import com.ssafy.backend.domain.keyword.entity.Keyword;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface KeywordMapper {
    KeywordDto toDto(Keyword keyword);

    List<KeywordDto> toDto(List<Keyword> keywordList);
}
