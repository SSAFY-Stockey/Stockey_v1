package com.ssafy.backend.domain.keyword.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Builder
@Getter
@ToString
public class KeywordDto {
    private final long id;
    private final String name;
    private final String description;
}
