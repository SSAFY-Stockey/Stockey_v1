import KeywordBarGraph from "./KeywordBarGraph"
import KeyphraseList from "./KeyphraseList"
import { HighlightedSpan } from "../../StockDetailPage/MainSection/PriceSection/PriceSection"
import { useRecoilValue } from "recoil"
import { selectedStockIdxState } from "../../../stores/StockMainAtoms"
import { useRandomStock } from "../../../hooks/useRandomStock"

import styled from "styled-components"
// import dayjs from "dayjs"

// export interface commonParamsType {
//   newsType: "STOCK" | "INDUSTRY" | "ECONOMY"
//   typeId: number
//   // yymmdd
//   startDate: string
//   endDate: string
// }

const KeywordBoard = () => {
  // 현재 선택된 주식 데이터 읽어오기
  const { data: randomStockData } = useRandomStock(3) // 랜덤 주식 데이터
  const selectedStockIdx = useRecoilValue(selectedStockIdxState) // 현재 선택된 주식의 인덱스
  const selectedStock = randomStockData?.[selectedStockIdx] // 현재 선택된 주식 데이터
  console.log(selectedStock)

  // const today = dayjs()
  // const commonParams: commonParamsType = {
  //   newsType: "STOCK",
  //   typeId: selectedStock?.id,
  //   startDate: today.subtract(1, "year").startOf("year").format("YYMMDD"),
  //   endDate: today.format("YYMMDD"),
  // }

  return (
    <BoardDiv>
      <BoardTitle>
        <HighlightedSpan color="#ff6f9d">키워드</HighlightedSpan>로 보는 이번 주{" "}
        {selectedStock?.name} 소식💌
      </BoardTitle>
      {/* <KeyphraseList /> */}
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
