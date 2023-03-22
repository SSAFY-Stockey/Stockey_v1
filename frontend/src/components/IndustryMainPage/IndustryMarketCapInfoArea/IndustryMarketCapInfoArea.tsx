import styled from "@emotion/styled"
import IndustryMarketCapChartArea from "./IndustryMarketCapChartArea/IndustryMarketCapChartArea"
import MarketCapRankArea from "./MarketCapRankArea/MarketCapRankArea"

const IndustryMarketCapInfoArea = () => {
  return (
    <AreaDiv>
      <TitleDiv>주식시장 내 산업별 비중</TitleDiv>
      <ContentDiv>
        <IndustryMarketCapChartArea />
        <MarketCapRankArea />
      </ContentDiv>
    </AreaDiv>
  )
}

export default IndustryMarketCapInfoArea

const AreaDiv = styled.div`
  width: 100%;
  height: 432px;
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
  font-size: 24px;
  line-height: 20px;
  /* or 83% */

  display: flex;
  align-items: center;
  letter-spacing: 0.1px;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ContentDiv = styled.div`
  height: auto;
  width: auto;
  padding: 0px;
  display: flex;
`
