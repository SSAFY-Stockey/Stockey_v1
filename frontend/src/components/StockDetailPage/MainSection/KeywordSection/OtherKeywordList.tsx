import KeywordListItem from "./KeywordListItem"
import styled from "styled-components"
import { Grid } from "@mui/material"

const OtherKeywordList = () => {
  return (
    <KeywordListWrapper container rowSpacing={6}>
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
  padding: 0px 36px 50px;
  border-radius: 0 0 24px 24px;
  background-color: black;
  background-color: #fffefb;
  width: 100% !important;
  margin: -14px 0 0 0 !important;
  position: relative;
  z-index: 1;
`
