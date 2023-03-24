import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const LoginBtn = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/user/login")
  }
  return (
    <>
      <LoginBtnDiv onClick={handleClick}>로그인</LoginBtnDiv>
    </>
  )
}

export default LoginBtn

const LoginBtnDiv = styled.div`
  background-color: val(--custom-gradient-pink);

  // font
  font-size: 1.5rem;
  font-weight: bold;
  color: white;

  // cursor
  cursor: pointer;

  // prevent drag
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
