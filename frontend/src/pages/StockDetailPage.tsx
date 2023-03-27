import Grid from "@mui/material/Grid"
import StockMainPanel from "../components/StockDetailPage/MainPanel/StockMainPanel"
import SubPanel from "../components/StockDetailPage/SubPanel/SubPanel"
import KeywordPanel from "../components/StockDetailPage/KeywordPanel/KeywordPanel"
import styled from "styled-components"
const StockDetailPage = () => {
  return (
    <Grid container height={"100%"}>
      <Grid item xs={6} md={6} lg={6}>
        <StockMainPanel />
      </Grid>
      <StyledPanel item xs={6} md={6} lg={6}>
        {true ? <SubPanel /> : <KeywordPanel keyword="빅스텝" />}
      </StyledPanel>
    </Grid>
  )
}

export default StockDetailPage

const StyledPanel = styled(Grid)``
