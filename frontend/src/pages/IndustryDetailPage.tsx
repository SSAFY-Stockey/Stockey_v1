import styled from "styled-components"
import IndustryBubbleChart from "../components/IndustryDetailPage/IndustryBubbleChart/IndustryBubbleChart"

const IndustryDetailPage = () => {
  return (
    <PageWrapper>
      <div>IndustryDetailPage</div>
      <IndustryBubbleChart />
    </PageWrapper>
  )
}

export default IndustryDetailPage

const PageWrapper = styled.div`
  display: flex;
  padding: 24px 36px 36px;
  flex-direction: column;
`
