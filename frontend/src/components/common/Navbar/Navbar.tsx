import ProfileInfo from "./ProfileInfo"
import PageLinkBtn from "./PageLinkBtn"
import styled from "styled-components"

const Navbar = () => {
  return (
    <>
      <NavbarDiv>
        <ProfileInfo />
        <PageLinkBtn />
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
