import IndustryBubbleChart from "../components/IndustryDetailPage/IndustryBubbleChart/IndustryBubbleChart"
import IndustryCandleChart from "../components/IndustryDetailPage/IndustryCandleChart/IndustryCandleChart"
import IndustryOverall from "../components/IndustryDetailPage/IndustryOverall/IndustryOverall"
import { IndustrySelector } from "../components/IndustryMainPage"
import KeywordPanel from "../components/StockDetailPage/KeywordPanel/KeywordPanel"
import Grid from "@mui/material/Grid"
import styled, { keyframes } from "styled-components"
import { useState } from "react"
import BookmarkBtn from "../components/common/Bookmark/BookmarkBtn"
import { useParams } from "react-router-dom"
import { useIndustryList } from "../hooks/useIndustryList"
import Spinner from "../components/common/Spinner/Spinner"

const IndustryDetailPage = () => {
  const { industryName } = useParams()

  const industryId = industryName ? industryList.indexOf(industryName) + 1 : 0

  const { isLoading, data: industryInfo } = useIndustryList(
    industryId.toString()
  )

  const [mode, setMode] = useState<string>("default")

  const changeLayout = (event: React.MouseEvent<HTMLButtonElement>) => {
    document.querySelectorAll(".fade-in").forEach((elem) => {
      elem.classList.replace("fade-in", "fade-out")
    })
    setTimeout(() => {
      setMode((event.target as HTMLButtonElement).innerText)
    }, 300)
    setTimeout(() => {
      document.querySelectorAll(".fade-out").forEach((elem) => {
        elem.classList.replace("fade-out", "fade-in")
      })
    }, 500)
  }

  const defaultLayout = (
    <>
      <Grid item xs={12} marginLeft={4.5}>
        <ButtonDiv className="fade-in">
          <button onClick={changeLayout}>keywordPanel</button>
          <button onClick={changeLayout}>industrySelector</button>
        </ButtonDiv>
      </Grid>
      <Grid item xs={7}>
        <LeftSection className="fade-in">
          <TitleDiv>
            {industryInfo?.name}
            <BookmarkBtn isBookmarked={false} page="stock" />
          </TitleDiv>
          <IndustryOverall />
          <IndustryCandleChart />
          <div>연관 키워드 차트</div>
        </LeftSection>
      </Grid>
      <Grid item xs={5}>
        <RightSection className="fade-in">
          <IndustryBubbleChart industryId={industryInfo?.id} />
          <div>전체 종목 리스트</div>
        </RightSection>
      </Grid>
    </>
  )

  const onKeywordPanelLayout = (
    <>
      <Grid item xs={7}>
        <LeftSection className="fade-in">
          <ButtonDiv className="fade-in">
            <button onClick={changeLayout}>default</button>
            <button onClick={changeLayout}>industrySelector</button>
          </ButtonDiv>
          <TitleDiv>
            {industryInfo?.name}
            <BookmarkBtn isBookmarked={false} page="stock" />
          </TitleDiv>
          <IndustryOverall />
          <IndustryCandleChart />
          <div>연관 키워드 차트</div>
          <IndustryBubbleChart industryId={industryInfo?.id} />
          <div>전체 종목 리스트</div>
        </LeftSection>
      </Grid>
      <Grid item xs={5}>
        <KeywordPanel keyword="빅스텝" />
      </Grid>
    </>
  )

  const onIndustrySelectorLayout = (
    <>
      <Grid item xs={5} marginTop={4.5}>
        <LeftSection className="fade-in">
          <IndustrySelector />
        </LeftSection>
      </Grid>
      <Grid item xs={7} marginTop={4.5}>
        <RightSection className="fade-in">
          <TitleDiv>
            {industryInfo?.name}
            <BookmarkBtn isBookmarked={false} page="stock" />
          </TitleDiv>
          <IndustryOverall />
          <IndustryCandleChart />
          <div>연관 키워드 차트</div>
          <IndustryBubbleChart industryId={industryInfo?.id} />
          <div>전체 종목 리스트</div>
        </RightSection>
      </Grid>
    </>
  )

  return (
    <Grid container rowSpacing={3} columnSpacing={4.5}>
      {isLoading ? (
        <Spinner />
      ) : (
        {
          default: defaultLayout,
          keywordPanel: onKeywordPanelLayout,
          industrySelector: onIndustrySelectorLayout,
        }[mode]
      )}
    </Grid>
  )
}

export default IndustryDetailPage

const industryList = [
  "에너지",
  "소재",
  "자본재",
  "운송",
  "자동차와부품",
  "내구소비재와의류",
  "호텔,레스토랑,레저등",
  "소매(유통)",
  "식품,음료,담배",
  "제약과생물공학",
  "은행",
  "증권",
  "다각화된금융",
  "보험",
  "소프트웨어와서비스",
  "기술하드웨어와장비",
  "반도체와반도체장비",
  "전기와전기제품",
  "디스플레이",
  "전기통신서비스",
  "미디어와엔터테인먼트",
  "유틸리티",
]

const FadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`

const FadeOut = keyframes`
from {
  opacity: 1;
}

to {
  opacity: 0;
}
`

const ButtonDiv = styled.div`
  padding: 24px 0px 0px 0px;

  &.fade-in {
    animation: ${FadeIn} 1s 0s ease 1 forwards;
  }
  &.fade-out {
    animation: ${FadeOut} 1s 0s ease 1 forwards;
  }
`

const TitleDiv = styled.div`
  font-size: 2.6rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
`

const LeftSection = styled.div`
  padding: 0px 0px 36px 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  transition: all 0.5s ease;

  &.fade-in {
    animation: ${FadeIn} 1s 0s ease 1 forwards;
  }
  &.fade-out {
    animation: ${FadeOut} 1s 0s ease 1 forwards;
  }
`

const RightSection = styled.div`
  padding: 0px 36px 36px 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  transition: all 0.5s ease;

  &.fade-in {
    animation: ${FadeIn} 1s 0s ease 1 forwards;
  }
  &.fade-out {
    animation: ${FadeOut} 1s 0s ease 1 forwards;
  }
`
