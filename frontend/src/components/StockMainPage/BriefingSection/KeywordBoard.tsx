import KeywordBarGraph from "./KeywordBarGraph"
import KeyphraseList from "./KeyphraseList"
import { HighlightedSpan } from "../../StockDetailPage/MainSection/PriceSection/PriceSection"
import { useRecoilValue } from "recoil"
import { selectedStockState } from "../../../stores/StockMainAtoms"

import styled from "styled-components"
import { Suspense } from "react"
import LoadingComponent from "../../common/Loading/LoadingComponent"

const KeywordBoard = () => {
  // 현재 선택된 주식 데이터 읽어오기
  const {
    idx,
    id,
    name: selectedStockName,
  } = useRecoilValue(selectedStockState)

  return (
    <BoardDiv>
      <BoardTitle>
        <HighlightedSpan color="#ff6f9d">키워드</HighlightedSpan>로 보는 이번 주{" "}
        {selectedStockName} 소식💌
      </BoardTitle>
      {/* <KeyphraseList /> */}
      <Suspense fallback={<LoadingComponent />}>
        <KeywordBarGraph />
      </Suspense>
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
