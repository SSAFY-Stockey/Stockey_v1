// import { useQuery } from "react-query"
// import customAxios from "../utils/customAxios"

// const axios = customAxios()

// const fetchCorrelationResult = ({ queryKey }: any) => {
//   const keywordId = queryKey[1]
//   const params =
//   console.log("fetchcorrelationResult")
//   return axios.get(`/keywords/correlation/${keywordId}/high`, {params})
// }

// export const usecCrrelationResult = (keywordId: number) => {
//   return useQuery(["correlationResult", keywordId], fetchCorrelationResult, {
//     staleTime: 60 * 60, // 1시간 동안만 fresh
//     cacheTime: Infinity,
//     select,
//     onError,
//     refetchOnWindowFocus: false,
//     suspense: true,
//   })
// }

// interface correlationResultType {
//   count: number
//   statisticDate: string // yyyy-mm-dd
// }

// const select = (response: any) => {
//   const rawData = response.data.data
//   const correlationResultChartData = rawData.map(
//     (item: correlationResultType) => {
//       const dateObj = new Date(item.statisticDate)
//       const newItem = [dateObj.getTime(), item.count]
//       return newItem
//     }
//   )
//   console.log("키워드 빈도수 데이터 >> ", correlationResultChartData)
//   return correlationResultChartData
// }

// const onError = (err: any) => {
//   console.warn("onError >> ", err)
// }
export {}
