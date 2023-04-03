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

const fetchKeywordRank = ({ queryKey }: any) => {
  const [, topN, newsType, id, startDate, endDate] = queryKey
  console.log("fetchKeywordRank")
  return axios.get(`/keywords/topN`, {
    params: { topN, newsType, id, startDate, endDate },
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
      enabled: !!typeId,
      suspense: true,
    }
  )
}

const select = (response: any) => {
  const rawData = response.data.data
  const { totalNewsCount, topKeywordDTO: topKeywords } = rawData
  return { totalNewsCount, topKeywords }
}

const onError = (err: any) => {
  console.warn("onError >> ", err)
}
