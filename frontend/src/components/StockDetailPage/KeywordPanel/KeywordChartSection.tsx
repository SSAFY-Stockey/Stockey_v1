import HighlyRelatedStockList from "./HighlyRelatedStockList"
import KeywordChart from "./KeywordChart"
import { useState } from "react"

const KeywordChartSection = () => {
  return (
    <>
      <KeywordChart />
      <HighlyRelatedStockList />
    </>
  )
}

export default KeywordChartSection
