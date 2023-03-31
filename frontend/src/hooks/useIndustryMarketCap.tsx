import { useQuery } from "react-query"
import customAxios from "../utils/customAxios"

const axios = customAxios()

const fetchIndustryMarketCap = ({ queryKey }: any) => {
  const industryId = queryKey[1]
  return axios.get(`/industry/marketcap/${industryId}`)
}

export const useIndustryMarketCapList = (industryId: string) => {
  return useQuery(["industryMarketCap", industryId], fetchIndustryMarketCap, {
    staleTime: 5 * 60 * 1000,
    select,
    onError,
    refetchOnWindowFocus: false,
  })
}

export type LineChartDataType = [x: number, y: number][]

const select = (response: any) => {
  const rawData = response.data.data

  let LineChartData: LineChartDataType = []

  // rawData.map((item: {stockDate: string, marketCap: number}) => {
  //   const dateObj = new Date(item.stockDate)
  //   const newItem = [
  //     x: dateObj.getTime(),
  //     y: item.marketCap
  //   ]
  // })

  return LineChartData
}

const onError = (err: any) => {
  console.warn("onError >> ", err)
}
