import { IndustrySelector } from "../components/IndustryMainPage"
import { IndustryMarketCapInfoArea } from "../components/IndustryMainPage"
import { FavoriteIndustryInfoArea } from "../components/IndustryMainPage"
import Box from "@mui/material/Box"
import styled from "@emotion/styled"
import Grid from "@mui/material/Grid"

const IndustryMainPage = () => {
  return (
    // <IndustryMainPageBody>
    //   <HeaderBox>
    //     <TitleP>산업별 정보</TitleP>
    //     <PageDescriptionP>
    //       주식의 기초를 다질 수 있는 공간입니다
    //     </PageDescriptionP>
    //   </HeaderBox>
    //   <IndustrySelector />
    //   <IndustryMarketCapInfoArea />
    //   <FavoriteIndustryInfoArea />
    // </IndustryMainPageBody>

    <Grid container spacing={4.5} height="calc(100vh - 36px)">
      <Grid item xs={12} container spacing={3} height="48px">
        <Grid item xs="auto">
          <TitleP>산업별 정보</TitleP>
        </Grid>
        <Grid item xs display="flex" alignItems="end">
          <PageDescriptionP>
            주식의 기초를 다질 수 있는 공간입니다
          </PageDescriptionP>
        </Grid>
      </Grid>
      <Grid item container spacing={4.5} height="auto">
        <Grid item xs={5}>
          <IndustrySelector />
        </Grid>
        <Grid item xs={7} container direction="column" spacing={4.5}>
          <Grid item xs>
            <IndustryMarketCapInfoArea />
          </Grid>
          <Grid item xs>
            <FavoriteIndustryInfoArea />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default IndustryMainPage

const IndustryMainPageBody = styled(Box)({
  height: "calc(100vh - 72px)",
  margin: "0px 0px 36px",
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: "36px",
  gridTemplateRows: "48px auto auto",
  gridTemplateAreas: `
    "header header header header header header header header header header header header"
    "select select select select select market market market market market market market"
    "select select select select select favorite favorite favorite favorite favorite favorite favorite"`,
})

const HeaderBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  padding: "0px",
  gap: "25px",
  height: "48px",
  width: "100%",
})

const TitleP = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 0.1px;
  color: #000000;

  bottom: 0px;
  margin: 0px;
`

const PageDescriptionP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  letter-spacing: 0.025em;
  color: #6d6666;

  display: flex;
  margin: 0px;
`
