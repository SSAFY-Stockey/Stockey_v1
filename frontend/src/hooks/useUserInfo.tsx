import customAxios from "../utils/customAxios"
import { useQuery } from "react-query"

const axios = customAxios()

const fetchUserInfo = ({ queryKey }: { queryKey: string[] }) => {
  return axios.post("/api/auth/login/kakao", { user_id: queryKey[1] })
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
