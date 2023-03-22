import styled from "styled-components"

interface CardProps {
  rank: number
  stockName: string
  marketCap: number
}

const MarketCapCard = ({ rank, stockName, marketCap }: CardProps) => {
  const makePriceFormat = (num: number) => {
    let roundedNum = Math.round(num / 100000000)
    let result = "원"
    let unitWord = "억"
    while (roundedNum > 0) {
      let chunk = roundedNum % 10000
      result =
        chunk.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
        unitWord +
        result
      roundedNum = Math.floor(roundedNum / 10000)
      unitWord = "조 "
    }
    return result
  }

  const formattedMarketCap = makePriceFormat(marketCap)

  return (
    <CardDiv>
      <RankDiv>{rank}</RankDiv>
      <StockNameDiv>{stockName}</StockNameDiv>
      <MarketCapDiv>{formattedMarketCap}</MarketCapDiv>
    </CardDiv>
  )
}

export default MarketCapCard

const CardDiv = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  gap: 12px;

  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.1px;

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`

const RankDiv = styled.div`
  width: 2.4rem;
  height: auto;
  font-size: 1.8rem;
  text-align: center;
`

const StockNameDiv = styled.div`
  flex-grow: 1;
  font-size: 1.4rem;
`

const MarketCapDiv = styled.div`
  flex-grow: 1;
  font-size: 1.4rem;
  text-align: right;
`
