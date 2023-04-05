import Grid from "@mui/material/Grid"
import {
  ButtonDiv,
  LeftSection,
  LeftSlider,
  TitleDiv,
  RightSection,
  RightSlider,
} from "./AnimatedComponent"
import IndustrySelectorToggleBtn from "../IndustrySelectorToggleBtn"
import BookmarkBtn from "../../common/Bookmark/BookmarkBtn"
import IndustryOverall from "../IndustryOverall/IndustryOverall"
import IndustryMarketCapLineChart from "../IndustryMarketCapLineChart/IndustryMarketCapLineChart"
import IndustryBubbleChart from "../IndustryBubbleChart/IndustryBubbleChart"
import { useMyIndustryCheck } from "../../../hooks/useMyIndustryCheck"
import { useEffect, useState } from "react"

export interface LayoutProps {
  changeLayout: (e: React.MouseEvent<HTMLElement>, toggleMode: string) => void
  className: string
  industryInfo: {
    id: number
    name: string
    description: string | null
    category: string
  }
}

const DefaultLayout = ({
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
          />
        </ButtonDiv>
      </Grid>
      <Grid item xs={7}>
        <LeftSection id="left">
          <LeftSlider className={`def ${className}`}>
            <TitleDiv>
              {industryInfo?.name}
              <BookmarkBtn
                isBookmarked={isBookmarked}
                page="industry"
                num={industryInfo.id}
              />
            </TitleDiv>
          </LeftSlider>
          <LeftSlider className={`def ${className}`}>
            <IndustryOverall industryInfo={industryInfo} />
          </LeftSlider>
          <LeftSlider className={`def ${className}`}>
            <IndustryMarketCapLineChart industryId={industryInfo.id} />
          </LeftSlider>
          <LeftSlider className={`def ${className}`}>
            <div>연관 키워드 차트</div>
          </LeftSlider>
        </LeftSection>
      </Grid>
      <Grid item xs={5}>
        <RightSection>
          <RightSlider className={`def ${className}`}>
            <IndustryBubbleChart industryId={industryInfo?.id} />
          </RightSlider>
          <RightSlider className={`def ${className}`}>
            <div>전체 종목 리스트</div>
          </RightSlider>
        </RightSection>
      </Grid>
    </>
  )
}

export default DefaultLayout
