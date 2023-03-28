import styled from "@emotion/styled"
import MarketCapCard from "./MarketCapCard"
import { useEffect, useState } from "react"
import { TransitionGroup } from "react-transition-group"

interface CardListProps {
  industryName: string
}

interface StockType {
  rank: number
  name: string
  marketCap: number
}

const MarketCapCardList = ({ industryName }: CardListProps) => {
  const [stockCardList, setStockCardList] = useState<JSX.Element[] | null>(null)

  useEffect(() => {
    const stocks = dummyData.filter(
      (data) => data.industryName === industryName
    )[0].stocks
    setStockCardList(
      stocks.map((stock) => (
        <MarketCapCard
          key={industryName + "-" + stock.name}
          rank={stock.rank}
          stockName={stock.name}
          marketCap={stock.marketCap}
        />
      ))
    )
  }, [industryName])

  return <CardListWrapper>{stockCardList}</CardListWrapper>
}

export default MarketCapCardList

const CardListWrapper = styled(TransitionGroup)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
})

const dummyData = [
  {
    industryName: "전체",
    stocks: [
      {
        rank: 1,
        name: "삼성전자",
        marketCap: 364753712421321,
      },
      {
        rank: 2,
        name: "애플",
        marketCap: 234567890000000,
      },
      {
        rank: 3,
        name: "구글",
        marketCap: 123456778900000,
      },
      {
        rank: 4,
        name: "테슬라",
        marketCap: 36475371242132,
      },
      {
        rank: 5,
        name: "아마존",
        marketCap: 364753712421,
      },
    ],
  },
  {
    industryName: "IT",
    stocks: [
      {
        rank: 1,
        name: "네이버",
        marketCap: 364753712421321,
      },
      {
        rank: 2,
        name: "카카오",
        marketCap: 234567890000000,
      },
      {
        rank: 3,
        name: "라인",
        marketCap: 123456778900000,
      },
      {
        rank: 4,
        name: "쿠팡",
        marketCap: 36475371242132,
      },
      {
        rank: 5,
        name: "배달의민족",
        marketCap: 364753712421,
      },
    ],
  },
  {
    industryName: "반도체",
    stocks: [
      {
        rank: 1,
        name: "삼성전자",
        marketCap: 456789000000000,
      },
      {
        rank: 2,
        name: "하이닉스",
        marketCap: 234567890000000,
      },
      {
        rank: 3,
        name: "tsmc",
        marketCap: 123456778900000,
      },
      {
        rank: 4,
        name: "인텔",
        marketCap: 36475371242132,
      },
      {
        rank: 5,
        name: "엔비디아",
        marketCap: 364753712421,
      },
    ],
  },
]
