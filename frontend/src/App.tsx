import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import "./App.css"
import styled from "styled-components"

// 페이지 컴포넌트
import MyPage from "./pages/MyPage"
import IndustryDetailPage from "./pages/IndustryDetailPage"
import IndustryMainPage from "./pages/IndustryMainPage"
import StockDetailPage from "./pages/StockDetailPage"
import StockMainPage from "./pages/StockMainPage"
import KeywordPage from "./pages/KeywordPage"
import Login from "./pages/Login"

// 스타일 적용
import Grid from "@mui/material/Grid"
import MainSection from "./components/common/Background/MainSection"
import Navbar from "./components/common/Navbar/Navbar"

function App() {
  const curPath = useLocation().pathname
  console.log(curPath)

  return (
    <>
      <MainWrapper>
        <NavDiv className={curPath === "/user/login" ? "login" : undefined}>
          <Navbar />
        </NavDiv>
        <MainDiv className={curPath === "/user/login" ? "login" : undefined}>
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
    width: 50vw;
  }
`
const MainDiv = styled.div`
  // default size
  width: 83.33vw;

  // transition
  transition: 0.5s all ease;

  // login & signup
  &.login {
    width: 50vw;
  }
`
