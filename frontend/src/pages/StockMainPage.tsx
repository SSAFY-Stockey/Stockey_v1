import BriefingSection from "../components/StockMainPage/BriefingSection/BriefingSection"
import RecommendSection from "../components/StockMainPage/RecommendSection/RecommendSection"
import Grid from "@mui/material/Grid"

const StockMainPage = () => {
  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <BriefingSection />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <RecommendSection />
      </Grid>
    </Grid>
  )
}

export default StockMainPage
