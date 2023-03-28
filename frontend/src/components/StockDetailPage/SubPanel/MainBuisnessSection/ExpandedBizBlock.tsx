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
    position: relative;
    width: fit-content;
    height: 130px;
    border-radius: 30px;
    background-color: var(--custom-purple-3);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline: 10% 15%;
    text-align: left;
    box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.2);
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
