import { useNavigate } from "react-router-dom"
import KakaoBtn from "../components/common/Login/KakaoBtn"

const Login = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <>
      <div>Login</div>
      <div onClick={handleClick}>뒤로가기</div>
      <KakaoBtn />
    </>
  )
}
export default Login
