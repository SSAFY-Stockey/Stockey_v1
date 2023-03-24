import PageTitle from "../components/common/PageTitle/PageTitle"
import { IndustrySelector } from "../components/IndustryMainPage"
import { IndustryMarketCapInfoArea } from "../components/IndustryMainPage"
import { FavoriteIndustryInfoArea } from "../components/IndustryMainPage"
import Grid from "@mui/material/Grid"
import styled from "@emotion/styled"

const IndustryMainPage = () => {
  const pageTitleInfo = {
    pageTitle: "산업별 정보",
    pageDescription: "주식의 기초를 다질 수 있는 공간입니다",
  }

  return (
    <PageGrid container spacing={4.5}>
      <PageTitle pageTitleInfo={pageTitleInfo} />
      <Grid item container spacing={4.5}>
        <Grid item xs={5}>
          <IndustrySelector />
        </Grid>
        <RightGrid item xs={7}>
          <IndustryMarketCapInfoArea />
          <FavoriteIndustryInfoArea />
        </RightGrid>
      </Grid>
    </PageGrid>
  )
}

export default IndustryMainPage

const PageGrid = styled(Grid)({
  padding: "36px",
})

const RightGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  gap: "36px",
})
