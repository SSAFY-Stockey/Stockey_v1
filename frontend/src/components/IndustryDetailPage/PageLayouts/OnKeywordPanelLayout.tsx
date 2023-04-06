import Grid from "@mui/material/Grid"
import {
  ButtonDiv,
  LeftSection,
  LeftSlider,
  TitleDiv,
  RightSlider,
  PanelSlider,
} from "./AnimatedComponent"
import IndustrySelectorToggleBtn from "../IndustrySelectorToggleBtn"
import BookmarkBtn from "../../common/Bookmark/BookmarkBtn"
import IndustryOverall from "../IndustryOverall/IndustryOverall"
import IndustryMarketCapLineChart from "../IndustryMarketCapLineChart/IndustryMarketCapLineChart"
import IndustryBubbleChart from "../IndustryBubbleChart/IndustryBubbleChart"
import KeywordPanel from "../../StockDetailPage/SubPanel/KeywordPanel/KeywordPanel"
import { LayoutProps } from "./DefaultLayout"
import { useMyIndustryCheck } from "../../../hooks/useMyIndustryCheck"
import { useEffect, useState } from "react"
import AnalysisSection from "../../StockDetailPage/MainSection/KeywordSection/AnalysisSection"
import AllIncludedStockListArea from "../AllIncludedStockListArea/AllIncludedStockListArea"

const OnKeywordPanelLayout = ({
  changeLayout,
  className,
  industryInfo,
}: LayoutProps) => {
  const { data: bookmarked } = useMyIndustryCheck(industryInfo.id)
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)
  useEffect(() => {
    setIsBookmarked(bookmarked)
  }, [bookmarked])
  return (
    <>
      <Grid item xs={7}>
        <LeftSection className="kwd">
          <ButtonDiv id="btn">
            <button onClick={(e) => changeLayout(e, "kwd")}>
              keywordPanel
            </button>
            <IndustrySelectorToggleBtn
              changeLayout={(e, mode) => {
                changeLayout(e, mode)
              }}
              status={className}
              industryName={industryInfo.name}
            />
          </ButtonDiv>
          <LeftSlider className={`kwd ${className}`}>
            <TitleDiv>
              {industryInfo?.name}
              <BookmarkBtn
                isBookmarked={isBookmarked}
                page="industry"
                num={industryInfo.id}
              />
            </TitleDiv>
          </LeftSlider>
          <LeftSlider className={`kwd ${className}`}>
            <IndustryOverall industryInfo={industryInfo} />
          </LeftSlider>
          <LeftSlider className={`kwd ${className}`}>
            <IndustryMarketCapLineChart industryId={industryInfo?.id} />
          </LeftSlider>
          <LeftSlider className={`kwd ${className}`}>
            <AnalysisSection />
          </LeftSlider>
          <RightSlider className={`kwd ${className}`}>
            <IndustryBubbleChart industryId={industryInfo?.id} />
          </RightSlider>
          <RightSlider className={`kwd ${className}`}>
            <AllIncludedStockListArea
              industryId={industryInfo.id}
              industryName={industryInfo.name}
            />
          </RightSlider>
        </LeftSection>
      </Grid>
      <Grid item xs={5}>
        <PanelSlider className={`kwd ${className}`}>
          <KeywordPanel keywordId={101} keyword="금융" />
        </PanelSlider>
      </Grid>
    </>
  )
}

export default OnKeywordPanelLayout
