import { CardPaper, CardImg, CardText } from "./PriceAnalysisCard"
import { Grid } from "@mui/material"

const CapitalAnalysisCard = () => {
  return (
    <CardPaper elevation={2}>
      <Grid container>
        <Grid item xs={2}>
          <CardImg src="/analysisLogos/rich.png" alt="시가총액 순위" />
        </Grid>
        <Grid
          item
          xs={10}
          sx={{ display: "flex", alignItems: "center", paddingLeft: "10%" }}
        >
          <CardText>IT 산업 중에 시가총액으로 1위에요!</CardText>
        </Grid>
      </Grid>
    </CardPaper>
  )
}

export default CapitalAnalysisCard
