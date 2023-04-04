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

const OnIndustrySelectorLayout = ({
  changeLayout,
  className,
  industryInfo,
}: LayoutProps) => {
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
          />
        </ButtonDiv>
      </Grid>
      <Grid item xs={5}>
        <LeftSection>
          <SelectorSlider className={`sel ${className}`}>
            <IndustrySelector />
          </SelectorSlider>
        </LeftSection>
      </Grid>
      <Grid item xs={7}>
        <RightSection id="right">
          <LeftSlider className={`sel ${className}`}>
            <TitleDiv>
              {industryInfo?.name}
              <BookmarkBtn isBookmarked={false} page="stock" num={1} />
            </TitleDiv>
          </LeftSlider>
          <LeftSlider className={`sel ${className}`}>
            <IndustryOverall />
          </LeftSlider>
          <LeftSlider className={`sel ${className}`}>
            <IndustryMarketCapLineChart industryId={industryInfo.id} />
          </LeftSlider>
          <LeftSlider className={`sel ${className}`}>
            <div>연관 키워드 차트</div>
          </LeftSlider>
          <RightSlider className={`sel ${className}`}>
            <IndustryBubbleChart industryId={industryInfo?.id} />
          </RightSlider>
          <RightSlider className={`sel ${className}`}>
            <div>전체 종목 리스트</div>
          </RightSlider>
        </RightSection>
      </Grid>
    </>
  )
}

export default OnIndustrySelectorLayout
