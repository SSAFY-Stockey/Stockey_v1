package com.ssafy.backend.domain.keyword.service;

import com.ssafy.backend.domain.keyword.dto.KeywordDto;
import com.ssafy.backend.domain.keyword.dto.KeywordStatisticDto;
import com.ssafy.backend.domain.keyword.entity.Keyword;
import com.ssafy.backend.domain.keyword.entity.KeywordStatistic;
import com.ssafy.backend.domain.keyword.enums.StatisticType;
import com.ssafy.backend.domain.keyword.repository.KeywordRepository;
import com.ssafy.backend.domain.keyword.repository.KeywordStatisticRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class KeywordServiceImplTest {

    @Autowired
    KeywordService keywordService;
    @Autowired
    KeywordRepository keywordRepository;
    @Autowired
    KeywordStatisticRepository keywordStatisticRepository;

    @Test
    void 키워드_상세_가져오기() {
        // given
        Keyword k1 = Keyword.builder().name("test").description("testest..").build();
        Keyword kwdEntity = keywordRepository.save(k1);
        // when
        KeywordDto keywordDto = keywordService.getKeywordDetail(kwdEntity.getId());
        // then
        Assertions.assertThat(keywordDto.getId()).isEqualTo(kwdEntity.getId());
    }

    @Test
    void 키워드_빈도통계() {
        Keyword k1 = Keyword.builder().name("금리").description("금리란...").build();
        Keyword k2 = Keyword.builder().name("연준").description("연준이란...").build();
        keywordRepository.save(k1);
        keywordRepository.save(k2);

        KeywordStatistic ks1 = KeywordStatistic.builder()
                .keyword(k1)
                .statisticDate(LocalDate.of(2022, 10, 22))
                .count(10L)
                .category(StatisticType.FREQ).build();
        KeywordStatistic ks2 = KeywordStatistic.builder()
                .keyword(k1)
                .statisticDate(LocalDate.of(2022, 11, 15))
                .count(20L)
                .category(StatisticType.FREQ).build();
        KeywordStatistic ks3 = KeywordStatistic.builder()
                .keyword(k1)
                .statisticDate(LocalDate.of(2022, 12, 3))
                .count(50L)
                .category(StatisticType.FREQ).build();

        keywordStatisticRepository.save(ks1);
        keywordStatisticRepository.save(ks2);
        keywordStatisticRepository.save(ks3);



        List<KeywordStatisticDto> keywordFreq = keywordService.getKeywordFreq(k1.getId());

        for (KeywordStatisticDto keywordStatisticDto : keywordFreq) {
            System.out.println("keywordStatisticDto.getStatisticDate() = " + keywordStatisticDto.getStatisticDate());
            System.out.println("keywordStatisticDto.getCount() = " + keywordStatisticDto.getCount());
        }
    }
}