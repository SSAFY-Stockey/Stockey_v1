package com.ssafy.backend.domain.keyword.service;

import com.ssafy.backend.domain.keyword.dto.KeywordDto;
import com.ssafy.backend.domain.keyword.entity.Keyword;
import com.ssafy.backend.domain.keyword.repository.KeywordRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class KeywordServiceImplTest {

    @Autowired
    KeywordService keywordService;
    @Autowired
    KeywordRepository keywordRepository;

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


}