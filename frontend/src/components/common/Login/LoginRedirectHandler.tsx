import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

import Spinner from "../Spinner/Spinner"

import { accessTokenSelector } from "../../../stores/atoms"
import { useUserInfo } from "../../../hooks/useUserInfo"

const KAKAO_CODE = new URL(window.location.href).searchParams.get("code")

const LoginRedirectHandler = () => {
  const navigate = useNavigate()
  // accessToken state
  const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector)
  // react-query 호출
  const {
    isLoading,
    data: userData,
    isError,
  } = useUserInfo(KAKAO_CODE ? KAKAO_CODE : "")

  useEffect(() => {
    console.log(userData)
    if (isError) {
      window.alert("로그인 오류 발생")
      navigate("/login", { replace: true })
    }
    if (userData?.status === 201) {
      navigate("/user/signup", {
        replace: true,
        state: {
          oauthId: userData?.data.data.oauthMemberId,
          oauthType: userData?.data.data.oauthType,
        },
      })
    } else if (userData?.status === 200) {
      setAccessToken(userData.data.data.accessToken)
    }
  }, [userData, isError])

  useEffect(() => {
    if (accessToken) {
      navigate("/keyword", { replace: true })
    }
  })

  if (isLoading) return <Spinner />
  return <></>
}

export default LoginRedirectHandler
