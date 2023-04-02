import styled from "styled-components"
import NewsSection from "./NewsSection"
import KeywordChartSection from "./KeywordChartSection"
import KeywordSearchBtn from "./KeywordSearchBtn"
import BookmarkBtn from "../../common/Bookmark/BookmarkBtn"

interface Props {
  keyword: string
}

export const triggerScroll = (elementId: string) => {
  console.log("triggerScroll")
  const scrollRef = document.getElementById(elementId)
  console.log(scrollRef)
  scrollRef?.scrollIntoView({ behavior: "smooth" })
}
const KeywordPanel = ({ keyword }: Props) => {
  return (
    <PanelWrapper>
      <TopRow>
        <PanelTitle>
          {keyword}
          <BookmarkBtn isBookmarked={true} page="keyword" />
        </PanelTitle>
        <KeywordSearchBtn keyword={keyword} />
      </TopRow>

      <PanelSubTitle>키워드 등장 추이 보기</PanelSubTitle>
      <KeywordChartSection />
      <PanelSubTitle id="newsRef">
        {keyword} 관련 기사 한 눈에 보기
      </PanelSubTitle>
      <NewsSection triggerScroll={() => triggerScroll("newsRef")} />
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
