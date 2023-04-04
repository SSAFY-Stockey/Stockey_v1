import styled from "styled-components"
// sub components
import SubTitle from "../SubTitle"
import StockGraph from "./StockGraph"

const MyStock = () => {
  return (
    <>
      <MyStockWrapper>
        <SubTitle
          subTitle="관심 종목"
          description="관심 등록한 종목을 간편하게 확인하세요"
        />
        <StockGraph />
      </MyStockWrapper>
    </>
  )
}

export default MyStock

const MyStockWrapper = styled.div`
  // padding & margin
  padding: 24px 24px;
  margin-top: 24px;

  // size
  height: 45vh;
  width: 100%;

  // background
  background-color: #fafafe;

  // border
  border-radius: 24px;

  // box-shadow
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.25);

  // 드래그 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
