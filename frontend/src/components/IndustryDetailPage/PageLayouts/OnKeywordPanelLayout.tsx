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
import { useEffect, useState } from "react"
import AnalysisSection from "../../StockDetailPage/MainSection/KeywordSection/AnalysisSection"
import AllIncludedStockListArea from "../AllIncludedStockListArea/AllIncludedStockListArea"
import { useRecoilState, useRecoilValue } from "recoil"
import { selectedKeywordState } from "../../../stores/StockDetailAtoms"
import customAxios from "../../../utils/customAxios"
import { accessTokenSelector } from "../../../stores/atoms"
import { useQuery } from "react-query"

const OnKeywordPanelLayout = ({
  changeLayout,
  className,
  industryInfo,
}: LayoutProps) => {
  // 북마크 여부 체크(로그인 상태에서만)
  const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector)
  const axios = customAxios(accessToken, setAccessToken)
  const fetchMyIndustryCheck = ({ queryKey }: any) => {
    const industryId = queryKey[1]
    return axios.get(`industry/stocklist/my/${industryId}`)
  }
  const select = (response: any) => {
    return response.data.data
  }

  const useMyIndustryCheck = (industryId: number) => {
    return useQuery(["myIndustryCheck", industryId], fetchMyIndustryCheck, {
      refetchOnWindowFocus: false,
      select,
      retry: false,
      enabled: !!accessToken,
    })
  }

  const { data: bookmarked } = useMyIndustryCheck(industryInfo.id)

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)

  useEffect(() => {
    setIsBookmarked(bookmarked)
  }, [bookmarked])

  const { id: keywordId, name: keyword } = useRecoilValue(selectedKeywordState)

  return (
    <>
      <Grid item xs={7}>
        <LeftSection className="kwd">
          <ButtonDiv id="btn">
            <button onClick={() => changeLayout("kwd")}>keywordPanel</button>
            <IndustrySelectorToggleBtn
              changeLayout={(mode) => {
                changeLayout(mode)
              }}
              status={className}
              industryName={industryInfo.name}
            />
          </ButtonDiv>
          <LeftSlider className={`kwd ${className}`}>
            <TitleDiv>
              {industryInfo?.name}
              {!!accessToken && (
                <BookmarkBtn
                  isBookmarked={isBookmarked}
                  page="industry"
                  num={industryInfo.id}
                />
              )}
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
          <KeywordPanel keywordId={keywordId} keyword={keyword} />
        </PanelSlider>
      </Grid>
    </>
  )
}

export default OnKeywordPanelLayout
