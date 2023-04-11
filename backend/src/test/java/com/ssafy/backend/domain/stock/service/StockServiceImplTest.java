package com.ssafy.backend.domain.stock.service;

import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.industry.repository.IndustryRepository;
import com.ssafy.backend.domain.stock.entity.DailyStock;
import com.ssafy.backend.domain.stock.entity.Stock;
import com.ssafy.backend.domain.stock.repository.DailyStockRepository;
import com.ssafy.backend.domain.stock.repository.StockRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;


@SpringBootTest
@Transactional
class StockServiceImplTest {

    @Autowired
    StockRepository stockRepository;
    @Autowired
    IndustryRepository industryRepository;
    @Autowired
    DailyStockRepository dailyStockRepository;

    private Stock stock1;
    private Stock stock2;

    @BeforeEach
    public void setUp() {
        Industry industry = Industry.builder().name("반도체").build();
        Industry saveIndustry = industryRepository.save(industry);
        Stock stockBuild1 = Stock.builder().name("샘성전자").code("1234").stockCount(1234L).industry(saveIndustry).build();
        Stock stockBuild2 = Stock.builder().name("엘쥐전자").code("2345").stockCount(2345L).industry(saveIndustry).build();
        stock1 = stockRepository.save(stockBuild1);
        stock2 = stockRepository.save(stockBuild2);
    }

    @Test
    public void Stock_객체_하나_갖고오기() throws Exception {
        //given
        Long saveId = stock2.getId();

        //when
        Stock stock = stockRepository.findById(stock2.getId()).get();
        Long findId = stock.getId();

        //then
        Assertions.assertThat(saveId).isEqualTo(findId);
    }

    @Test
    public void 최근_날짜_가져오기() throws Exception{
        //given
        DailyStock dailyStock1 = DailyStock.builder()
                .stock(stock1)
                .closePrice(100)
                .openPrice(50)
                .highPrice(120)
                .lowPrice(30)
                .volume(555)
                .changeRate(1.34f)
                .stockDate(LocalDate.now().minusDays(1))
                .build();

        DailyStock dailyStock2 = DailyStock.builder()
                .stock(stock1)
                .closePrice(4000)
                .openPrice(50)
                .highPrice(120)
                .lowPrice(30)
                .volume(555)
                .stockDate(LocalDate.now())
                .changeRate(1.34f)
                .build();

        //when
        DailyStock save1 = dailyStockRepository.save(dailyStock1);
        DailyStock save2 = dailyStockRepository.save(dailyStock2);

        //then
        DailyStock dailyStock = dailyStockRepository.findTodayDailyStock(stock1.getId()).get();

        Assertions.assertThat(dailyStock.getClosePrice()).isEqualTo(dailyStock2.getClosePrice());

    }
    @Test
    public void 종목_검색() throws Exception{
        //given
        String keyword = "샘성";
        String query = '%'+keyword+'%';

        //when
        List<Stock> stocks = stockRepository.findByName(query);
        //then
        Assertions.assertThat(stocks.size()).isEqualTo(1);

        keyword = "전자";
        query = '%'+keyword+'%';
        List<Stock> byName = stockRepository.findByName(query);
        Assertions.assertThat(byName.size()).isEqualTo(2);
    }
    



}