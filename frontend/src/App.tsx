import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

// 페이지 컴포넌트
import MyPage from "./pages/MyPage"
import IndustryDetailPage from "./pages/IndustryDetailPage"
import IndustryMainPage from "./pages/IndustryMainPage"
import StockDetailPage from "./pages/StockDetailPage"
import StockMainPage from "./pages/StockMainPage"
import KeywordPage from "./pages/KeywordPage"

// 스타일 적용
import Grid from "@mui/material/Grid"
import MainSection from "./components/common/Background/MainSection"
import Navbar from "./components/common/Navbar/Navbar"

function App() {
  return (
    <>
      <BrowserRouter>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Navbar />
          </Grid>
          <Grid item xs={10}>
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
              </Routes>
            </MainSection>
          </Grid>
        </Grid>
      </BrowserRouter>
    </>
  )
}

export default App
