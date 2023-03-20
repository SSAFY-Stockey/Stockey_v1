import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { RecoilRoot } from "recoil"
import { QueryClient, QueryClientProvider } from "react-query"

// 스타일 적용
import Grid from "@mui/material/Grid"
import MainSection from "./components/common/Background/MainSection"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <div>Navbar</div>
          </Grid>
          <Grid item xs={10}>
            <MainSection>
              <App />
            </MainSection>
          </Grid>
        </Grid>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
