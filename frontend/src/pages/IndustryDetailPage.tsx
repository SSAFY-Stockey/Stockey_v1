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
  const [className, setClassName] = useState<string>("")

  const changeLayout = (
    e: React.MouseEvent<HTMLElement>,
    toggleMode: string
  ) => {
    switch (toggleMode) {
      case "sel":
        switch (mode) {
          case "sel":
            setClassName("sel-to-def")
            setTimeout(() => {
              setMode("def")
            }, 600)
            break
          case "def":
            setClassName("def-to-sel")
            setMode("sel")
            break
          case "kwd":
            setClassName("kwd-to-sel")
            setTimeout(() => {
              setMode("sel")
            }, 600)
            break
          default:
            break
        }
        break
      case "kwd":
        switch (mode) {
          case "kwd":
            setClassName("kwd-to-def")
            setTimeout(() => {
              setMode("def")
            }, 600)
            break
          case "def":
            setClassName("def-to-kwd")
            setMode("kwd")
            break
          case "sel":
            setClassName("sel-to-kwd")
            setTimeout(() => {
              setMode("kwd")
            }, 600)
            break
          default:
            break
        }
        break
      default:
        break
    }
  }

  const defaultLayout = (
    <>
      <Grid item xs={12} marginLeft={4.5}>
        <ButtonDiv>
          <button onClick={(e) => changeLayout(e, "kwd")}>keywordPanel</button>
          <IndustrySelectorToggleBtn
            changeLayout={(e, mode) => {
              changeLayout(e, mode)
            }}
          />
        </ButtonDiv>
      </Grid>
      <Grid item xs={7}>
        <LeftSection id="left">
          <LeftSlider className={`def ${className}`}>
            <TitleDiv>
              {industryInfo?.name}
              <BookmarkBtn isBookmarked={false} page="stock" />
            </TitleDiv>
          </LeftSlider>
          <LeftSlider className={`def ${className}`}>
            <IndustryOverall />
          </LeftSlider>
          <LeftSlider className={`def ${className}`}>
            <IndustryMarketCapLineChart industryId={industryId} />
          </LeftSlider>
          <LeftSlider className={`def ${className}`}>
            <div>연관 키워드 차트</div>
          </LeftSlider>
        </LeftSection>
      </Grid>
      <Grid item xs={5}>
        <RightSection>
          <RightSlider className={`def ${className}`}>
            <IndustryBubbleChart industryId={industryInfo?.id} />
          </RightSlider>
          <RightSlider className={`def ${className}`}>
            <div>전체 종목 리스트</div>
          </RightSlider>
        </RightSection>
      </Grid>
    </>
  )

  const onKeywordPanelLayout = (
    <>
      <Grid item xs={7}>
        <LeftSection>
          <ButtonDiv>
            <button onClick={(e) => changeLayout(e, "kwd")}>
              keywordPanel
            </button>
            <IndustrySelectorToggleBtn
              changeLayout={(e, mode) => {
                changeLayout(e, mode)
              }}
            />
          </ButtonDiv>
          <LeftSlider
            className={
              className === "kwd-to-sel"
                ? "sel kwd-to-sel"
                : className === "sel-to-kwd"
                ? "kwd sel-to-kwd"
                : className
            }
          >
            <TitleDiv>
              {industryInfo?.name}
              <BookmarkBtn isBookmarked={false} page="stock" />
            </TitleDiv>
          </LeftSlider>
          <LeftSlider
            className={
              className === "kwd-to-sel"
                ? "sel kwd-to-sel"
                : className === "sel-to-kwd"
                ? "kwd sel-to-kwd"
                : className
            }
          >
            <IndustryOverall />
          </LeftSlider>
          <LeftSlider
            className={
              className === "kwd-to-sel"
                ? "sel kwd-to-sel"
                : className === "sel-to-kwd"
                ? "kwd sel-to-kwd"
                : className
            }
          >
            <IndustryMarketCapLineChart industryId={industryId} />
          </LeftSlider>
          <LeftSlider
            className={
              className === "kwd-to-sel"
                ? "sel kwd-to-sel"
                : className === "sel-to-kwd"
                ? "kwd sel-to-kwd"
                : className
            }
          >
            <div>연관 키워드 차트</div>
          </LeftSlider>
          <RightSlider
            className={
              className === "kwd-to-sel"
                ? "sel kwd-to-sel"
                : className === "sel-to-kwd"
                ? "kwd sel-to-kwd"
                : className
            }
          >
            <IndustryBubbleChart industryId={industryInfo?.id} />
          </RightSlider>
          <RightSlider
            className={
              className === "kwd-to-sel"
                ? "sel kwd-to-sel"
                : className === "sel-to-kwd"
                ? "kwd sel-to-kwd"
                : className
            }
          >
            <div>전체 종목 리스트</div>
          </RightSlider>
        </LeftSection>
      </Grid>
      <Grid item xs={5}>
        <PanelSlider className={className}>
          <KeywordPanel keyword="빅스텝" />
        </PanelSlider>
      </Grid>
    </>
  )

  const onIndustrySelectorLayout = (
    <>
      <Grid item xs={12} marginLeft={4.5}>
        <ButtonDiv>
          <button onClick={(e) => changeLayout(e, "kwd")}>keywordPanel</button>
          <IndustrySelectorToggleBtn
            changeLayout={(e, mode) => {
              changeLayout(e, mode)
            }}
          />
        </ButtonDiv>
      </Grid>
      <Grid item xs={5}>
        <LeftSection>
          <SelectorSlider
            className={
              className === "kwd-to-sel" ? "sel kwd-to-sel" : className
            }
          >
            <IndustrySelector />
          </SelectorSlider>
        </LeftSection>
      </Grid>
      <Grid item xs={7}>
        <RightSection id="right">
          <LeftSlider className={className}>
            <TitleDiv>
              {industryInfo?.name}
              <BookmarkBtn isBookmarked={false} page="stock" />
            </TitleDiv>
          </LeftSlider>
          <LeftSlider className={className}>
            <IndustryOverall />
          </LeftSlider>
          <LeftSlider className={className}>
            <IndustryMarketCapLineChart industryId={industryId} />
          </LeftSlider>
          <LeftSlider className={className}>
            <div>연관 키워드 차트</div>
          </LeftSlider>
          <RightSlider className={className}>
            <IndustryBubbleChart industryId={industryInfo?.id} />
          </RightSlider>
          <RightSlider className={className}>
            <div>전체 종목 리스트</div>
          </RightSlider>
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

const ButtonDiv = styled.div`
  padding: 24px 0px 0px 0px;
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
`

const RightSection = styled.div`
  padding: 0px 36px 36px 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const SlideToRight = keyframes`
  from {
    z-index: 1;
    transform: translateX(-71.4%);
  }
  to {
    transform: translateX(0%);
  }
`

const SlideToLeftForKwd = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`

const SlideOverRight = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(71.4%);
  }
