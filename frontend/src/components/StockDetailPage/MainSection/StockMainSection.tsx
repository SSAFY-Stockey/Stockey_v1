import styled from "styled-components"
import { PanelTitle, PanelSubTitle } from "../KeywordPanel/KeywordPanel"
import BookmarkBtn from "../../common/Bookmark/BookmarkBtn"
import StockPriceChart from "./StockPriceChart"
import KeywordBarGraph from "../../StockMainPage/BriefingSection/KeywordBarGraph"

const StockMainSection = () => {
  return (
    <SectionWrapper>
      <PanelTitle>
        네이버
        <BookmarkBtn isBookmarked={false} page="stock" />
      </PanelTitle>

      <PanelSubTitle>
        <HighlightedSpan>키워드</HighlightedSpan>로 보는 주가 차트
      </PanelSubTitle>
      <StockPriceChart />
      <PanelSubTitle>
        뉴스 기사 속 핵심
        <HighlightedSpan>키워드</HighlightedSpan>로 확인하기
      </PanelSubTitle>
      <KeywordBarGraph />
    </SectionWrapper>
  )
}

export default StockMainSection

const SectionWrapper = styled.div`
  display: flex;
  padding: 12px 24px 24px;
  flex-direction: column;
  align-items: left;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`

const HighlightedSpan = styled.span`
  color: var(--custom-mint);
  font-weight
`
