import Grid from "@mui/material/Grid"
import {
  ButtonDiv,
  LeftSection,
  LeftSlider,
  TitleDiv,
  RightSlider,
  SelectorSlider,
  RightSection,
} from "./AnimatedComponent"
import IndustrySelectorToggleBtn from "../IndustrySelectorToggleBtn"
import BookmarkBtn from "../../common/Bookmark/BookmarkBtn"
import IndustryOverall from "../IndustryOverall/IndustryOverall"
import IndustryMarketCapLineChart from "../IndustryMarketCapLineChart/IndustryMarketCapLineChart"
import IndustryBubbleChart from "../IndustryBubbleChart/IndustryBubbleChart"
import { LayoutProps } from "./DefaultLayout"
import IndustrySelector from "../../IndustryMainPage/IndustrySelector/IndustrySelector"
import { useMyIndustryCheck } from "../../../hooks/useMyIndustryCheck"
import { useEffect, useState } from "react"
import AnalysisSection from "../../StockDetailPage/MainSection/KeywordSection/AnalysisSection"
import AllIncludedStockListArea from "../AllIncludedStockListArea/AllIncludedStockListArea"

const OnIndustrySelectorLayout = ({
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
      <Grid item xs={12} marginLeft={4.5}>
        <ButtonDiv id="btn">
          <button onClick={(e) => changeLayout(e, "kwd")}>keywordPanel</button>
          <IndustrySelectorToggleBtn
            changeLayout={(e, mode) => {
              changeLayout(e, mode)
            }}
            status={className}
            industryName={industryInfo.name}
          />
        </ButtonDiv>
      </Grid>
      <Grid item xs={5}>
        <LeftSection className="sel">
          <SelectorSlider className={`sel ${className}`}>
            <IndustrySelector />
          </SelectorSlider>
        </LeftSection>
      </Grid>
      <Grid item xs={7}>
        <RightSection id="right" className="sel">
          <LeftSlider className={`sel ${className}`}>
            <TitleDiv>
              {industryInfo?.name}
              <BookmarkBtn
                isBookmarked={isBookmarked}
                page="industry"
                num={industryInfo.id}
              />
            </TitleDiv>
          </LeftSlider>
          <LeftSlider className={`sel ${className}`}>
            <IndustryOverall industryInfo={industryInfo} />
          </LeftSlider>
          <LeftSlider className={`sel ${className}`}>
            <IndustryMarketCapLineChart industryId={industryInfo.id} />
          </LeftSlider>
          <LeftSlider className={`sel ${className}`}>
            <AnalysisSection />
          </LeftSlider>
          <RightSlider className={`sel ${className}`}>
            <IndustryBubbleChart industryId={industryInfo?.id} />
          </RightSlider>
          <RightSlider className={`sel ${className}`}>
            <AllIncludedStockListArea
              industryId={industryInfo.id}
              industryName={industryInfo.name}
            />
          </RightSlider>
        </RightSection>
      </Grid>
    </>
  )
}

export default OnIndustrySelectorLayout
