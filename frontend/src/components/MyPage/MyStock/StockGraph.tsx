import styled from "styled-components"
// sub component
import StockAxis from "./StockAxis"
import StockGraphBar from "./StockGraphBar"

// sample data
import sampleData from "./SampleData"

const StockGraph = () => {
  return (
    <>
      <GraphWrapper>
        <StockAxis />
        <BarWrapper>
          {sampleData.map((stock, key) => {
            return (
              <StockGraphBar
                key={key}
                price={stock.price}
                rate={stock.rate}
                name={stock.name}
              />
            )
          })}
        </BarWrapper>
      </GraphWrapper>
    </>
  )
}

export default StockGraph

const GraphWrapper = styled.div`
  // flex-box
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 36px;

  // padding & margin
  margin-top: 12px;

  // position
  position: relative;

  // size
  height: 30vh;
`

const BarWrapper = styled.div`
  // position
  position: relative;

  // flex-box
  display: flex;
  gap: 36px;
  flex: 1;

  // overflow
  flex-wrap: nowrap;
  overflow-x: auto;

  // size
  width: calc(100% - 50px);
  min-width: 500px;
`
