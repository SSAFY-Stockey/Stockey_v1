import styled from "styled-components"
import NewsSection from "./NewsSection"
import KeywordChartSection from "./KeywordChartSection"
import KeywordSearchBtn from "./KeywordSearchBtn"
import BookmarkBtn from "../../../common/Bookmark/BookmarkBtn"
import { useRecoilValue, useRecoilState } from "recoil"
import { selectedKeywordState } from "../../../../stores/StockDetailAtoms"
// useQuery
import { useQuery } from "react-query"
import customAxios from "../../../../utils/customAxios"
import { accessTokenSelector } from "../../../../stores/atoms"

const KeywordPanel = () => {
  const { id: keywordId, name: keyword } = useRecoilValue(selectedKeywordState)

  // accesstoken state
  const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector)
  // customAxios
  const axios = customAxios(accessToken, setAccessToken)
  // useQuery: get whether the keyword is bookmarked
  const fetchIsKeywordBookmarked = () => {
    return axios.get(`/keywords/keywordlist/my/${keywordId}`)
  }
  const select = (response: any) => {
    const isBookmarked: boolean = response.data.data
    return isBookmarked
  }
  const { data: isBookmarked } = useQuery(
    "isKeywordBookmarked",
    fetchIsKeywordBookmarked,
    {
      enabled: !!accessToken,
      select,
      refetchOnWindowFocus: true,
    }
  )
  return (
    <PanelWrapper>
      <TopRow>
        <PanelTitle>
          {keyword}
          {isBookmarked !== undefined && (
            <BookmarkBtn
              isBookmarked={isBookmarked}
              page="keyword"
              num={keywordId}
            />
          )}
        </PanelTitle>
        <KeywordSearchBtn keyword={keyword} />
      </TopRow>

      <PanelSubTitle>키워드 등장 추이 보기</PanelSubTitle>
      <KeywordChartSection />
      <PanelSubTitle id="newsRef">
        {keyword} 관련 기사 한 눈에 보기
      </PanelSubTitle>
      <NewsSection />
    </PanelWrapper>
  )
}

export default KeywordPanel

export const PanelWrapper = styled.div`
  background-color: #faf5f7;
  border-radius: 30px 0 0 0;
  display: flex;
  padding: 12px 24px 24px;
  flex-direction: column;
  align-items: left;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  position: relative;

  /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`
export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  margin-bottom: 5%;
`

export const PanelTitle = styled.p`
  font-size: 2.6rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin-bottom: 0;
`
export const PanelSubTitle = styled.p`
  font-size: 2.2rem;
  font-weight: bold;
`