`

const SlideToLeft = keyframes`
  from {
    transform: translateX(71.4%);
  }
  to {
    transform: translateX(0%);
  }
`

const SlideToRightAndDisppear = keyframes`
  from {
    opacity: 1;
    transform: translateX(0%);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`

const SlideDownAndAppear = keyframes`
from {
  opacity: 0;
  height: 0;
  visibility: hidden;
}
to {
  opacity: 1;
  visibility: visible;
}
`

const SlideUpAndDisappear = keyframes`
from {
  opacity: 1;
  visibility: visible;
}
to {
  opacity: 0;
  visibility: hidden;
  height: 0;
}
`

// transform: translateY(-${
//   document.getElementById("right")?.getBoundingClientRect().top
// }px) scale(0.714);

const SlideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-200%)
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`

const SlideUp = keyframes`
  from {
    transform: translateY(${
      document.getElementById("left")?.clientHeight
    }px) scale(1.4);
  }
  50% {
    transform: translateY(${document.getElementById("left")?.clientHeight}px);
  }
  to {
    transform: translateY(0%);
  }
`

const SlideToLeftDown = keyframes`
  from {
    transform: translate(100%, -220%) scale(0.714);
  }
  to {
    transform: translate(0%, 0%);
  }
`

const SlideToRightUp = keyframes`
  from {
    transform: translate(-100%, 220%) scale(1.4);
  }
  to {
    transform: translate(0%, 0%)
  }
`

const SelectorSlider = styled.div`
  transition: all 0.6s forwards;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  height: calc(100vh - 132px);
  opacity: 0;
  visibility: hidden;

  &.def-to-sel {
    z-index: 1;
    animation-delay: 0.6s;
    animation-name: ${SlideDownAndAppear};
  }
  &.sel-to-def {
    animation-name: ${SlideUpAndDisappear};
  }
  &.sel.kwd-to-sel {
    animation-name: ${SlideDownAndAppear};
  }
  &.sel-to-kwd {
    animation-name: ${SlideUpAndDisappear};
  }
`

const LeftSlider = styled.div`
  transition: all 0.6s forwards;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  &.def-to-sel {
    animation-name: ${SlideToRight};
  }
  &.def.sel-to-def {
    animation-name: ${SlideToLeft};
  }
  &.sel.kwd-to-sel {
    animation-name: ${SlideOverRight};
  }
  &.kwd.sel-to-kwd {
    animation-name: ${SlideToLeft};
  }
`

const RightSlider = styled.div`
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  &.def-to-sel {
    animation-name: ${SlideDown};
  }
  &.def.sel-to-def {
    animation-duration: 1.2s;
    transform-origin: top right;
    animation-name: ${SlideUp};
  }
  &.def-to-kwd {
    animation-name: ${SlideToLeftDown};
  }
  &.def.kwd-to-def {
    animation-name: ${SlideToRightUp};
  }
  &.sel.kwd-to-sel {
    animation-name: ${SlideOverRight};
  }
  &.kwd.sel-to-kwd {
    animation-name: ${SlideToLeft};
  }
`

const PanelSlider = styled.div`
  transition: all 0.6s forwards;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  &.def-to-kwd {
    animation-name: ${SlideToLeftForKwd};
  }
  &.kwd-to-def {
    animation-name: ${SlideToRightAndDisppear};
  }
  &.kwd-to-sel {
    animation-name: ${SlideToRightAndDisppear};
  }
  &.sel-to-kwd {
    animation-name: ${SlideToLeftForKwd};
  }
`
