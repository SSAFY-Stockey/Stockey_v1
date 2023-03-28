import BizBlock from "./BizBlock"

import styled from "styled-components"

const MainBuisnessList = () => {
  return (
    <MainBuisnessContainer>
      <BizBlock type="플랫폼" />
      <BizBlock type="핀테크" />
      <BizBlock type="콘텐츠" />
    </MainBuisnessContainer>
  )
}

export default MainBuisnessList

const MainBuisnessContainer = styled.div`
  display: block;
  margin-inline: auto;
  min-width: fit-content;
  text-align: center
  width: 100%;
  white-space: nowrap;
  &:hover div {
    margin-right: -16px;
    transition: margin 0.3s ease-out;
  }

  & div:nth-child(1) {
    z-index: 3;
  }
  & div:nth-child(2) {
    z-index: 2;
  }
  & div:nth-child(3) {
    z-index: 1;
  }
  & div:nth-child(3):hover MainBuisnessContainer {
    margin-left: 0;
  }
`
