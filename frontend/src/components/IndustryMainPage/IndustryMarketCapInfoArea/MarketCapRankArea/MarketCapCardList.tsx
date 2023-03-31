import styled from "@emotion/styled"
import MarketCapCard from "./MarketCapCard"
import { useEffect, useState } from "react"
import { TransitionGroup } from "react-transition-group"

type MarketCapRankListType = {
  id: number
  marketCap: number
  name: string
}[]

const MarketCapCardList = ({
  marketCapRankList,
}: {
  marketCapRankList: MarketCapRankListType
}) => {
  const [stockCardList, setStockCardList] = useState<JSX.Element[] | null>(null)

  useEffect(() => {
    setStockCardList(
      marketCapRankList.map((stock, index) => (
        <MarketCapCard
          key={stock.id}
          rank={index + 1}
          stockName={stock.name}
          marketCap={stock.marketCap}
        />
      ))
    )
  }, [marketCapRankList])

  return <CardListWrapper>{stockCardList}</CardListWrapper>
}

export default MarketCapCardList

const CardListWrapper = styled(TransitionGroup)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
})
