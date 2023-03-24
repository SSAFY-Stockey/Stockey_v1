package com.ssafy.backend.domain.stock.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
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
