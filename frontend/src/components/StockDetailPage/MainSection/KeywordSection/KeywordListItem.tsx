import styled from "styled-components"
import GageBar from "./GageBar"
import GageChip from "./GageChip"
import { Grid } from "@mui/material"

interface Props {
  rank: number
  keyword: string
  percentage: number
}

const KeywordListItem = ({ rank, keyword, percentage }: Props) => {
  return (
    <Grid container>
      <Grid item xs={1}>
        <ItalicSpan>{rank}</ItalicSpan>
      </Grid>
      <Grid item xs={3}>
        <Span>{keyword}</Span>
      </Grid>
      <Grid item xs={5} display={"flex"}>
        <GageBar
          gage={percentage}
          height="30%"
          color="#68E3BE"
          backgroundColor="#D0F1E8"
          animation
        />
      </Grid>
      <Grid item xs={2} ml={4}>
        <GageChip gage={percentage} color="#68E3BE" backgroundColor="#F1FFFB" />
      </Grid>
    </Grid>
  )
}

export default KeywordListItem

const Span = styled.span`
  font-size: 2.2rem;
  font-weight: bold;
  white-space: nowrap;
  color: #49454f;
`

const ItalicSpan = styled(Span)`
  font-size: 2.4rem;
  font-style: italic;
`
