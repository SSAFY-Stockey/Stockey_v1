import styled from "@emotion/styled"
import IndustryCard from "./IndustryCard"

const IndustryCardList = () => {
  return (
    <IndustryCardListDiv>
      {dummydata.map((industryName) => (
        <IndustryCard industryName={industryName} />
      ))}
    </IndustryCardListDiv>
  )
}

export default IndustryCardList

const dummydata = [
  "에너지",
  "소재",
  "자본재",
  "운송",
  "자동차와 부품",
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

const IndustryCardListDiv = styled.div`
  margin: 0px;
  padding: 5px;
  width: calc(100% - 10px);
  height: 100%;
  overflow-y: scroll;

  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  ::-webkit-scrollbar {
    width: 22px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 24px;
    border: 5px solid transparent;
    background-clip: padding-box;
  }
  ::-webkit-scrollbar-track {
    width: 22px;
  }
`
