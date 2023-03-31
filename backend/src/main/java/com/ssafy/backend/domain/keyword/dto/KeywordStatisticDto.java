package com.ssafy.backend.domain.keyword.dto;

import java.time.LocalDate;

public interface KeywordStatisticDto {
    LocalDate getStatisticDate();
    Long getCount();
}
