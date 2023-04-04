import styled from "styled-components"
import HeadTitle from "../components/MyPage/HeadTitle"
import MyStock from "../components/MyPage/MyStock/MyStock"
import MyIndustry from "../components/MyPage/MyIndustry/MyIndustry"
import MyKeyword from "../components/MyPage/MyKeyword/MyKeyword"

const MyPage = () => {
  return (
    <>
      <MyPageWrapper>
        <HeadTitle />
        <MyStock />
        <ComponentWrapper>
          <MyIndustry />
          <MyKeyword />
        </ComponentWrapper>
      </MyPageWrapper>
    </>
  )
}
export default MyPage

const MyPageWrapper = styled.div`
  // padding
  padding: 36px;
`

const ComponentWrapper = styled.div`
  // flex-box
  display: flex;
  flex-direction: row;
  gap: 24px;
`
