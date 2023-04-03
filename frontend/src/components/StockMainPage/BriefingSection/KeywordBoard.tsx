import KeywordBarGraph from "./KeywordBarGraph"
import KeyphraseList from "./KeyphraseList"
import { HighlightedSpan } from "../../StockDetailPage/MainSection/PriceSection/PriceSection"
import { useRecoilValue } from "recoil"
import {
  selectedStockIdxState,
  selectedKeywordIdxState,
} from "../../../stores/SelectedIdxAtoms"
import { useRandomStock } from "../../../hooks/useRandomStock"
import { useKeywordRank } from "../../../hooks/useKeywordRank"
import { useKeyphraseList } from "../../../hooks/useKeyphraseList"
import { KeywordRankParamsType } from "../../../hooks/useKeywordRank"
import { KeyphraseListParamsType } from "../../../hooks/useKeyphraseList"
import styled from "styled-components"
import dayjs from "dayjs"

const KeywordBoard = () => {
  // 현재 선택된 주식 데이터 읽어오기
  const selectedStockIdx = useRecoilValue(selectedStockIdxState) // 현재 선택된 주식의 인덱스
  const { data: randomStockData } = useRandomStock(3) // 랜덤 주식 데이터
  const selectedStock = randomStockData?.[selectedStockIdx] // 현재 선택된 주식 데이터

  interface commonParamsType {
    newsType: "STOCK" | "INDUSTRY" | "ECONOMY"
    typeId: number
    // yymmdd
    startDate: string
    endDate: string
  }

  const today = dayjs()
  const commonParams: commonParamsType = {
    newsType: "STOCK",
    typeId: selectedStock.id,
    startDate: today.subtract(1, "week").format("YYMMDD"),
    endDate: today.format("YYMMDD"),
  }

  // keyword 순위 읽어오기
  const keywordRankParams: KeywordRankParamsType = {
    topN: 3,
    ...commonParams,
  }
  const { data: keywordRankData } = useKeywordRank(keywordRankParams)

  // keyphrase 리스트 읽어오기
  const selectedKeywordIdx = useRecoilValue(selectedKeywordIdxState) // 현재 선택된 키워드의 인덱스
  const keyphraseListParams: KeyphraseListParamsType = {
    keywordId: keywordRankData?.[selectedKeywordIdx].id,
    ...commonParams,
  }
  const { data: keyphraseListData } = useKeyphraseList(keyphraseListParams)

  return (
    <BoardDiv>
      <BoardTitle>
        <HighlightedSpan color="#ff6f9d">키워드</HighlightedSpan>로 보는 이번 주{" "}
        {selectedStock.name} 소식💌
      </BoardTitle>
      <KeyphraseList data={keyphraseListData} />
      <KeywordBarGraph data={keywordRankData} />
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
