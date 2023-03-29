import axios from "axios"
import { useQuery } from "react-query"

const api = axios.create({
  // baseURL: process.env.REACT_APP_SERVER_API_URL,
  timeout: 2000,
})

api.interceptors.request.use((config) => {
  // 세션 스토리지에서 Access Token 가져오기, 없다면 Undefined
  const userInfo = sessionStorage.getItem("user_info")
  const accessToken = userInfo ? JSON.parse(userInfo) : undefined

  // refresh Token 함수 추가

  if (accessToken) {
    config.headers["Autorization"] = "Bearer " + accessToken
  }
  return config
})

const fetchIndustryList = () => {
  return api.get(`/industry`)
}

export const useIndustryList = () => {
  return useQuery("industryList", fetchIndustryList, {
    staleTime: 10000,
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
