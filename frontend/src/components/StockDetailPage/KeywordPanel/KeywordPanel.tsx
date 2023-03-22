import styled from "styled-components"
import KeywordDefinition from "./KeywordDefinition"

interface Props {
  keyword: string
}

const KeywordPanel = ({ keyword }: Props) => {
  return (
    <StyledPanel>
      <StyledTitle>{keyword}</StyledTitle>
      <KeywordDefinition />
    </StyledPanel>
  )
}

export default KeywordPanel

const StyledPanel = styled.div`
  background-color: #faf5f7;
  border-radius: 30px 0 0 0;
  display: flex;
  padding: 12px 24px 24px;
  flex-direction: column;
  align-items: left;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`
const StyledTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
`
