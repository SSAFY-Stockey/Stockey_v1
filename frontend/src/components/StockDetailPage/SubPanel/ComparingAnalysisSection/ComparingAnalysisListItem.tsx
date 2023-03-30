import styled from "styled-components"
import CapitalAnalysisCard from "./CapitalAnalysisCard"
import PriceAnalysisCard from "./PriceAnalysisCard"
import ViewAnalysisCard from "./ViewAnalysisCard"
import { Grid } from "@mui/material"

const ComparingAnalysisListItem = () => {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <CapitalAnalysisCard />
      </Grid>
      <Grid item>
        <PriceAnalysisCard />
      </Grid>
      <Grid item>
        <ViewAnalysisCard />
      </Grid>
    </Grid>
  )
}

export default ComparingAnalysisListItem
