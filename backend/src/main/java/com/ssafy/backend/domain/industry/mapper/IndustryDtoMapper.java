package com.ssafy.backend.domain.industry.mapper;

import com.ssafy.backend.domain.industry.api.response.IndustryCapitalDto;
import com.ssafy.backend.domain.industry.entity.Industry;
import org.mapstruct.Mapper;

@Mapper(componentModel= "spring")
public interface IndustryDtoMapper {
    IndustryCapitalDto toDto(Industry industry,Long sum);

}
