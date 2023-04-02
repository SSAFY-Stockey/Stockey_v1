import KeywordBarGraph from "./KeywordBarGraph"
import KeyphraseList from "./KeyphraseList"
import { HighlightedSpan } from "../../StockDetailPage/MainSection/PriceSection/PriceSection"
import styled from "styled-components"
import { useRecoilValue } from "recoil"
import { selectedStockIdxState } from "../../../stores/SelectedStockAtoms"
import { useRandomStock } from "../../../hooks/useRandomStock"

const KeywordBoard = () => {
  const selectedStockIdx = useRecoilValue(selectedStockIdxState)
  const { data: randomStockData } = useRandomStock(3)
  const selectedStockName = randomStockData?.[selectedStockIdx].name

  return (
    <BoardDiv>
      <BoardTitle>
        <HighlightedSpan color="#ff6f9d">키워드</HighlightedSpan>로 보는 이번 주{" "}
        {selectedStockName} 소식💌
      </BoardTitle>
      <KeyphraseList />
      <KeywordBarGraph />
    </BoardDiv>
  )
}

export default KeywordBoard

const BoardDiv = styled.div`
  background-color: #faf5f7;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0% 3%;
  border-radius: 24px;
  height: 100%;
`
const BoardTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
`
