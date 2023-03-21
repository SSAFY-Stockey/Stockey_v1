import ProfileInfo from "./ProfileInfo"
import PageLinkBtn from "./PageLinkBtn"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

const Navbar = () => {
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
      <NavbarDiv>
        <ProfileInfo />
        <PageLinkBtn name="주식 종목" selected={isSeleted("주식 종목")} />
        <PageLinkBtn name="산업별 정보" selected={isSeleted("산업별 정보")} />
        <PageLinkBtn name="키워드" selected={isSeleted("키워드")} />
        <PageLinkBtn name="마이페이지" selected={isSeleted("마이페이지")} />
      </NavbarDiv>
    </>
  )
}

export default Navbar

const NavbarDiv = styled.div`
  // 내부 패딩
  padding: 24px;

  // 세로 정렬
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
