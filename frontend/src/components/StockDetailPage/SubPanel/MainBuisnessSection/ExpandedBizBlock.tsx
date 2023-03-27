import { BuisessType, BuisnessTypeDiv, BuisnessIcon } from "./DefaultBizBlock"
import styled from "styled-components"
import Paper from "@mui/material/Paper"

interface Props {
  type: string
}

const ExpandedBizBlock = ({ type }: Props) => {
  return (
    <ContentPaper elevation={0}>
      <BuisnessTypeDiv>
        <BuisnessIcon src={`/businessLogos/${type}.png`} alt="buisness icon" />
        <BuisessType>{type}</BuisessType>
      </BuisnessTypeDiv>
      <BuisnessDetailDiv>
        <BuisnessDetail># 온라인 검색포털</BuisnessDetail>
        <BuisnessDetail># 모바일 메신저 LINE</BuisnessDetail>
      </BuisnessDetailDiv>
    </ContentPaper>
  )
}

export default ExpandedBizBlock

export const ContentPaper = styled(Paper)`
  && {
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    width: fit-content;
    height: 100%;
    border-radius: 30px;
    background-color: var(--custom-purple-3);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    padding-inline: 8% 5%;
  }
`

export const BuisnessDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 10px;
  margin-left: 20px;
`

export const BuisnessDetail = styled.p`
  font-size: 2.2rem;
  white-space: nowrap;
  margin: 0;
  // margin-inline: 5px;
  padding-inline: 10px 5px;
  line-height: 2;
`
