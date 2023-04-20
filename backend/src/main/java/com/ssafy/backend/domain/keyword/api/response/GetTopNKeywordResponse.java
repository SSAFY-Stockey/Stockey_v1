package com.ssafy.backend.domain.keyword.api.response;

import com.ssafy.backend.domain.keyword.dto.TopKeywordDTO;
import lombok.Data;

import java.util.List;

@Data
public class GetTopNKeywordResponse {
    private final Long totalNewsCount;
    private final List<TopKeywordDTO> topKeywordDTO;
}
