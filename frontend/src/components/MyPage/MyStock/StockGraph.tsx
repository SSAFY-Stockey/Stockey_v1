import styled from "styled-components"
// useQuery
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { accessTokenSelector } from "../../../stores/atoms"
import customAxios from "../../../utils/customAxios"
// sub component
import StockAxis from "./StockAxis"
import StockGraphBar from "./StockGraphBar"

// sample data
import sampleData from "./SampleData"

const StockGraph = () => {
  // accessTokenState
  const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector)
  // useNavigate
  const navigate = useNavigate()
  // customAxios
  const axios = customAxios(accessToken, setAccessToken)

  // useQuery: getMyStockList
  const fetchMyStockList = () => {
    return axios.get("/stock/my")
  }

  const { isLoading, data } = useQuery("getMyStockList", fetchMyStockList, {
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!accessToken,
  })

  console.log(data)

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
  min-width: 100px;

  // scroll bar
  // 아래의 모든 코드는 영역::코드로 사용
  &::-webkit-scrollbar {
    height: 25px; // 스크롤바의 너비
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 30px;
    border: 10px solid #ffffff;
  }

  &::-webkit-scrollbar-track {
    // background-color: rgba(0,0,0,0); // 스크롤바 뒷 배경 색상
  }
`
