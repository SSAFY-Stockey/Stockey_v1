import customAxios from "../utils/customAxios"
import { useQuery } from "react-query"

type Props = {
  accessToken: string | undefined
  setAccessToken: Function
}

const fetchNickname = (queryKey: any) => {
  const accessToken: string = queryKey[1]
  const setAccessToken: Function = queryKey[2]

  const axios = customAxios(accessToken, setAccessToken)

  return axios.get("member")
}

export const useNickname = ({ accessToken, setAccessToken }: Props) => {
  return useQuery(["Nickname", accessToken, setAccessToken], fetchNickname, {
    refetchOnWindowFocus: false,
    select,
    onError,
  })
}

const select = (response: any) => {
  return response.data.data.nickname
}

const onError = (error: any) => {
  console.warn("onError >> ", error)
}
