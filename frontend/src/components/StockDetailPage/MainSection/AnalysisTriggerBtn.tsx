import { Box } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"
import LoadingComponent from "../../common/Loading/LoadingComponent"
import KeywordBarGraph from "../../StockMainPage/BriefingSection/KeywordBarGraph"

const AnalysisTriggerBtn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isAnalysisStarted, setIsAnalysisStarted] = useState(false)
  const handleClick = () => {
    setIsAnalysisStarted(true)
    // setIsLoading(true)
  }

  return (
    <KeywordBox onClick={handleClick} isAnalysisStarted={isAnalysisStarted}>
      <AnalysisTrigger isAnalysisStarted={isAnalysisStarted}>
        뉴스 키워드 분석하기 🔍
      </AnalysisTrigger>
      <AnalysisResult isAnalysisStarted={isAnalysisStarted}>
        {isLoading ? <LoadingComponent /> : <KeywordBarGraph />}
      </AnalysisResult>
    </KeywordBox>
  )
}

export default AnalysisTriggerBtn

const KeywordBox = styled(Box)<{ isAnalysisStarted: boolean }>`
  background: ${(isAnalysisStarted) =>
    isAnalysisStarted ? "white" : "var(--custom-gradient-violet)"};
  height: ${(isAnalysisStarted) => (!isAnalysisStarted ? "auto" : "40px")};

  width: 100%;
  border-radius: 24px;
  cursor: pointer;
  padding-block: 10%;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  border: 4px solid var(--custom-purple-4);
  transition: all 0.5s ease-in-out;
  // &:hover {
  //   transform: scale(1.02);
  // }
`
const AnalysisTrigger = styled.div<{ isAnalysisStarted: boolean }>`
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  visibility: ${(isAnalysisStarted) =>
    !isAnalysisStarted ? "hidden" : "visible"};
  pointer-events: ${(isAnalysisStarted) =>
    !isAnalysisStarted ? "none" : "auto"};
  transition: all 0.5s ease-in-out;
`
const AnalysisResult = styled.div<{ isAnalysisStarted: boolean }>`
  width: 100%;
  height: auto;
  visibility: ${(isAnalysisStarted) =>
    !isAnalysisStarted ? "visible" : "hidden"};
  pointer-events: ${(isAnalysisStarted) =>
    !isAnalysisStarted ? "auto" : "none"};
  transition: all 0.2s ease-in-out;
`
