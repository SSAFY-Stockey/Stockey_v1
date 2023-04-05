import CapitalAnalysisCard from "./CapitalAnalysisCard"
import PriceAnalysisCard from "./PriceAnalysisCard"
import LikeAnalysisCard from "./LikeAnalysisCard"
import { Grid } from "@mui/material"

const ComparingAnalysisList = () => {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <CapitalAnalysisCard
          stockName="NAVER"
          industry="IT"
          industryTotal={100}
          industryRank={1}
        />
      </Grid>
      <Grid item>
        <PriceAnalysisCard
          stockName="NAVER"
          industry="IT"
          industryAvgChangeRate={0.0073933247}
          changeRate={-0.00527705}
        />
      </Grid>
      <Grid item>
        <LikeAnalysisCard likeRank={0} industry="IT" industryTotal={100} />
      </Grid>
    </Grid>
  )
}

export default ComparingAnalysisList
