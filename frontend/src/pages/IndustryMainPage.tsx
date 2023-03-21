import Grid from "@mui/material/Unstable_Grid2"
import Box from "@mui/material/Box"

import { IndustrySelector } from "../components/IndustryMainPage"
import { IndustryMarketCapInfoArea } from "../components/IndustryMainPage"
import { FavoriteIndustryInfoArea } from "../components/IndustryMainPage"
import styled from "@emotion/styled"

const IndustryMainPage = () => {
  return (
    <IndustryMainPageBody>
      <HeaderBox>
        <TitleP>산업별 정보</TitleP>
        <PageDescriptionP>
          주식의 기초를 다질 수 있는 공간입니다
        </PageDescriptionP>
      </HeaderBox>
      <IndustrySelector />
      <IndustryMarketCapInfoArea />
      <FavoriteIndustryInfoArea />
    </IndustryMainPageBody>
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
  gridArea: "header",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  padding: "0px",
  gap: "25px",
  height: "48px",
})

const TitleP = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 0.1px;
  color: #000000;

  display: flex;
  align-items: center;
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
