package com.ssafy.backend.domain.industry.service;

import com.ssafy.backend.domain.industry.dto.IndustryDto;
import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.industry.repository.IndustryRepository;
import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.member.enums.OauthType;
import com.ssafy.backend.domain.member.repository.MemberRepository;
import com.ssafy.backend.domain.member.service.MemberService;
import com.ssafy.backend.domain.stock.entity.Stock;
import com.ssafy.backend.domain.stock.repository.StockRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertThrows;


@SpringBootTest
@Transactional
class IndustryServiceTest {

    @Autowired
    IndustryRepository industryRepository;
    @Autowired
    StockRepository stockRepository;
    @Autowired
    MemberService memberService;
    @Autowired
    MemberRepository memberRepository;
    @Autowired
    IndustryService industryService;

    Industry industry1;
    Industry industry2;

    @BeforeEach
    void init() {
        Industry industry01 = Industry.builder()
                .description("산업 설명")
                .category("대분류 1")
                .name("IT")
                .build();
        Industry industry02 = Industry.builder()
                .description("산업 설명2")
                .category("대분류 2")
                .name("전자")
                .build();


        Stock stock1 = Stock.builder()
                .name("이름1")
                .code("1")
                .description("설명1")
                .stockCount(50L)
                .marketCap(500L)
                .industry(industry01)
                .build();
        Stock stock2 = Stock.builder()
                .name("이름2")
                .code("2")
                .description("설명2")
                .stockCount(50L)
                .marketCap(1000L)
                .industry(industry01)
                .build();
        Stock stock3 = Stock.builder()
                .name("이름3")
                .code("3")
                .description("설명3")
                .stockCount(50L)
                .marketCap(5000L)
                .industry(industry01)
                .build();
        Stock stock4 = Stock.builder()
                .name("이름4")
                .code("4")
                .description("설명4")
                .stockCount(50L)
                .marketCap(50000L)
                .industry(industry01)
                .build();
        Stock stock5 = Stock.builder()
                .name("이름5")
                .code("5")
                .description("설명5")
                .stockCount(50L)
                .marketCap(500L)
                .industry(industry01)
                .build();
        Stock stock6 = Stock.builder()
                .name("이름6")
                .code("6")
                .description("설명6")
                .stockCount(50L)
                .marketCap(1L)
                .industry(industry01)
                .build();

        industry1 = industryRepository.save(industry01);
        industry2 = industryRepository.save(industry02);

        stockRepository.save(stock1);
        stockRepository.save(stock2);
        stockRepository.save(stock3);
        stockRepository.save(stock4);
        stockRepository.save(stock5);
        stockRepository.save(stock6);

        memberService.saveMember(1, "test1", OauthType.KAKAO);
        memberService.saveMember(2, "test2", OauthType.KAKAO);
    }

    @Test
    void 산업리스트_테스트() throws Exception {
        //given
        long beforeCount = industryRepository.count();

        //when

        Industry industry3 = Industry.builder()
                .description("산업 설명3")
                .category("대분류 3")
                .name("전자")
                .build();

        industryRepository.save(industry3);

        //then
        long afterCount = industryRepository.count();
        Assertions.assertThat(beforeCount + 1).isEqualTo(afterCount);
    }

    @Test
    public void 산업단일_테스트() throws Exception {
        //given
        Industry newIndustry = Industry.builder()
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

    @Test
    public void 전체top5_개수_테스트() throws Exception {
        //given
        List<Stock> stockList = stockRepository.findAll();
        Collections.sort(stockList, (o1, o2) -> -o1.getMarketCap().compareTo(o2.getMarketCap()));
        //when
        Pageable pageable = PageRequest.of(0, 5);
        List<Stock> top5Stocks = stockRepository.findTop5Stocks(industry1, pageable);

        //then
        Assertions.assertThat(top5Stocks.size()).isEqualTo(5);
    }

    @Test
    public void 전체top5_동작_테스트() throws Exception {
        //given
        List<Stock> stockList = stockRepository.findAll();
        Collections.sort(stockList, (o1, o2) -> -o1.getMarketCap().compareTo(o2.getMarketCap()));
        //when
        Pageable pageable = PageRequest.of(0, 5);
        List<Stock> top5Stocks = stockRepository.findTop5Stocks(industry1, pageable);

        //then
        for (int i = 0; i < 5; i++) {
            Assertions.assertThat(top5Stocks.get(i).getMarketCap()).isEqualTo(stockList.get(i).getMarketCap());
        }
    }

    @Test
    public void 시가총액_내림차순_테스트() throws Exception {
        //given
        Pageable pageable = PageRequest.of(0, 5);
        List<Stock> top5Stocks = stockRepository.findTop5Stocks(pageable);
        //when
        //then
        for (int i = 1; i < 5; i++) {
            Stock prev = top5Stocks.get(i - 1);
            Stock next = top5Stocks.get(i);

            //이전 종목은 다음 종목 보다 커야 한다.
            Assertions.assertThat(prev.getMarketCap() >= next.getMarketCap()).isTrue();
        }

    }


    @Test
    public void 산업조회_실패_테스트() throws Exception {
        //given
        //when
        //then
        assertThrows(RuntimeException.class, () -> industryRepository.findById(0L).get());

    }

    @Test
    public void 관심산업_등록() throws Exception {
        //given
        Member member1 = memberRepository.findByNickname("test1").get();

        //when
        industryService.addFavorite(member1,industry1.getId());
        List<IndustryDto> myIndustries = industryService.getMyIndustries(member1);

        //then
        Assertions.assertThat(myIndustries.size()).isEqualTo(1);

    }

    @Test
    public void 관심산업_삭제() throws Exception {
        //given
        Member member1 = memberRepository.findByNickname("test1").get();

        //when
        industryService.addFavorite(member1,industry1.getId());
        List<IndustryDto> myIndustries = industryService.getMyIndustries(member1);
        Assertions.assertThat(myIndustries.size()).isEqualTo(1);
        industryService.deleteFavorite(member1,industry1.getId());
        myIndustries = industryService.getMyIndustries(member1);

        //then
        Assertions.assertThat(myIndustries.size()).isEqualTo(0);

    }
}