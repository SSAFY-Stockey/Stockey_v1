import axios from "axios"

// custom axios
// parameter => accessToken : accessToken 인증이 필요한 경우, argument 값으로 accessToken을 넣어서 사용
// useQuery에서 사용하는 경우 useQuery의 queryKey에 accessToken을 넣어서 fetch 함수에 전달할 것

const customAxios = (
  accessToken: string | undefined = undefined,
  setAccessToken: Function | undefined = undefined
) => {
  const api = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}`,
    timeout: 2000,
    withCredentials: true,
  })

  // refresh 여부 확인 코드
  let isTokenRefreshing = false
  let refreshSubscribers: any[] = []

  // refreshToken 재실행 코드
  const onTokenRefreshed = (accessToken: string) => {
    refreshSubscribers.map((callback: any) => callback(accessToken))
  }

  // refresh 필요 함수 저장
  const addRefreshSubscriber = (callback: any) => {
    refreshSubscribers.push(callback)
  }

  // header에 accessToken 추가
  api.interceptors.request.use((config) => {
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken
    }
    return config
  })

  // refresh 요청 보내기
  api.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      const {
        config,
        response: { status },
      } = error
      const originalRequest = config

      if (status === 401 || status === 400) {
        console.log("no, its expired")
        // isTokenRefreshing이 false인 경우에만 token refresh 요청
        if (!isTokenRefreshing) {
          isTokenRefreshing = true

          const newAccessToken = axios
            .get(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`, {
              timeout: 2000,
              withCredentials: true,
            })
            .then((response) => {
              return response.data.data
            })

          // 새로운 accessToken 저장
          if (setAccessToken) {
            setAccessToken(newAccessToken)
          }
        }
      }
    }
  )

  return api
}

export default customAxios
