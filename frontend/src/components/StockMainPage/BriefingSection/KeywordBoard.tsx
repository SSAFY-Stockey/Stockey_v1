import KeywordBarGraph from "./KeywordBarGraph"
import KeyphraseList from "./KeyphraseList"
import { HighlightedSpan } from "../../StockDetailPage/MainSection/PriceSection/PriceSection"
import styled from "styled-components"

export interface SelectHandlerType {
  selectedIdx: number
  setSelectedIdx: (idx: number) => void
}

const KeywordBoard = ({ selectedIdx, setSelectedIdx }: SelectHandlerType) => {
  return (
    <BoardDiv>
      <BoardTitle>
        <HighlightedSpan color="#ff6f9d">키워드</HighlightedSpan>로 보는 이번 주
        네이버 소식💌
      </BoardTitle>
      <KeyphraseList selectedIdx={selectedIdx} />
      <KeywordBarGraph selectedIdx={selectedIdx} />
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
