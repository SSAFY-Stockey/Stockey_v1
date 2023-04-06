import { KeywordPanelProps } from "./KeywordPanel"
import { stockDetailState } from "../../../../stores/StockDetailAtoms"
import { useRecoilValue } from "recoil"
import styled, { keyframes } from "styled-components"
import { Grid } from "@mui/material"

const CorrelationResult = ({ keywordId, keyword }: KeywordPanelProps) => {
  const stockDetail = useRecoilValue(stockDetailState)
  return (
    <ResultDiv>
      <MinValueDiv color="pink" resultValue={-0.3}>
        -1
      </MinValueDiv>

      <BarDiv resultValue={-0.3}>
        <CircularIndicator resultValue={-0.3} />
      </BarDiv>

      <MaxValueDiv color="green" resultValue={-0.3}>
        +1
      </MaxValueDiv>
    </ResultDiv>
    // <div></div>
  )
}

export default CorrelationResult

const changePlus = keyframes`
  0% {
    background-color: var(--custom-purple-4);
  }
  100% {
    background-color: var(--custom-green-4);
  }
`
const changeMinus = keyframes`
  0% {
    background-color: var(--custom-purple-4);
  }
  100% {
    background-color: var(--custom-pink-4);
  }
`

const slideToPlus = (value: number) => keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(${value}%);
    background-color: var(--custom-green-1);
    box-shadow: 0px 0px 10px 0px var(--custom-green-1);
  }
`
const slideToMinus = (value: number) => keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(${value}%);
    background-color: var(--custom-pink-1);
    box-shadow: 0px 0px 10px 0px var(--custom-pink-1);
  }
`
const zoomIn = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9)
  }
  100% {
    transform: scale(1.8);
  }
`
const zoomOut = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.1)
  }
  100% {
    transform: scale(0.8);
  }
`

const ResultDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-block: 3rem;
  padding-inline: 2rem;
`
const BarDiv = styled.div<{ resultValue: number }>`
  display: flex;
  justify-content: center;
  margin-inline: auto;
  width: 80%;
  background-color: var(--custom-purple-4);
  border-radius: 10px;
  animation: ${({ resultValue }) =>
      resultValue > 0 ? changePlus : changeMinus}
    1s ease-in-out 1s both;
`

const CircularIndicator = styled.div<{ resultValue: number }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--custom-purple-1);
  box-shadow: 0px 0px 10px 0px var(--custom-purple-1);
  animation: ${({ resultValue }) =>
      resultValue > 0
        ? slideToPlus(resultValue * 1000)
        : slideToMinus(resultValue * 1000)}
    1s ease-in-out 1s both;
`
const MinValueDiv = styled.div<{ color: string; resultValue: number }>`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--custom-pink-1);
  animation: ${({ resultValue }) => (resultValue < 0 ? zoomIn : zoomOut)} 1s
    ease-in-out 1s both;
`

const MaxValueDiv = styled.div<{ resultValue: number }>`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--custom-green-1);
  animation: ${({ resultValue }) => (resultValue > 0 ? zoomIn : zoomOut)} 1s
    ease-in-out 1s both;
`
