import { Card, Paper, Grid } from "@mui/material"
// import Paper from "@mui/material/Paper"
import styled from "styled-components"

const PriceAnalysisCard = () => {
  return (
    <CardPaper elevation={2}>
      <Grid container>
        <Grid item xs={2}>
          <CardImg src="/analysisLogos/win.png" alt="시가총액 순위" />
        </Grid>
        <Grid
          item
          xs={10}
          sx={{ display: "flex", alignItems: "center", paddingLeft: "10%" }}
        >
          <CardText>다른 IT 산업보다 3.7% 더 많이 올랐어요!</CardText>
        </Grid>
      </Grid>
    </CardPaper>
  )
}

export default PriceAnalysisCard
export const CardPaper = styled(Paper)`
  padding: 5%;
  background-color: rgba(255, 255, 255, 0.2) !important;
  // box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  // backdrop-filter: blur(15px);
`
export const CardImg = styled.img`
  width: 100%;
  height: auto;
`
export const CardText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`
