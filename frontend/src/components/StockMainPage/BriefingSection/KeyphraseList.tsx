import styled from "styled-components"
import KeyphraseListItem from "./KeyphraseListItem"

interface Props {
  focused: number
}

const KeyphraseList = ({ focused }: Props) => {
  const colors: string[] = ["orange", "pink", "purple"]
  const keyphrases = ["금리 인상", "대출 규제", "부동산 하락", "연준 발표"]
  return (
    <StyledDiv>
      {keyphrases.map((phrase, index) => {
        return (
          <KeyphraseListItem
            keyphrase={phrase}
            backgroundColor={`var(--custom-${colors[focused]}-${index + 1})`}
            rank={index + 1}
          />
        )
      })}
    </StyledDiv>
  )
}

export default KeyphraseList

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10% 5%;
  width: 100%;
  background-color: white;
  border-radius: 36px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 1.5em solid transparent;
    border-top-color: #ffffff;
    border-bottom: 0;
    margin-left: -1.5em;
    margin-bottom: -1.5em;
  }
`
