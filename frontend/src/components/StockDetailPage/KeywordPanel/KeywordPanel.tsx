import styled from "styled-components"
import Grid from "@mui/material/Grid"
import KeywordDefinition from "./KeywordDefinition"
import NewsSummaryList from "./NewsSummaryList"
import NewsList from "./NewsList"
import KeywordChartSection from "./KeywordChartSection"

interface Props {
  keyword: string
}

const KeywordPanel = ({ keyword }: Props) => {
  return (
    <PanelWrapper>
      <PanelTitle>{keyword}</PanelTitle>
      <KeywordDefinition />
      <KeywordChartSection />
      <NewsSummaryList />
      <NewsList />
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
