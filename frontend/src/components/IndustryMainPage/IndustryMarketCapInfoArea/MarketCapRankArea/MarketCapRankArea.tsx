import styled from "styled-components"
import MarketCapCardList from "./MarketCapCardList"

interface clickedIndustryInfoProps {
  clickedIndustryName: string
  clickedChartColor: string
}

const MarketCapRankArea = ({
  clickedIndustryName,
  clickedChartColor,
}: clickedIndustryInfoProps) => {
  return (
    <AreaDiv>
      <TitleDiv>
        <IndustryNameSpan nameColor={clickedChartColor}>
          {clickedIndustryName}
        </IndustryNameSpan>{" "}
        종목 시총 순위
      </TitleDiv>
      <MarketCapCardList industryName={clickedIndustryName} />
    </AreaDiv>
  )
}

export default MarketCapRankArea

const AreaDiv = styled.div`
  flex-grow: 1;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 2rem;
`

const TitleDiv = styled.div`
  margin-left: 1rem;
  width: 100%;
  height: 1.6rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.6rem;
  letter-spacing: 0.1px;
`

const IndustryNameSpan = styled.span<{ nameColor: string }>`
  font-size: 1.8rem;
  color: ${({ nameColor }) => nameColor};
`
