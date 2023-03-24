import Grid from "@mui/material/Grid"
import StockMainSection from "../components/StockDetailPage/MainSection/StockMainSection"
import SubPanel from "../components/StockDetailPage/SubPanel/SubPanel"
import KeywordPanel from "../components/StockDetailPage/KeywordPanel/KeywordPanel"
import styled from "styled-components"
const StockDetailPage = () => {
  return (
    <Grid container height={"100%"}>
      <Grid item xs={6} md={6} lg={6}>
        <StockMainSection />
      </Grid>
      <Grid item xs={6} md={6} lg={6}>
        {false ? <SubPanel /> : <KeywordPanel keyword="빅스텝" />}
      </Grid>
    </Grid>
  )
}

export default StockDetailPage
