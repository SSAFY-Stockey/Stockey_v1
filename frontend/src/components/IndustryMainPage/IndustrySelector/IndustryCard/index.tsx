import styled from "styled-components"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { CardActionArea } from "@mui/material"
import sampleImg from "./responsive-design.png"

const IndustryCardDiv = styled.div`
  height: 180px;
  width: 108px;
  background: "#FFFFFF";
  border-radius: 24px;
  boder: 1px solid black;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`

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

const IndustryCardImg = styled.div`
  height: 84px;
  width: 84px;
  border-radius: 100%;
`

const IndustryCard = () => {
  return (
    <Card
      sx={{
        width: 108,
        height: 180,
        borderRadius: "24px",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      }}
    >
      <CardActionArea
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src={sampleImg}
            alt="thumbnail"
            sx={{ borderRadius: "50%", height: "84px", width: "84px" }}
          />
        </Box>
        <CardContent
          sx={{
            padding: 0,
            width: "100%",
            height: 48,
            background:
              "linear-gradient(92.18deg, #FF996C 1.48%, #FE7598 98.93%)",
            borderRadius: "0px 0px 24px 24px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <NameTagP>IndustryName</NameTagP>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default IndustryCard
