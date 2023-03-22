import styled from "styled-components"
import MarketCapCard from "./MarketCapCard"

const MarketCapCardList = () => {
  return (
    <CardListDiv>
      <MarketCapCard
        rank={1}
        stockName="삼성전자"
        marketCap={364753712421321}
      />
      <MarketCapCard
        rank={1}
        stockName="삼성전자"
        marketCap={364753712421321}
      />
      <MarketCapCard
        rank={1}
        stockName="삼성전자"
        marketCap={364753712421321}
      />
      <MarketCapCard
        rank={1}
        stockName="삼성전자"
        marketCap={364753712421321}
      />
      <MarketCapCard
        rank={1}
        stockName="삼성전자"
        marketCap={364753712421321}
      />
    </CardListDiv>
  )
}

export default MarketCapCardList

const CardListDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
