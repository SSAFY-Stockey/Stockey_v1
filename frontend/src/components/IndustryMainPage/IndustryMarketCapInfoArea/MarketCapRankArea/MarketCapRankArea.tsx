import { useRecoilValue } from "recoil"
import styled from "styled-components"
import { clickedIndustryInfoState } from "../../../../store/store"
import MarketCapCardList from "./MarketCapCardList"

const MarketCapRankArea = () => {
  const clickedIndustryInfo = useRecoilValue(clickedIndustryInfoState)
  return (
    <AreaDiv>
      <TitleDiv>
        <IndustryNameSpan nameColor={clickedIndustryInfo.clickedChartColor}>
          {clickedIndustryInfo.clickedIndustryName}
        </IndustryNameSpan>{" "}
        종목 시총 순위
      </TitleDiv>
      <MarketCapCardList
        industryName={clickedIndustryInfo.clickedIndustryName}
      />
    </AreaDiv>
  )
}

export default MarketCapRankArea

const AreaDiv = styled.div`
  flex-grow: 1;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const TitleDiv = styled.div`
  width: 100%;
  height: 1.8rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.8rem;
  letter-spacing: 0.1px;
`

const IndustryNameSpan = styled.span<{ nameColor: string }>`
  font-size: 2rem;
  color: ${({ nameColor }) => nameColor};
`
