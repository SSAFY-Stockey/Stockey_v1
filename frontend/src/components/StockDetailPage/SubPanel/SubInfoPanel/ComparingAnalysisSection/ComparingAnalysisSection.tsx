import { PanelSubTitle } from "../../KeywordPanel/KeywordPanel"
import { Grid } from "@mui/material"
import ComparingAnalysisList from "./ComparingAnalysisList"
const ComparingAnalysisSection = () => {
  return (
    <>
      <PanelSubTitle>다른 IT 종목들과 비교하면 어떨까요?</PanelSubTitle>
      <Grid container>
        <Grid item xs={12}>
          <ComparingAnalysisList />
        </Grid>
      </Grid>
    </>
  )
}

export default ComparingAnalysisSection
