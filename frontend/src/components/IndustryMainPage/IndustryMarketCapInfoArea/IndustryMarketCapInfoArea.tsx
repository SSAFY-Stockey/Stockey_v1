import styled from "@emotion/styled"
import IndustryMarketCapChartArea from "./IndustryMarketCapChartArea/IndustryMarketCapChartArea"
import MarketCapRankArea from "./MarketCapRankArea/MarketCapRankArea"
import { useState } from "react"
import { useIndustryMarketCapList } from "../../../hooks/useIndustryMarketCapList"
import Spinner from "../../common/Spinner/Spinner"
import Grid from "@mui/material/Grid/Grid"

export type ClickedIndustryInfoType = {
  id: string | undefined
  name: string
  color: string
}

const IndustryMarketCapInfoArea = () => {
  const { data: chartData } = useIndustryMarketCapList()

  const [clickedIndustryInfo, setClickedIndustryInfo] =
    useState<ClickedIndustryInfoType>({
      id: undefined,
      name: "전체",
      color: "var(--custom-black)",
    })

  const handleClickedIndustryInfo = (
    clickedIndustryInfo: ClickedIndustryInfoType
  ) => {
    setClickedIndustryInfo(clickedIndustryInfo)
  }

  return (
    <AreaDiv>
      <TitleDiv>산업별 규모를 확인해보세요📈</TitleDiv>
      <Grid container spacing={2}>
        <Grid item sm={12} md={7}>
          {chartData ? (
            <IndustryMarketCapChartArea
              chartData={chartData}
              handleClickedIndustryInfo={handleClickedIndustryInfo}
            />
          ) : (
            <Spinner />
          )}
        </Grid>
        <Grid item sm={12} md={5}>
          <MarketCapRankArea clickedIndustryInfo={clickedIndustryInfo} />
        </Grid>
      </Grid>
    </AreaDiv>
  )
}

export default IndustryMarketCapInfoArea

const AreaDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: #f8f8f8;
  border-radius: 24px;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3));
`

const TitleDiv = styled.div`
  height: 24px;
  width: auto;
  padding: 0px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  /* or 83% */

  display: flex;
  align-items: center;
  letter-spacing: 0.1px;
`

const ContentDiv = styled.div`
  height: auto;
  width: auto;
  padding: 0px;
  display: flex;
  justify-content: space-between;
`

const ContentGrid = styled(Grid)({
  height: "auto",
  width: "auto",
  padding: 0,
  gap: "2rem",
})
