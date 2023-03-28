import { useLocation } from "react-router-dom"
import NicknameInput from "../components/common/Signup/NicknameInput"

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
