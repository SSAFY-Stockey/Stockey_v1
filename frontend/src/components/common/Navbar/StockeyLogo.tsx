import styled from "styled-components"
import { useLocation } from "react-router-dom"

const StockeyLogo = () => {
  const curPath = useLocation().pathname

  return (
    <>
      <LogoDiv className={curPath === "/user/login" ? "login" : undefined}>
        STOCKEY
      </LogoDiv>
    </>
  )
}

export default StockeyLogo

const LogoDiv = styled.div`
  // position
  position: absolute;

  // size
  width: 100%;
  height: 100%;

  // font
  color: white;
  font-family: ITC-Benguiat-Gothic-Std;
  font-size: 3rem;
  font-weight: bold;

  // flex-box
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  // // transition
  // transition: 0.5s all ease;
  // opacity: 1;

  // &.login {
  //   z-index: 3;
  //   opacity: 1;
  // }
`
