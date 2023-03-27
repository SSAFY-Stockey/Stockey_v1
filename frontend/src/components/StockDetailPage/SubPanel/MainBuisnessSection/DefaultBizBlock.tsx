import { useState } from "react"
import styled from "styled-components"
import Paper from "@mui/material/Paper"

interface Props {
  type: string
}

const DefaultBizBlock = ({ type }: Props) => {
  return (
    <GradientBorderBlock>
      <ContentPaper elevation={0}>
        <BuisnessTypeDiv>
          <BuisnessIcon
            src={`/businessLogos/${type}.png`}
            alt="buisness icon"
          />
          <BuisessType>{type}</BuisessType>
        </BuisnessTypeDiv>
        {}
      </ContentPaper>
    </GradientBorderBlock>
  )
}

export default DefaultBizBlock

export const GradientBorderBlock = styled.div`
  position: relative;
  width: 100%;
  max-width: 170px;
  min-width: 130px;
  background-image: linear-gradient(#faf5f7, #faf5f7),
    linear-gradient(130deg, #99c2ff 0%, #ffa7d1 100%);

  background-origin: border-box;
  background-clip: content-box, border-box;
  border: 5px solid transparent;
  border-radius: 50px;
  ::after {
    content: "";
    padding-bottom: 100%;
    display: block;
  }
`

export const ContentPaper = styled(Paper)`
  && {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    width: fit-content;
    height: 100%;
    border-radius: 45px;
    padding: 16%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`
export const BuisnessTypeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
`
export const BuisessType = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
`
export const BuisnessIcon = styled.img`
  width: 100%;
`
