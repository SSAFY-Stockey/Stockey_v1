import { useQuery } from "react-query"
import customAxios from "../utils/customAxios"

const axios = customAxios()

export interface KeywordRankParamsType {
  topN: number
  newsType: "STOCK" | "INDUSTRY" | "ECONOMY"
  typeId: number
  // yymmdd
  startDate: string
  endDate: string
}

const fetchKeywordRank = (queryKey: any) => {
  const [topN, newsType, typeId, startDate, endDate] = queryKey.slice(1)
  console.log("fetchKeywordRank")
  return axios.get(`/keywords/topN`, {
    params: { topN, newsType, typeId, startDate, endDate },
  })
}

export const useKeywordRank = ({
  topN,
  newsType,
  typeId,
  startDate,
  endDate,
}: KeywordRankParamsType) => {
  return useQuery(
    ["keywordRank", topN, newsType, typeId, startDate, endDate],
    fetchKeywordRank,
    {
      staleTime: 60 * 60, // 1시간 동안만 fresh
      cacheTime: Infinity,
      select,
      onError,
      refetchOnWindowFocus: false,
    }
  )
}

const select = (response: any) => {
  const rawData = response.data
  const selectedData = rawData
  console.log("selectedData >> ", selectedData)
  return selectedData
}

const onError = (err: any) => {
  console.warn("onError >> ", err)
}
