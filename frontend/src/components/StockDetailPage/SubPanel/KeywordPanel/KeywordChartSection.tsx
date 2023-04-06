import HighlyRelatedStockList from "./HighlyRelatedStockList"
import KeywordChart from "./KeywordChart"
import { useState } from "react"
import { KeywordPanelProps } from "./KeywordPanel"

const KeywordChartSection = ({ keywordId, keyword }: KeywordPanelProps) => {
  return (
    <>
      <KeywordChart keywordId={keywordId} keyword={keyword} />
      <HighlyRelatedStockList />
    </>
  )
}

export default KeywordChartSection
