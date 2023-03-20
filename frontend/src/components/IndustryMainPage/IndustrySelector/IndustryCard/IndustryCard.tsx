import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { CardActionArea } from "@mui/material"
import sampleImg from "./responsive-design.png"

const IndustryCard = () => {
  return (
    <IndustryCardWrapper>
      <IndustryCardActionArea>
        <IndustryCardBody>
          <CardMedia
            component="img"
            src={sampleImg}
            alt="thumbnail"
            sx={{
              borderRadius: "50%",
              height: "84px",
              width: "84px",
            }}
          />
        </IndustryCardBody>
        <IndustryCardNameArea>
          <NameTagP>IndustryName</NameTagP>
        </IndustryCardNameArea>
      </IndustryCardActionArea>
    </IndustryCardWrapper>
  )
}

export default IndustryCard

const IndustryCardWrapper = styled(Card)({
  width: 108,
  height: 180,
  borderRadius: "24px",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
})

const IndustryCardActionArea = styled(CardActionArea)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
})

const IndustryCardBody = styled(Box)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})

const IndustryCardNameArea = styled(CardContent)({
  padding: 0,
  width: "100%",
  height: 48,
  background: "linear-gradient(92.18deg, #FF996C 1.48%, #FE7598 98.93%)",
  borderRadius: "0px 0px 24px 24px",
  display: "flex",
  alignItems: "center",
})

const NameTagP = styled.p`
  margin: 0;
  padding: 4px 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1px;
  overflow-wrap: anywhere;

  color: #000000;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
