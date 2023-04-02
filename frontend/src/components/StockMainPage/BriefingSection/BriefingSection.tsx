import KeywordBoard from "./KeywordBoard"
import MyStockList from "./MyStockList"
import Grid from "@mui/material/Grid"
import { useState } from "react"

const BriefingSection = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0)
  const selectHandler = {
    selectedIdx,
    setSelectedIdx,
  }
  return (
    <Grid container>
      <Grid item xs={8}>
        <KeywordBoard {...selectHandler} />
      </Grid>
      <Grid item xs={3} pl={4} pr={5}>
        <MyStockList {...selectHandler} />
      </Grid>
    </Grid>
  )
}

export default BriefingSection
