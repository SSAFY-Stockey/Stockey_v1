import styled from "styled-components"
import KeyphraseListItem from "./KeyphraseListItem"

const KeyphraseList = () => {
  const pinkColors: string[] = ["#FF6F9D", "#FF96B8", "#FFB3CB", "#FFD8E5"]
  return (
    <StyledDiv>
      {pinkColors.map((color, index) => {
        return (
          <KeyphraseListItem
            keyphrase="금리 인상"
            backgroundColor={color}
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
