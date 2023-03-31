import axios from "axios"
import { accessTokenSelector } from "../stores/atoms"
import { useRecoilValue } from "recoil"

const useInterceptedAxios = () => {
  const accessToken = useRecoilValue(accessTokenSelector)

  const api = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}`,
    timeout: 2000,
  })

  api.interceptors.request.use((config) => {
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken
    }
    return config
  })

  return api
}

export default useInterceptedAxios
