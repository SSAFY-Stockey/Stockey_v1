import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import { CardActionArea } from "@mui/material"
import sampleImg from "./responsive-design.png"

const IndustryCard = () => {
  const onClickIndustryCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("산업 카드 클릭🙏")
    console.log(e)
  }

  return (
    <IndustryCardWrapper>
      <IndustryCardActionArea onClick={onClickIndustryCard}>
        <IndustryCardContent>
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
        </IndustryCardContent>
      </IndustryCardActionArea>
    </IndustryCardWrapper>
  )
}

export default IndustryCard

const IndustryCardWrapper = styled(Card)({
  width: "calc((100% - 72px)/3)",
  borderRadius: "24px",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
})

const IndustryCardActionArea = styled(CardActionArea)({
  width: "100%",
  height: "0px",
  paddingBottom: "166.66666667%",
  position: "relative",
})

const IndustryCardContent = styled(Box)({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
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

const IndustryCardNameArea = styled(Box)({
  padding: "0px",
  width: "100%",
  height: "26.66666667%",
  background: "var(--custom-gradient-pink)",
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
