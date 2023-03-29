import IndustryBubbleChart from "../components/IndustryDetailPage/IndustryBubbleChart/IndustryBubbleChart"
import IndustryCandleChart from "../components/IndustryDetailPage/IndustryCandleChart/IndustryCandleChart"
import Grid from "@mui/material/Grid"
// import styled from "@emotion/styled"
import styled, { keyframes } from "styled-components"
import KeywordPanel from "../components/StockDetailPage/KeywordPanel/KeywordPanel"
import { IndustrySelector } from "../components/IndustryMainPage"
import { useState } from "react"

const IndustryDetailPage = () => {
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
      <Grid item xs={7}>
        <ButtonDiv className="fade-in">
          <button onClick={changeLayout}>keywordPanel</button>
          <button onClick={changeLayout}>industrySelector</button>
        </ButtonDiv>
        <LeftSection className="fade-in">
          <IndustryCandleChart />
          <div>연관 키워드 차트</div>
        </LeftSection>
      </Grid>
      <Grid item xs={5}>
        <RightSection className="fade-in">
          <IndustryBubbleChart />
          <div>전체 종목 리스트</div>
        </RightSection>
      </Grid>
    </>
  )

  const onKeywordPanelLayout = (
    <>
      <Grid item xs={7}>
        <ButtonDiv className="fade-in">
          <button onClick={changeLayout}>default</button>
          <button onClick={changeLayout}>industrySelector</button>
        </ButtonDiv>
        <LeftSection className="fade-in">
          <IndustryCandleChart />
          <div>연관 키워드 차트</div>
          <IndustryBubbleChart />
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
      <Grid item xs={5}>
        <LeftSection className="fade-in">
          <IndustrySelector />
        </LeftSection>
      </Grid>
      <Grid item xs={7}>
        <RightSection className="fade-in">
          <IndustryCandleChart />
          <div>연관 키워드 차트</div>
          <IndustryBubbleChart />
          <div>전체 종목 리스트</div>
        </RightSection>
      </Grid>
    </>
  )

  return (
    <Grid container rowSpacing={3} columnSpacing={4.5}>
      {
        {
          default: defaultLayout,
          keywordPanel: onKeywordPanelLayout,
          industrySelector: onIndustrySelectorLayout,
        }[mode]
      }
    </Grid>
  )
}

export default IndustryDetailPage

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
  padding: 24px 0px 0px 36px;

  &.fade-in {
    animation: ${FadeIn} 1s 0s ease 1 forwards;
  }
  &.fade-out {
    animation: ${FadeOut} 1s 0s ease 1 forwards;
  }
`

const LeftSection = styled.div`
  padding: 24px 0px 36px 36px;
  display: flex;
  flex-direction: column;
  gap: 36px;

  transition: all 0.5s ease;

  &.fade-in {
    animation: ${FadeIn} 1s 0s ease 1 forwards;
  }
  &.fade-out {
    animation: ${FadeOut} 1s 0s ease 1 forwards;
  }
`

const RightSection = styled.div`
  padding: 24px 36px 36px 0px;
  display: flex;
  flex-direction: column;
  gap: 36px;

  transition: all 0.5s ease;

  &.fade-in {
    animation: ${FadeIn} 1s 0s ease 1 forwards;
  }
  &.fade-out {
    animation: ${FadeOut} 1s 0s ease 1 forwards;
  }
`
