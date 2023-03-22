package com.ssafy.backend.domain.industry.service;

import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.industry.repository.IndustryRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;


@SpringBootTest
@Transactional
class IndustryServiceTest {

    @Autowired
    IndustryRepository industryRepository;

    Industry industry1;
    Industry industry2;

    @BeforeEach
    void init(){
        Industry industry1 = new Industry().builder()
                .description("산업 설명")
                .category("대분류 1")
                .name("IT")
                .build();
        Industry industry2 = new Industry().builder()
                .description("산업 설명2")
                .category("대분류 2")
                .name("전자")
                .build();

        industryRepository.save(industry1);
        industryRepository.save(industry2);
    }

    @Test
    void 산업리스트_테스트() throws  Exception{
        //given
        long beforeCount = industryRepository.count();

        //when

        Industry industry3 = new Industry().builder()
                .description("산업 설명3")
                .category("대분류 3")
                .name("전자")
                .build();

        industryRepository.save(industry3);

        //then
        long afterCount = industryRepository.count();
        Assertions.assertThat(beforeCount+1).isEqualTo(afterCount);
    }

    @Test
    public void 산업단일_테스트() throws Exception{
        //given
        Industry newIndustry = new Industry().builder()
                .description("산업 설명3")
                .category("대분류 3")
                .name("전자")
                .build();
        Industry saveIndustry = industryRepository.save(newIndustry);

        //when
        Industry findIndustry = industryRepository.findById(saveIndustry.getId()).get();

        //then
        Assertions.assertThat(saveIndustry).isEqualTo(findIndustry);

    }
}