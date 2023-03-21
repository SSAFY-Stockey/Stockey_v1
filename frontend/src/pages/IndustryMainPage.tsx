import PageTitle from "../components/common/PageTitle/PageTitle"
import { IndustrySelector } from "../components/IndustryMainPage"
import { IndustryMarketCapInfoArea } from "../components/IndustryMainPage"
import { FavoriteIndustryInfoArea } from "../components/IndustryMainPage"
import Grid from "@mui/material/Grid"

const IndustryMainPage = () => {
  const pageTitleInfo = {
    pageTitle: "산업별 정보",
    pageDescription: "주식의 기초를 다질 수 있는 공간입니다"
  }

  return (
    <Grid container spacing={4.5}>
      <PageTitle pageTitleInfo={pageTitleInfo} />
      <Grid item container spacing={4.5}>
        <Grid item xs={5}>
          <IndustrySelector />
        </Grid>
        <Grid item xs={7} container direction="column" spacing={4.5}>
          <Grid item xs={6}>
            <IndustryMarketCapInfoArea />
          </Grid>
          <Grid item xs={6}>
            <FavoriteIndustryInfoArea />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default IndustryMainPage
