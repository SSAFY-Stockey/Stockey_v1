import IndustryBubbleChart from "../components/IndustryDetailPage/IndustryBubbleChart/IndustryBubbleChart"
import IndustryMarketCapLineChart from "../components/IndustryDetailPage/IndustryMarketCapLineChart/IndustryMarketCapLineChart"
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
import IndustrySelectorToggleBtn from "../components/IndustryDetailPage/IndustrySelectorToggleBtn"

const IndustryDetailPage = () => {
  const params = useParams()
  const industryName = params?.industryName

  const industryId = industryName ? industryList.indexOf(industryName) + 1 : 0

  const { isLoading, data: industryInfo } = useIndustryList(industryId)

  const [mode, setMode] = useState<string>("def")

  const changeLayout = (
    e: React.MouseEvent<HTMLElement>,
    toggleMode: string
  ) => {
    // document.querySelectorAll(".fade-in").forEach((elem) => {
    //   elem.classList.replace("fade-in", "fade-out")
    // })
    setMode(toggleMode)
    // setTimeout(() => {
    //   document.querySelectorAll(".fade-out").forEach((elem) => {
    //     elem.classList.replace("fade-out", "fade-in")
    //   })
    // }, 500)
  }

  const defaultLayout = (
    <>
      <Grid item xs={12} marginLeft={4.5}>
        <ButtonDiv className={mode}>
          <button onClick={(e) => changeLayout(e, "kwd")}>keywordPanel</button>
          <IndustrySelectorToggleBtn
            changeLayout={(e, mode) => {
              changeLayout(e, mode)
            }}
          />
        </ButtonDiv>
      </Grid>
      <Grid item xs={7}>
        <LeftSection className={mode}>
          <TitleDiv>
            {industryInfo?.name}
            <BookmarkBtn isBookmarked={false} page="stock" />
          </TitleDiv>
          <IndustryOverall />
          <IndustryMarketCapLineChart industryId={industryId} />
          <div>연관 키워드 차트</div>
        </LeftSection>
      </Grid>
      <Grid item xs={5}>
        <RightSection className={mode}>
          <IndustryBubbleChart industryId={industryInfo?.id} />
          <div>전체 종목 리스트</div>
        </RightSection>
      </Grid>
    </>
  )

  const onKeywordPanelLayout = (
    <>
      <Grid item xs={7}>
        <LeftSection className={mode}>
          <ButtonDiv className={mode}>
            <button onClick={(e) => changeLayout(e, "kwd")}>
              keywordPanel
            </button>
            <IndustrySelectorToggleBtn
              changeLayout={(e, mode) => {
                changeLayout(e, mode)
              }}
            />
          </ButtonDiv>
          <TitleDiv>
            {industryInfo?.name}
            <BookmarkBtn isBookmarked={false} page="stock" />
          </TitleDiv>
          <IndustryOverall />
          <IndustryMarketCapLineChart industryId={industryId} />
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
      <Grid item xs={12} marginLeft={4.5}>
        <ButtonDiv className={mode}>
          <button onClick={(e) => changeLayout(e, "kwd")}>keywordPanel</button>
          <IndustrySelectorToggleBtn
            changeLayout={(e, mode) => {
              changeLayout(e, mode)
            }}
          />
        </ButtonDiv>
      </Grid>
      <Grid item xs={5}>
        <LeftSection className={mode}>
          <IndustrySelector />
        </LeftSection>
      </Grid>
      <Grid item xs={7}>
        <RightSection className={mode}>
          <TitleDiv>
            {industryInfo?.name}
            <BookmarkBtn isBookmarked={false} page="stock" />
          </TitleDiv>
          <IndustryOverall />
          <IndustryMarketCapLineChart industryId={industryId} />
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
          def: defaultLayout,
          kwd: onKeywordPanelLayout,
          sel: onIndustrySelectorLayout,
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

const SlideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`

const SlideOutRigt = keyframes`
  from {
    opacity: 1;
    transform: translateX(0%);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`

const AnimatedDiv = styled.div`
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  .industry-selector {
    animation-name: ${SlideInLeft};
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
