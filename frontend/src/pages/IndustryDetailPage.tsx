import styled from "styled-components"
import IndustryBubbleChart from "../components/IndustryDetailPage/IndustryBubbleChart/IndustryBubbleChart"
import IndustryCandleChart from "../components/IndustryDetailPage/IndustryCandleChart/IndustryCandleChart"

const IndustryDetailPage = () => {
  return (
    <PageWrapper>
      <div>BUTTON</div>
      <ContentWrapper>
        <ContentBox>
          <IndustryCandleChart />
          <div>연관 키워드 차트</div>
        </ContentBox>
        <ContentBox>
          <IndustryBubbleChart />
          <div>전체 종목 리스트</div>
        </ContentBox>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default IndustryDetailPage

const PageWrapper = styled.div`
  display: flex;
  padding: 24px 36px 36px;
  flex-direction: column;
  gap: 24px;
`

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 36px;
`

const ContentBox = styled.div`
  width: calc((100% - 36px) / 2);
  display: flex;
  flex-direction: column;
  gap: 36px;
`
