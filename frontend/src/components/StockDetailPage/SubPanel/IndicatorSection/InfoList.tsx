import { PanelSubTitle } from "../../KeywordPanel/KeywordPanel"
import InfoListItem from "./InfoListItem"
import { Grid } from "@mui/material"

const InfoList = () => {
  return (
    <>
      <PanelSubTitle>네이버는 어떤 회사인가요?</PanelSubTitle>
      <Grid container rowSpacing={1} columnSpacing={1} mb={3}>
        <Grid item xs={6}>
          <InfoListItem type="finance" value="1%" />
        </Grid>
        <Grid item xs={6}>
          <InfoListItem type="size" value="대기업" />
        </Grid>
        <Grid item xs={6}>
          <InfoListItem type="sales" value="5.8조" />
        </Grid>
        <Grid item xs={6}>
          <InfoListItem type="credit_rating" value="최상" />
        </Grid>
      </Grid>
    </>
  )
}

export default InfoList
