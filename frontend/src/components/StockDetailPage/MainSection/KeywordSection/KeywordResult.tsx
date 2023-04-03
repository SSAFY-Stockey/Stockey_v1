import { Tab, Tabs, Grid } from "@mui/material"
import { PanelSubTitle } from "../../SubPanel/KeywordPanel/KeywordPanel"
import { HighlightedSpan } from "../PriceSection/PriceSection"
import { useState } from "react"
import NewsTabPanel from "./NewsTabPanel"
import styled, { keyframes } from "styled-components"
import { triggerScroll } from "../../../common/Functions/triggerScroll"

const KeywordResult = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<number>(0)
  const totalNewsCount: number = 32458
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    }
  }

  return (
    <Grid container>
      <Grid item xs={12} px={3}>
        {isLoading ? (
          <PanelSubTitle>
            <HighlightedSpan color="var(--custom-pink-1)">
              {["네이버", "IT", "경제"][activeTab]}
            </HighlightedSpan>{" "}
            관련 뉴스 {totalNewsCount.toLocaleString()}건을 분석 중이에요...
            <SpinningSpan>⏳</SpinningSpan>
          </PanelSubTitle>
        ) : (
          <PanelSubTitle>
            뉴스에서 많이 언급된 키워드를 살펴보세요!
          </PanelSubTitle>
        )}
      </Grid>
      <MetaData
        item
        xs={6}
        px={3}
        mb={4}
        onClick={() => triggerScroll("priceChartRef")}
      >
        ⏰ 2017년 1월 3일 ~ 2017년 10월 13일 기준
      </MetaData>

      {/* 추후 삭제 예정 */}
      <Grid
        item
        xs={3}
        px={3}
        mb={4}
        sx={{ backgroundColor: "var(--custom-green-4)" }}
        onClick={() => {
          setIsLoading(!isLoading)
          console.log(isLoading)
        }}
      >
        클릭하면 로딩 상태 변경!
      </Grid>

      <Grid item xs={12}>
        <NewsCategoryTabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="inherit"
          variant="fullWidth"
        >
          <NewsTab label={"네이버"} {...a11yProps(0)} />
          <NewsTab label={"IT"} {...a11yProps(1)} />
          <NewsTab label={"경제"} {...a11yProps(2)} />
        </NewsCategoryTabs>
        <NewsTabPanel isLoading={isLoading} activeTab={activeTab} index={0} />
        <NewsTabPanel isLoading={isLoading} activeTab={activeTab} index={1} />
        <NewsTabPanel isLoading={isLoading} activeTab={activeTab} index={2} />
      </Grid>
    </Grid>
  )
}

export default KeywordResult

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
`
const SpinningSpan = styled.div`
  display: inline-block;
  animation: ${Spin} 2s linear infinite;
`

const MetaData = styled(Grid)`
  color: gray;
  font-weight: bold;
  font-size: 1.4rem;
  font-style: italic;
  cursor: pointer;
`

const NewsCategoryTabs = styled(Tabs)`
  & .MuiTabs-indicator {
    // indicator 길이를 짧게 만들기 위해 padding-inline을 줌
    // padding 부분을 제외한 content 부분만 background-color를 적용
    padding-inline: 10%;
    background-clip: content-box;
    background-color: #db9eb5;
  }
`

const NewsTab = styled(Tab)`
  color: var(--custom-black) !important;
  font-size: 1.5rem !important;
  font-weight: bold !important;
  &.Mui-selected {
    color: #db9eb5 !important;
  }
`
