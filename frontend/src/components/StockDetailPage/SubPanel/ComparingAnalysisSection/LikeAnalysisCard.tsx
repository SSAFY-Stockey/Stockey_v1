import {
  CardPaper,
  CardImg,
  CardText,
  TextWrapper,
  CardWrapper,
  CardTitle,
} from "./PriceAnalysisCard"
import { Grid } from "@mui/material"

interface Props {
  likeRank: number
  industry: string
  industryTotal: number
}

const LikeAnalysisCard = ({ likeRank, industry, industryTotal }: Props) => {
  let [result, title]: string[] = ["", ""]
  likeRank < 6
    ? ([result, title] = ["like", `${industry}의 인플루언서😎`])
    : ([result, title] = ["diamond", `${industry}의 숨은 보석💎`])

  return (
    <CardPaper elevation={2}>
      <CardWrapper container>
        <Grid item xs={2}>
          <CardImg src={`/analysisLogos/${result}.png`} alt="시가총액 순위" />
        </Grid>
        <TextWrapper item xs={9}>
          <CardTitle>{title}</CardTitle>
          <CardText>
            좋아요를 가장 많이 받은 {industry} 종목 {likeRank}위예요!
          </CardText>
        </TextWrapper>
      </CardWrapper>
    </CardPaper>
  )
}

export default LikeAnalysisCard
