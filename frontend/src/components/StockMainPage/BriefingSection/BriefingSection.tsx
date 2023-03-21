import KeywordBoard from "./KeywordBoard"
import MyStockList from "./MyStockList"
import Grid from "@mui/material/Grid"
const BriefingSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8} md={8} lg={9}>
        <KeywordBoard />
      </Grid>
      <Grid item xs={4} md={4} lg={3}>
        <MyStockList />
      </Grid>
    </Grid>
  )
}

export default BriefingSection
