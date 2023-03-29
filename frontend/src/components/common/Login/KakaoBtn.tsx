import styled from "styled-components"
import BackBtn from "./BackBtn"

const KakaoBtn = () => {
  const REACT_APP_KAKAO_API = process.env.REACT_APP_KAKAO_API
  const REACT_APP_KAKAO_REDIRECT = process.env.REACT_APP_KAKAO_REDIRECT
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_KAKAO_API}&redirect_uri=${REACT_APP_KAKAO_REDIRECT}&response_type=code`

  return (
    <ButtonWrapper>
      <TextDiv>간편하게 로그인하고</TextDiv>
      <TextDiv>STOCKEY의 서비스를 이용해보세요</TextDiv>
      <ButtonA href={KAKAO_AUTH_URL}>
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          alt="카카오 로그인"
          style={{ width: "60%" }}
        />
      </ButtonA>
      <BackBtn />
    </ButtonWrapper>
  )
}

export default KakaoBtn

const ButtonWrapper = styled.div`
  // size
  height: 100%;
  width: 100%;

  // flex-box
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const TextDiv = styled.div`
  // font
  font-size: 2rem;
  font-weight: bold;
  color: var(--custom-black);
`

const ButtonA = styled.a`
  // align
  text-align: center;

  // margin
  margin-top: 40px;
`
