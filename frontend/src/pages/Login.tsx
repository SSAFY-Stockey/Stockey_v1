import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <>
      <div>Login</div>
      <div onClick={handleClick}>뒤로가기</div>
    </>
  )
}
export default Login
