import KeywordBarGraph from "./KeywordBarGraph"
import KeyphraseList from "./KeyphraseList"
import styled from "styled-components"

const focusedIndex: number = Math.floor(Math.random() * (2 - 0 + 1)) + 0
console.log(focusedIndex)
const KeywordBoard = () => {
  return (
    <StyledDiv>
      <StyledTitle>
        <StyledSpan>키워드</StyledSpan>로 보는 이번 주 네이버 소식💌
      </StyledTitle>
      <KeyphraseList focused={focusedIndex} />
      <KeywordBarGraph />
    </StyledDiv>
  )
}

export default KeywordBoard

const StyledDiv = styled.div`
  background-color: #faf5f7;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0% 3%;
  border-radius: 24px;
  height: 100%;
`
const StyledTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
`

const StyledSpan = styled.span`
  color: #ff6f9d;
`
