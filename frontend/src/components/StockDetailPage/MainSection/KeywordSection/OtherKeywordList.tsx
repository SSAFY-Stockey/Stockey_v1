import KeywordListItem from "./KeywordListItem"
import styled from "styled-components"
import { Grid } from "@mui/material"

const OtherKeywordList = () => {
  return (
    <KeywordListWrapper container spacing={6}>
      <Grid item xs={12}>
        <KeywordListItem rank={4} keyword="연준" percentage={24} />
      </Grid>
      <Grid item xs={12}>
        <KeywordListItem rank={5} keyword="인플레이션" percentage={19} />
      </Grid>
      <Grid item xs={12}>
        <KeywordListItem rank={6} keyword="클라우드" percentage={15} />
      </Grid>
    </KeywordListWrapper>
  )
}

export default OtherKeywordList

const KeywordListWrapper = styled(Grid)`
  padding: 36px;
  border-radius: 35px 35px 0 0;
  // background-color: #fffefb;
  // background-color: var(--custom-black);
  // z-index: 1;
  // width: 100%;
`
