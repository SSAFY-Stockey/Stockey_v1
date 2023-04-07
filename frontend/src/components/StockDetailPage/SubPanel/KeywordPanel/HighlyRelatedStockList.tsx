import { Grid } from "@mui/material"
import HighlyRelatedStockSwitch from "./HighlyRelatedStockSwitch"
import styled from "styled-components"

const HighlyRelatedStockList = () => {
  const colors: string[] = ["pink", "orange", "yellow", "green"]
  return (
    <StockListSection>
      <Title>빅스텝과 상관관계가 높은 종목들이에요</Title>
      <BtnsContainer container spacing={1}>
        <Grid item>
          <HighlyRelatedStockSwitch stockName="네이버" color={colors[0]} />
        </Grid>
        <Grid item>
          <HighlyRelatedStockSwitch stockName="카카오" color={colors[1]} />
        </Grid>
        <Grid item>
          <HighlyRelatedStockSwitch
            stockName="삼성바이오로직스"
            color={colors[2]}
          />
        </Grid>
        <Grid item>
          <HighlyRelatedStockSwitch stockName="LG전자" color={colors[3]} />
        </Grid>
      </BtnsContainer>
    </StockListSection>
  )
}

export default HighlyRelatedStockList

const StockListSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
  line-height: 50px;
`
const BtnsContainer = styled(Grid)`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-evenly;
  // align-items: stretch;
`
