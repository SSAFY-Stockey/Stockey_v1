import Grid from "@mui/material/Grid"
import StockMainSection from "../components/StockDetailPage/MainSection/StockMainSection"
import SubPanel from "../components/StockDetailPage/SubPanel/SubPanel"
import KeywordPanel from "../components/StockDetailPage/KeywordPanel/KeywordPanel"
import styled from "styled-components"
const StockDetailPage = () => {
  return (
    <Grid container height={"100%"}>
      <Grid item xs={7}>
        <StockMainSection />
      </Grid>
      <Grid item xs={5}>
        {false ? <SubPanel /> : <KeywordPanel keyword="빅스텝" />}
      </Grid>
    </Grid>
  )
}

export default StockDetailPage
