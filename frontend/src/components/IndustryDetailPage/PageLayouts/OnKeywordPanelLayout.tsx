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
import KeywordPanel from "../../StockDetailPage/KeywordPanel/KeywordPanel"
import { LayoutProps } from "./DefaultLayout"

const OnKeywordPanelLayout = ({
  changeLayout,
  className,
  industryInfo,
}: LayoutProps) => {
  return (
    <>
      <Grid item xs={7}>
        <LeftSection>
          <ButtonDiv id="btn">
            <button onClick={(e) => changeLayout(e, "kwd")}>
              keywordPanel
            </button>
            <IndustrySelectorToggleBtn
              changeLayout={(e, mode) => {
                changeLayout(e, mode)
              }}
              status={className}
            />
          </ButtonDiv>
          <LeftSlider className={`kwd ${className}`}>
            <TitleDiv>
              {industryInfo?.name}
              <BookmarkBtn isBookmarked={false} page="stock" />
            </TitleDiv>
          </LeftSlider>
          <LeftSlider className={`kwd ${className}`}>
            <IndustryOverall />
          </LeftSlider>
          <LeftSlider className={`kwd ${className}`}>
            <IndustryMarketCapLineChart industryId={industryInfo.id} />
          </LeftSlider>
          <LeftSlider className={`kwd ${className}`}>
            <div>연관 키워드 차트</div>
          </LeftSlider>
          <RightSlider className={`kwd ${className}`}>
            <IndustryBubbleChart industryId={industryInfo?.id} />
          </RightSlider>
          <RightSlider className={`kwd ${className}`}>
            <div>전체 종목 리스트</div>
          </RightSlider>
        </LeftSection>
      </Grid>
      <Grid item xs={5}>
        <PanelSlider className={className}>
          <KeywordPanel keyword="빅스텝" />
        </PanelSlider>
      </Grid>
    </>
  )
}

export default OnKeywordPanelLayout
