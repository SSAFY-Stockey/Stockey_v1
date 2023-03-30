import {
  CardPaper,
  CardImg,
  CardText,
  CardWrapper,
  TextWrapper,
} from "./PriceAnalysisCard"
import { Grid } from "@mui/material"

interface Props {
  stockName: string
  industry: string
  industryTotal: number
  industryRank: number
}

const CapitalAnalysisCard = ({
  stockName,
  industry,
  industryTotal,
  industryRank,
}: Props) => {
  return (
    <CardPaper elevation={2}>
      <CardWrapper container>
        <Grid item xs={2}>
          <CardImg src="/analysisLogos/rich.png" alt="시가총액 순위" />
        </Grid>
        <TextWrapper item xs={9}>
          <CardText>
            {industry} 종목 {industryTotal}개 중에 시가총액으로 {industryRank}
            위예요!
          </CardText>
        </TextWrapper>
      </CardWrapper>
    </CardPaper>
  )
}

export default CapitalAnalysisCard
