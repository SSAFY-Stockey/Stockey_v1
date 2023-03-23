package com.ssafy.backend.domain.industry.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class IndustryDto {
    private Long id;

    private String name;

    private String description;

    private String category;

    @Builder
    public IndustryDto(Long id, String name, String description, String category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }
}
