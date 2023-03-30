import { Card, Paper, Grid } from "@mui/material"
// import Paper from "@mui/material/Paper"
import styled from "styled-components"

interface Props {
  stockName: string
  industry: string
  industryAvgChangeRate: number
  changeRate: number
}

const PriceAnalysisCard = ({
  stockName,
  industry,
  industryAvgChangeRate,
  changeRate,
}: Props) => {
  let [result, description]: string[] = ["", ""]

  // 산업 평균은 하락했는데 종목은 상승한 경우
  if (changeRate > 0 && industryAvgChangeRate < 0) {
    description = `오늘 다른 ${industry} 종목들은 떨어질 동안 ${stockName}은 오히려 ${(
      changeRate * 100
    ).toFixed(1)}% 올랐어요!`
    result = "win"
  }
  // 산업 평균은 상승했는데 종목은 하락한 경우
  else if (changeRate < 0 && industryAvgChangeRate > 0) {
    description = `오늘 다른 ${industry} 종목들은 오를 동안 ${stockName}은 오히려 ${(
      changeRate * 100
    ).toFixed(1)}% 떨어졌어요..`
    result = "lose"
  }
  // 산업 평균과 종목이 모두 상승한 경우
  else if (changeRate > 0 && industryAvgChangeRate > 0) {
    // 종목이 더 많이 상승한 경우
    if (changeRate > industryAvgChangeRate) {
      description = `${stockName}는 오늘 다른 ${industry} 종목들보다 ${(
        (changeRate * 100) /
        industryAvgChangeRate
      ).toFixed(1)}% 더 많이 올랐어요!`
      result = "win"
    }

    // 산업 평균이 더 많이 상승한 경우
    else {
      description = `${stockName}는 오늘 다른 ${industry} 종목들의 ${(
        (industryAvgChangeRate * 100) /
        changeRate
      ).toFixed(1)}% 정도 올랐네요.`
      result = "lose"
    }
  }

  // 산업 평균과 종목이 모두 하락한 경우
  else if (changeRate < 0 && industryAvgChangeRate < 0) {
    // 종목이 더 많이 하락한 경우
    if (changeRate < industryAvgChangeRate) {
      description = `${stockName}는 오늘 다른 ${industry} 종목들보다 ${(
        (changeRate * 100) /
        industryAvgChangeRate
      ).toFixed(1)}% 더 많이 떨어졌어요!`
      result = "lose"
    }

    // 산업 평균이 더 많이 하락한 경우
    else {
      description = `${stockName}는 오늘 다른 ${industry} 종목들보다 ${(
        (industryAvgChangeRate * 100) /
        changeRate
      ).toFixed(1)}% 덜 떨어졌네요.`
      result = "win"
    }
  }

  return (
    <CardPaper elevation={2}>
      <CardWrapper container>
        <Grid item xs={2}>
          <CardImg src={`/analysisLogos/${result}.png`} alt="주가 변동 비교" />
        </Grid>
        <TextWrapper item xs={9}>
          <CardText>{description}</CardText>
        </TextWrapper>
      </CardWrapper>
    </CardPaper>
  )
}

export default PriceAnalysisCard
export const CardPaper = styled(Paper)`
  padding: 5%;
  background-color: rgba(255, 255, 255, 0.2) !important;
  border-radius: 24px !important;
  // box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  // backdrop-filter: blur(15px);
`

export const CardWrapper = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardImg = styled.img`
  width: 100%;
  height: auto;
`

export const TextWrapper = styled(Grid)`
  display: flex;
  align-items: center;
`

export const CardText = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
  line-height: 2;
`
