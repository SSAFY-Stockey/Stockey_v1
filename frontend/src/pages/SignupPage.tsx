import { useLocation } from "react-router-dom"
import NicknameInput from "../components/common/Login/NicknameInput"

const SignupPage = () => {
  const location = useLocation()

  console.log(location.state)
  return (
    <>
      <NicknameInput />
    </>
  )
}

export default SignupPage
