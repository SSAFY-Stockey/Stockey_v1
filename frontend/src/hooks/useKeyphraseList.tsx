import { useQuery } from "react-query"
import customAxios from "../utils/customAxios"

const axios = customAxios()

export interface KeyphraseListParamsType {
  keywordId: number | undefined
  newsType: "STOCK" | "INDUSTRY" | "ECONOMY"
  typeId: number
  // yymmdd
  startDate: string
  endDate: string
}

const fetchKeyphraseList = ({ queryKey }: any) => {
  const [, keywordId, type, id, start_date, end_date] = queryKey
  console.log("fetchKeyPhraseList")
  return axios.get(`/keywords/${keywordId}/key_phrase`, {
    params: { keywordId, type, id, start_date, end_date },
  })
}

export const useKeyphraseList = ({
  keywordId,
  newsType,
  typeId,
  startDate,
  endDate,
}: KeyphraseListParamsType) => {
  return useQuery(
    ["keyPhraseList", keywordId, newsType, typeId, startDate, endDate],
    fetchKeyphraseList,
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      select,
      onError,
      refetchOnWindowFocus: false,
      enabled: !!keywordId,
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
