import styled from "styled-components"

interface Props {
  keyphrase: string
  backgroundColor: string
  rank: number
}

const KeyphraseListItem = ({ keyphrase, backgroundColor, rank }: Props) => {
  return (
    <KeyphraseBubble backgroundColor={backgroundColor} rank={rank}>
      <p>{keyphrase}</p>
    </KeyphraseBubble>
  )
}

export default KeyphraseListItem

const KeyphraseBubble = styled.div<{ backgroundColor: string; rank: number }>`
  && {
    border-radius: 200px;
    background-color: ${(props) => props.backgroundColor};
    text-align: center;
    padding: 5%;
    margin-right: -2.5%;
    z-index: ${(props) => 4 - props.rank};
    font-weight: bold;
    font-size: 1.8rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & > p {
      margin: 0;
    }
  }
`
