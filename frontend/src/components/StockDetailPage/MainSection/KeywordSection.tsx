import { PanelSubTitle } from "../KeywordPanel/KeywordPanel"
import { HighlightedSpan } from "./PriceSection"
import KeywordBarGraph from "../../StockMainPage/BriefingSection/KeywordBarGraph"

const KeywordSection = () => {
  return (
    <>
      <PanelSubTitle>
        뉴스 기사 속 핵심
        <HighlightedSpan> 키워드</HighlightedSpan>로 확인하기
      </PanelSubTitle>
      <KeywordBarGraph />
    </>
  )
}

export default KeywordSection
