import styled from "styled-components"

import StockBlock from "./StockBlock"
const MyStockList = () => {
  return (
    <StyledDiv>
      <StockBlock
        companyLogo="naver"
        companyName="네이버"
        currentPrice={59800}
        priceChange={0.17}
      />
      <StockBlock
        companyLogo="naver"
        companyName="네이버"
        currentPrice={59800}
        priceChange={0.17}
      />
      <StockBlock
        companyLogo="naver"
        companyName="네이버"
        currentPrice={59800}
        priceChange={0.17}
      />
    </StyledDiv>
  )
}

export default MyStockList

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`
