import { PanelSubTitle } from "../../KeywordPanel/KeywordPanel"
import { Grid } from "@mui/material"
import ComparingAnalysisList from "./ComparingAnalysisList"
const ComparingAnalysisSection = () => {
  return (
    <>
      <PanelSubTitle>네이버 VS IT 종목</PanelSubTitle>
      <Grid container>
        <Grid item xs={12}>
          <ComparingAnalysisList />
        </Grid>
      </Grid>
    </>
  )
}

export default ComparingAnalysisSection
