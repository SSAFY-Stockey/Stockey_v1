import styled from "styled-components"
import StockBlock from "./StockBlock"
import { useRandomStock } from "../../../hooks/useRandomStock"
import { useSetRecoilState } from "recoil"
import { selectedStockState } from "../../../stores/StockMainAtoms"

const RandomStockList = () => {
  const { data: randomStockData } = useRandomStock(3)
  const setSelectedStock = useSetRecoilState(selectedStockState)
  setSelectedStock({
    idx: 0,
    id: randomStockData?.[0].id,
    name: randomStockData?.[0].name,
  })

  return (
    <StyledDiv>
      {randomStockData?.map((stock: any, index: number) => (
        <StockBlock
          key={`randomStock-${index}`}
          stockId={stock.id}
          index={index}
          stockName={stock.name}
          currentPrice={stock.currentPrice}
          priceChange={stock.changeRate}
        />
      ))}
    </StyledDiv>
  )
}

export default RandomStockList

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`
