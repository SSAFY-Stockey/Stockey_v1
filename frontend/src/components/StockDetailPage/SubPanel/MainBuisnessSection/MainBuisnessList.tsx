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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
`
