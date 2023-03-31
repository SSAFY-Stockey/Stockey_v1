import { useQuery } from "react-query"
import customAxios from "../utils/customAxios"

const axios = customAxios()

const fetchIndustryList = () => {
  return axios.get(`/industry`)
}

export const useIndustryList = () => {
  return useQuery("industryList", fetchIndustryList, {
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
