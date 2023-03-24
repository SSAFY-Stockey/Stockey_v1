import styled from "styled-components"
import Grid from "@mui/material/Grid"
import KeywordDefinition from "./KeywordDefinition"
import NewsSection from "./NewsSection"
import KeywordChartSection from "./KeywordChartSection"

interface Props {
  keyword: string
}

const KeywordPanel = ({ keyword }: Props) => {
  return (
    <PanelWrapper>
      <PanelTitle>{keyword}</PanelTitle>
      <KeywordDefinition />
      <PanelSubTitle>키워드 등장 추이 보기</PanelSubTitle>
      <KeywordChartSection />
      <PanelSubTitle>{keyword} 관련 기사 한 눈에 보기</PanelSubTitle>
      <NewsSection />
    </PanelWrapper>
  )
}

export default KeywordPanel

const PanelWrapper = styled.div`
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
const PanelTitle = styled.p`
  font-size: 2.6rem;
  font-weight: bold;
  letter-spacing: 0.4rem;
`
const PanelSubTitle = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
`
