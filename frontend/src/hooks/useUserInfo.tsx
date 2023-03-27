import customAxios from "../utils/customAxios"
import { useQuery } from "react-query"

const axios = customAxios()

const fetchUserInfo = ({ queryKey }: { queryKey: string[] }) => {
  const code = queryKey[1]

  const params = {
    code: code,
  }

  return axios.get(`/api/auth/login/kakao/`, { params })
}

export const useUserInfo = (userId: string) => {
  return useQuery(["userInfo", userId], fetchUserInfo, {
    staleTime: 0,
    select,
    onError,
  })
}

const select = (response: any) => {
  return response.data
}

const onError = (err: any) => {
  console.warn("onError >> ", err)
}
