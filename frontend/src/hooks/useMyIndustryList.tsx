import { useQuery } from "react-query"
import customAxios from "../utils/customAxios"

const axios = customAxios()

const fetchMyIndustryList = ({ queryKey }: any) => {
  if (queryKey[1]) {
    const industryId = queryKey[1]
    return axios.get(`/industry/${industryId}`)
  } else {
    return axios.get(`/industry`)
  }
}

export const useMyIndustryList = (industryId?: number) => {
  return useQuery(["industryList", industryId], fetchMyIndustryList, {
    staleTime: 5 * 60 * 1000,
    select,
    onError,
    refetchOnWindowFocus: false,
  })
}

const select = (response: any) => {
  return response.data.data
}

const onError = (err: any) => {
  console.warn("onError >> ", err)
}
