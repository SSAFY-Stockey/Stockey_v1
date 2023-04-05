import { useQuery } from "react-query"
import customAxios from "../utils/customAxios"

const axios = customAxios()

const fetchMyIndustryCheck = ({ queryKey }: any) => {
  const industryId = queryKey[1]
  return axios.get(`industry/stocklist/my/${industryId}`)
}

export const useMyIndustryCheck = (industryId: number) => {
  return useQuery(["myIndustryCheck", industryId], fetchMyIndustryCheck, {
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
