import { useSetRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"

import Spinner from "../Spinner/Spinner"

import { setAccessToken } from "../../../stores/atoms"
import { useUserInfo } from "../../../hooks/useUserInfo"

const LoginRedirectHandler = () => {
  const userId = new URL(window.location.href).searchParams.get("code")
  console.log(userId)

  return <div>{userId}</div>
}

export default LoginRedirectHandler
