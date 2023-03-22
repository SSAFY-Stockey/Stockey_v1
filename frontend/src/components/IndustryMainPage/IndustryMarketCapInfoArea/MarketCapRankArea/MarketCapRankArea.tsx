import styled from "styled-components"
import MarketCapCardList from "./MarketCapCardList"

const MarketCapRankArea = () => {
  return (
    <AreaDiv>
      <TitleDiv>
        {/* 산업명 변수로 받아오기 */}
        <IndustryNameSpan>반도체</IndustryNameSpan> 종목 시총 순위
      </TitleDiv>
      <MarketCapCardList />
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

const IndustryNameSpan = styled.span`
  color: var(--custom-purple-1);
`
