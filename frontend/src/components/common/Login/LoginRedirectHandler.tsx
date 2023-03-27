import { useSetRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

import Spinner from "../Spinner/Spinner"

import { setAccessToken } from "../../../stores/atoms"
import { useUserInfo } from "../../../hooks/useUserInfo"
import customAxios from "../../../utils/customAxios"
import { start } from "repl"

const DEFAULT_REST_URL = process.env.REACT_APP_SERVER_BASE_URL

const LoginRedirectHandler = () => {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get("code")
  //   const axios = customAxios()
  //   axios
  //     .get("/api/auth/login/kakao/", { params: { code: userId } })
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, [userId])

  useEffect(() => {
    const startLogin = async () => {
      try {
        // 토큰 가져오기(백엔드에서 토큰을 주는 url 넣어야함)
        const response = await fetch(
          `${DEFAULT_REST_URL}/auth/login/kakao?code=${KAKAO_CODE}`,
          {
            method: "GET",
          }
        )
        // DB 저장되어 있는 유저면
        const responseData = await response.json()
        console.log(responseData)
      } catch (error) {
        // 첫 로그인 회원일 경우

        console.log(error)
      }
    }
    startLogin()
  }, [KAKAO_CODE])
  return <></>
}

export default LoginRedirectHandler
