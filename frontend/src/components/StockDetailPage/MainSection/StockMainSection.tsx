import styled from "styled-components"
import { PanelTitle } from "../SubPanel/KeywordPanel/KeywordPanel"
import BookmarkBtn from "../../common/Bookmark/BookmarkBtn"
import PriceSection from "./PriceSection/PriceSection"
import AnalysisSection from "./KeywordSection/AnalysisSection"
import { Grid } from "@mui/material"
import { useRecoilValue } from "recoil"
import { stockDetailState } from "../../../stores/StockDetailAtoms"

const StockMainSection = () => {
  const stockDetail = useRecoilValue(stockDetailState)

  return (
    <SectionWrapper container rowSpacing={3}>
      <Grid item xs={12}>
        <PanelTitle>
          {stockDetail?.name}
          <BookmarkBtn
            isBookmarked={false}
            page="stock"
            num={stockDetail?.id}
          />
        </PanelTitle>
      </Grid>
      <Grid item xs={12} id="priceChartRef">
        <PriceSection />
      </Grid>
      <Grid item xs={12}>
        <AnalysisSection />
      </Grid>
    </SectionWrapper>
  )
}

export default StockMainSection

const SectionWrapper = styled(Grid)`
  // display: flex;
  padding: 12px 24px 24px;
  // flex-direction: column;
  // align-items: left;
  // width: 100%;
  // height: 100%;
  overflow-y: scroll;

  /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`
