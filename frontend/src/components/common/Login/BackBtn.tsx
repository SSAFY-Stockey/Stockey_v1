import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const BackBtn = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <>
      <ButtonA onClick={handleClick}>로그인/회원가입 없이 둘러보기</ButtonA>
    </>
  )
}

export default BackBtn

const ButtonA = styled.a`
  //font
  font-size: 1rem;
  font-weight: normal;
  color: #6d6666;
  text-decoration: underline;

  // margin
  margin-top: 40px;
  cursor: pointer;
`
