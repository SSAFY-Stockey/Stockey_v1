import styled from "styled-components"

const StockAxis = () => {
  return (
    <>
      <AxisWrapper>
        <div>30%</div>
        <div>20%</div>
        <div>10%</div>
        <div>0%</div>
      </AxisWrapper>
    </>
  )
}

export default StockAxis

const AxisWrapper = styled.div`
  // flex-box
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-itmes: center;

  // height
  height: calc(50vh - 200px);

  // font
  font-size: 1.5rem;
  font-weight: bold;

  // margin
  margin-top: 24px;
`
