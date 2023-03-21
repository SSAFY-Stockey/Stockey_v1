import { Paper } from "@mui/material"
import styled from "styled-components"

interface Props {
  keyphrase: string
  backgroundColor: string
  rank: number
}

const KeyphraseListItem = ({ keyphrase, backgroundColor, rank }: Props) => {
  return (
    <StyledPaper backgroundColor={backgroundColor} rank={rank}>
      <p>{keyphrase}</p>
    </StyledPaper>
  )
}

export default KeyphraseListItem

const StyledPaper = styled(Paper)<{ backgroundColor: string; rank: number }>`
  && {
    border-radius: 100px;
    background-color: ${(props) => props.backgroundColor};
    text-align: center;
    vertical-align: middle;
    padding: 5%;
    margin-right: -3%;
    z-index: ${(props) => 4 - props.rank};
    font-weight: bold;
    font-size: 1.35rem;
  }
`
