import { Grid } from "@mui/material"
import BizBlock from "./BizBlock"
const MainBizSection = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <BizBlock type="플랫폼" />
      </Grid>
      <Grid item xs={4}>
        <BizBlock type="핀테크" />
      </Grid>
      <Grid item xs={4}>
        <BizBlock type="콘텐츠" />
      </Grid>
    </Grid>
  )
}

export default MainBizSection
