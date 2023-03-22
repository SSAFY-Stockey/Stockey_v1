import HighlyRelatedStockSwitch from "./HighlyRelatedStockSwitch"
import styled from "styled-components"

const HighlyRelatedStockList = () => {
  return (
    <StockListSection>
      <Title>상관관계가 높은 종목</Title>
      <BtnsContainer>
        <HighlyRelatedStockSwitch stockName="네이버" />
        <HighlyRelatedStockSwitch stockName="카카오" />
        <HighlyRelatedStockSwitch stockName="삼성바이오로직스" />
        <HighlyRelatedStockSwitch stockName="LG전자" />
      </BtnsContainer>
    </StockListSection>
  )
}

export default HighlyRelatedStockList

const StockListSection = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
`
const BtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
`
