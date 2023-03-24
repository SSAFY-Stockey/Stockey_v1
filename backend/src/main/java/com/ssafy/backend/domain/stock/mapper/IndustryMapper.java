package com.ssafy.backend.domain.stock.mapper;

import com.ssafy.backend.domain.stock.dto.IndustryDto;
import com.ssafy.backend.temp.Industry;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface IndustryMapper {
    IndustryDto toIndustryDto(Industry industry);
}
