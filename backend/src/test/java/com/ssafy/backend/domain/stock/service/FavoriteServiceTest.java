package com.ssafy.backend.domain.stock.service;

import com.ssafy.backend.domain.favorites.entity.Favorite;
import com.ssafy.backend.domain.favorites.repository.FavoriteRepository;
import com.ssafy.backend.domain.industry.entity.Industry;
import com.ssafy.backend.domain.industry.repository.IndustryRepository;
import com.ssafy.backend.domain.member.entity.Member;
import com.ssafy.backend.domain.member.enums.OauthType;
import com.ssafy.backend.domain.member.repository.MemberRepository;
import com.ssafy.backend.domain.stock.entity.Stock;
import com.ssafy.backend.domain.stock.repository.StockRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@SpringBootTest
public class FavoriteServiceTest {

    @Autowired
    IndustryRepository industryRepository;
    @Autowired
    StockRepository stockRepository;
    @Autowired
    FavoriteRepository favoriteRepository;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    StockService stockService;
    private Stock stock1;
    private Stock stock2;
    private Member member;
    @BeforeEach
    public void setUp() {
        Industry industry = Industry.builder().name("반도체").build();
        Industry saveIndustry = industryRepository.save(industry);
        Stock stockBuild1 = Stock.builder().name("샘성").code("1234").stockCount(1234L).industry(saveIndustry).build();
        Stock stockBuild2 = Stock.builder().name("엘쥐").code("2345").stockCount(2345L).industry(saveIndustry).build();
        stock1 = stockRepository.save(stockBuild1);
        stock2 = stockRepository.save(stockBuild2);

        Member memberObject = Member.oAuthBuilder().oAuthType(OauthType.KAKAO).oAuthId(1234L).nickname("jun").build();
        member = memberRepository.save(memberObject);

    }
    
    
    @Test
    public void 관심종목_개수체크() throws Exception{
        //given
        Favorite favorite = Favorite.stockBuilder().stock(stock1).member(member).build();

        //when
        long beforeCount = favoriteRepository.count();
        favoriteRepository.save(favorite);
        long afterCount = favoriteRepository.count();

        //then
        Assertions.assertThat(beforeCount).isEqualTo(afterCount-1);
    
    }
    @Test
    public void 관심종목_생성확인() throws Exception{
        //given
        Favorite favorite = Favorite.stockBuilder().stock(stock1).member(member).build();

        //when
        Favorite save = favoriteRepository.save(favorite);
        //then
        List<Favorite> stockList = favoriteRepository.findByStock(member);
        Assertions.assertThat(stockList.size()).isEqualTo(1L);
    }

    @Test
    public void 관심종목확인() throws Exception{
        //given
        Favorite favorite = Favorite.stockBuilder().stock(stock1).member(member).build();
        //when
        Favorite save = favoriteRepository.save(favorite);

        //then
        boolean result = favoriteRepository.existsByMemberAndStock(member, save.getStock());
        Assertions.assertThat(result).isTrue();
    }

    @Test
    public void 관심종목_삭제() throws Exception{
        //given
        Favorite favorite = Favorite.stockBuilder().stock(stock1).member(member).build();
        //when
        Favorite save = favoriteRepository.save(favorite);

        //then
        int beforeDeleteCnt = favoriteRepository.findByStock(member).size();
        favoriteRepository.delete(save);
        int afterDeleteCnt = favoriteRepository.findByStock(member).size();
        Assertions.assertThat(beforeDeleteCnt).isEqualTo(afterDeleteCnt+1);

    }
}
