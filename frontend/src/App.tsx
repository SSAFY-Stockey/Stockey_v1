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
      <Grid container spacing={1}>
        <Grid item xs={curPath === "/user/login" ? 6 : 2}>
          <Navbar />
        </Grid>
        <Grid item xs={curPath === "/user/login" ? 6 : 10}>
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
        </Grid>
      </Grid>
    </>
  )
}

export default App

const NavDiv = styled.div`
  width: 50vw;
`
const MainDiv = styled.div`
  width: 50vw;
`
