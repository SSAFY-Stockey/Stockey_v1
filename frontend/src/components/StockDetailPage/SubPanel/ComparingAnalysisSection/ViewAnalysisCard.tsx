import {
  CardPaper,
  CardImg,
  CardText,
  TextWrapper,
  CardWrapper,
} from "./PriceAnalysisCard"
import { Grid } from "@mui/material"

interface Props {
  viewRank: number
  industry: string
  industryTotal: number
}

const ViewAnalysisCard = ({ viewRank, industry, industryTotal }: Props) => {
  return (
    <CardPaper elevation={2}>
      <CardWrapper container>
        <Grid item xs={2}>
          <CardImg src="/analysisLogos/like.png" alt="시가총액 순위" />
        </Grid>
        <TextWrapper item xs={9}>
          <CardText>
            {industry} 종목 {industryTotal}개 중에 조회수로 {viewRank}위예요!
          </CardText>
        </TextWrapper>
      </CardWrapper>
    </CardPaper>
  )
}

export default ViewAnalysisCard
