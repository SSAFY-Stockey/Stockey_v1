import styled from "styled-components"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import NicknameInput from "../components/common/Signup/NicknameInput"
import { useSignup } from "../hooks/useSignup"

// recoil
import { useRecoilValue, useRecoilState } from "recoil"
import { nicknameValidState, accessTokenSelector } from "../stores/atoms"
import Spinner from "../components/common/Spinner/Spinner"

const SignupPage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // nickname state
  const [nickname, setNickname] = useState<string | undefined>("")
  const isNicknameValid = useRecoilValue(nicknameValidState)
  const getNickname = (name: string | undefined) => {
    setNickname(name)
  }
  // accessToken state
  const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector)

  // location state
  const oauthId = location.state.oauthId
  const oauthType = location.state.oauthType

  // react-query(custom hook)
  const {
    isLoading,
    data: token,
    isError,
    refetch, // 클릭 시, refetch를 통해 재실행 하게 됨
  } = useSignup({ nickname, oauthId, oauthType })

  // click handling => fetch data
  const handleClick = () => {
    if (isNicknameValid) {
      refetch()
    }
  }

  // react-query data handling
  // 성공한 경우 token 처리
  useEffect(() => {
    if (token) {
      setAccessToken(token)
    }
  }, [token])

  useEffect(() => {
    if (accessToken) {
      navigate("/keyword", { replace: true })
    }
  }, [accessToken])

  // 로딩 및 에러 상황의 경우
  if (isLoading) {
    return <Spinner />
  } else if (isError) {
    window.alert("다시 시도해 주세요")
    navigate("/user/login", { replace: true })
  }

  return (
    <>
      <div>{nickname}</div>
      <NicknameInput nickname={nickname} getNickname={getNickname} />
      <NicknameSubmitBtn onClick={handleClick}>hello</NicknameSubmitBtn>
    </>
  )
}

export default SignupPage

const NicknameSubmitBtn = styled.div`
  padding: 12px;
  font-size: 1.5rem;
  background-color: var(--custom-pink-1);
`
