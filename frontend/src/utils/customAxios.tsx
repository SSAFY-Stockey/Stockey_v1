import axios from "axios"

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}`,
  timeout: 2000,
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  // 세션 스토리지에서 Access Token 가져오기, 없다면 Undefined
  const userInfo = sessionStorage.getItem("user_info")
  const accessToken = userInfo ? JSON.parse(userInfo) : undefined

  // refresh Token 함수 추가
  if (accessToken) {
    console.log(accessToken)
    config.headers["Autorization"] = "Bearer " + accessToken
  }
  return config
})

const customAxios = () => {
  return api
}

export default customAxios
