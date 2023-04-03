import { Grid } from "@mui/material"
import BizBlock from "./BizBlock"
import { PanelSubTitle } from "../../KeywordPanel/KeywordPanel"
const MainBizSection = () => {
  return (
    <>
      <PanelSubTitle>잘 나가는 사업 TOP 3</PanelSubTitle>
      <Grid container spacing={1} mb={3}>
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
    </>
  )
}

export default MainBizSection
