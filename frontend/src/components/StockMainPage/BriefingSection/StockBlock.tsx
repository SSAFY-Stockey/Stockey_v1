import { useState } from "react"
import Paper from "@mui/material/Paper"
import styled from "styled-components"

interface Props {
  companyLogo?: string
  companyName: string
  currentPrice: number
  priceChange: number
}

const StockBlock = ({
  companyLogo,
  companyName,
  currentPrice,
  priceChange,
}: Props) => {
  const [state, setState] = useState<"default" | "selected">("default")
  const clickHandler = () => {
    state === "default" ? setState("selected") : setState("default")
  }
  return (
    <GradientBorderBlock state={state} onClick={clickHandler}>
      <ContentPaper elevation={0} state={state}>
        {/* <StyledContent state={state}> */}
        <LogoImg src={`logo_images/${companyLogo}.png`} />
        <StockInfoDiv>
          <StockName>{companyName}</StockName>
          <StockStatDiv>
            <StockPrice>{currentPrice.toLocaleString("ko-KR")}</StockPrice>
            <PriceChange isIncreasing={priceChange > 0 ? true : false}>
              {`${priceChange > 0 ? "▲" : "▼"} ${priceChange}%`}
            </PriceChange>
          </StockStatDiv>
        </StockInfoDiv>
        {/* </StyledContent> */}
      </ContentPaper>
    </GradientBorderBlock>
  )
}

export default StockBlock

export const GradientBorderBlock = styled.div<{
  state: "default" | "selected"
}>`
  position: relative;
  width: ${(props) => (props.state === "default" ? "90%" : "100%")};
  background-image: ${(props) =>
    props.state === "default"
      ? "null"
      : "linear-gradient(#FAF5F7, #FAF5F7), linear-gradient(130deg, #99C2FF 0%, #FFA7D1 100%)"};
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 40px;
  border: ${(props) =>
    props.state === "default" ? "5px solid #f8f8f8" : "5px solid transparent"};
  margin-bottom: 12px;
  ::after {
    content: "";
    padding-bottom: 100%;
    display: block;
  }
  // &:hover {
  //   transform: scale(1.1);
  //   transform-origin: top left;
  // }
`

export const ContentPaper = styled(Paper)<{ state: "default" | "selected" }>`
  && {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    padding: 16%;
    background-color: ${(props) =>
      props.state === "default" ? "white" : "#FAF5F7"};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const LogoImg = styled.img`
  width: 30%;
  height: 30%;
  max-width: 100px;
  border-radius: 24px;
`

const StockInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const StockName = styled.p`
  color: black;
  font-size: 24px;
  font-weight: Bold;
  margin-bottom: 5%;
`

const StockStatDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const StockPrice = styled.p`
  color: #8a8a8a;
  font-size: 18px;
  margin-right: 10px;
  margin-block: 0px;
`
const PriceChange = styled.p<{ isIncreasing: boolean }>`
  font-size: 14px;
  margin-block: 0px;
  color: ${(props) => (props.isIncreasing ? "#FB6F6F" : "#72A6FA")};
`
