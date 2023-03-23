import { Grid } from "@mui/material"
import NewsSummaryBtn from "./NewsSummaryBtn"
import { useState } from "react"

const NewsSummaryList = () => {
  const keyphrases: string[] = [
    "금리 인상",
    "대출 규제",
    "부동산 하락",
    "연준 발표",
  ]
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <Grid container spacing={0.5} marginY={3}>
      {keyphrases.map((keyphrase, index) => (
        <Grid item xs={6}>
          <NewsSummaryBtn
            keyphrase={keyphrase}
            setSelectedIndex={setSelectedIndex}
            index={index}
            className={selectedIndex === index ? "selected" : "not-selected"}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default NewsSummaryList
