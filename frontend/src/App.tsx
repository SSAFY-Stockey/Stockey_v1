import { useEffect } from "react"
import "./App.css"
import styled from "styled-components"
import { Routes, Route, useLocation } from "react-router-dom"

// 페이지 컴포넌트
import MyPage from "./pages/MyPage"
import IndustryDetailPage from "./pages/IndustryDetailPage"
import IndustryMainPage from "./pages/IndustryMainPage"
import StockDetailPage from "./pages/StockDetailPage"
import StockMainPage from "./pages/StockMainPage"
import KeywordPage from "./pages/KeywordPage"
import Login from "./pages/Login"
import SignupPage from "./pages/SignupPage"
import LoginRedirectHandler from "./components/common/Login/LoginRedirectHandler"

// 스타일 적용
import MainSection from "./components/common/Background/MainSection"
import Navbar from "./components/common/Navbar/Navbar"

// recoil
import { useRecoilValue } from "recoil"
import { logInState } from "./stores/atoms"
import customAxios from "./utils/customAxios"
import useInterceptedAxios from "./utils/useInterceptedAxios"

function App() {
  const curPath = useLocation().pathname

  // // accessToken 데이터 가져오기
  const isLogIn = useRecoilValue(logInState)
  const axios = useInterceptedAxios()

  if (isLogIn) {
    axios
      .get("/member")
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  return (
    <>
      <MainWrapper>
        <NavDiv
          className={
            curPath === "/user/login" ||
            curPath === "/user/signup" ||
            curPath === "/oauth/kakao"
              ? "login"
              : undefined
          }
        >
          <Navbar />
        </NavDiv>
        <MainDiv
          className={
            curPath === "/user/login" ||
            curPath === "/user/signup" ||
            curPath === "/oauth/kakao"
              ? "login"
              : undefined
          }
        >
          <MainSection>
            <Routes>
              <Route path="/" element={<MyPage />} />
              <Route path="/stock" element={<StockMainPage />} />
              <Route path="/stock/:stockName" element={<StockDetailPage />} />
              <Route path="/industry" element={<IndustryMainPage />} />
              <Route
                path="/industry/:industryName"
                element={<IndustryDetailPage />}
              />
              <Route path="/keyword" element={<KeywordPage />} />
              <Route path="/user/login" element={<Login />} />
              <Route path="/oauth/kakao" element={<LoginRedirectHandler />} />
              <Route path="/user/signup" element={<SignupPage />} />
            </Routes>
          </MainSection>
        </MainDiv>
      </MainWrapper>
    </>
  )
}

export default App

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const NavDiv = styled.div`
  // default size
  width: 16.67vw;
  height: 100vh;
  overflow: hidden;

  // transition
  transition: 0.5s all ease;

  // login & signup
  &.login {
    width: 45vw;
  }
`
const MainDiv = styled.div`
  // default size
  width: 83.33vw;

  // transition
  transition: 0.5s all ease;

  // login & signup
  &.login {
    width: 55vw;
  }
`
