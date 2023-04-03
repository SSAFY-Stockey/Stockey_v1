import ProfileInfo from "./ProfileInfo"
import PageLinkBtn from "./PageLinkBtn"
import StockeyLogo from "./StockeyLogo"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

interface Props {
  isNarrow: boolean
}

const Navbar = ({ isNarrow }: Props) => {
  const curPath = useLocation().pathname

  const isSeleted = (name: string) => {
    if (curPath.startsWith("/stock") && name === "주식 종목") {
      return true
    } else if (curPath.startsWith("/industry") && name === "산업별 정보") {
      return true
    } else if (curPath.startsWith("/keyword") && name === "키워드") {
      return true
    } else if (curPath === "/" && name === "마이페이지") {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <NavWrapper>
        <StockeyLogo />
        <NavbarDiv
          className={
            curPath === "/user/login" ||
            curPath === "/user/signup" ||
            curPath === "/oauth/kakao"
              ? "login"
              : undefined
          }
        >
          <ProfileInfo isNarrow={isNarrow} />
          <PageLinkBtn
            name="주식 종목"
            selected={isSeleted("주식 종목")}
            isNarrow={isNarrow}
          />
          <PageLinkBtn
            name="산업별 정보"
            selected={isSeleted("산업별 정보")}
            isNarrow={isNarrow}
          />
          <PageLinkBtn
            name="키워드"
            selected={isSeleted("키워드")}
            isNarrow={isNarrow}
          />
          <PageLinkBtn
            name="마이페이지"
            selected={isSeleted("마이페이지")}
            isNarrow={isNarrow}
          />
        </NavbarDiv>
      </NavWrapper>
    </>
  )
}

export default Navbar

const NavbarDiv = styled.div`
  position: relative;
  // 내부 패딩
  padding: 24px;

  // 세로 정렬
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // transition
  transition: 0.5s all ease;
  z-index: 5;

  // visibility
  visibility: visible;

  // login Page
  &.login {
    visibility: hidden;
    opacity: 0;
    z-index: 1;
  }
`

const NavWrapper = styled.div`
  position: relative;

  height: 100%;
  width: 100%;
`
