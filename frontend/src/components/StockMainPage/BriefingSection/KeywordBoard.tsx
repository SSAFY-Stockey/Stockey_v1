import KeywordBarGraph from "./KeywordBarGraph"
import KeyphraseList, { KeyphraseContainer } from "./KeyphraseList"
import { HighlightedSpan } from "../../StockDetailPage/MainSection/PriceSection/PriceSection"
import { useRecoilValue } from "recoil"
import { selectedStockState } from "../../../stores/StockMainAtoms"
import { selectedKeywordState } from "../../../stores/StockMainAtoms"
import { colors } from "./KeyphraseList"

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
  // const { idx: selectedKeywordIdx, id: keywordId } =
  //   useRecoilValue(selectedKeywordState)

  return (
    <BoardDiv>
      <BoardTitle>
        <HighlightedSpan
          // color={`var(--custom-${colors[selectedKeywordIdx]}-1)`}
          color="var(--custom-pink-1)"
        >
          키워드
        </HighlightedSpan>
        로 보는 이번 주 {selectedStockName} 소식💌
      </BoardTitle>
      <Suspense
        fallback={
          <KeyphraseContainer selectedIdx={1}>
            <LoadingComponent />
          </KeyphraseContainer>
        }
      >
        <KeyphraseList />
      </Suspense>

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
  height: 80vh;
`
const BoardTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
`
