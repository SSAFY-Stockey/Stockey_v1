import styled from "@emotion/styled"
import IndustryCard from "./IndustryCard"

const IndustryCardList = () => {
  // 추후 산업 목록 데이터 받아와서 map하는 코드로 변경
  return (
    <IndustryCardListDiv>
      <IndustryCard />
      <IndustryCard />
      <IndustryCard />
      <IndustryCard />
      <IndustryCard />
      <IndustryCard />
      <IndustryCard />
      <IndustryCard />
      <IndustryCard />
      <IndustryCard />
      <IndustryCard />
      <IndustryCard />
      <IndustryCard />
      <IndustryCard />
    </IndustryCardListDiv>
  )
}

export default IndustryCardList

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
