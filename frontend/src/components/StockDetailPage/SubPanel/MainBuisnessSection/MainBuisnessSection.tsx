import { Grid } from "@mui/material"
import MainBiz from "./MainBiz"
const MainBuisnessSection = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <MainBiz type="플랫폼" />
      </Grid>
      <Grid item xs={4}>
        <MainBiz type="핀테크" />
      </Grid>
      <Grid item xs={4}>
        <MainBiz type="콘텐츠" />
      </Grid>
    </Grid>
  )
}

export default MainBuisnessSection
