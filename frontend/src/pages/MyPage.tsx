import styled from "styled-components"
import HeadTitle from "../components/MyPage/HeadTitle"
import MyStock from "../components/MyPage/MyStock/MyStock"
import MyIndustry from "../components/MyPage/MyIndustry/MyIndustry"
import MyKeyword from "../components/MyPage/MyKeyword/MyKeyword"
import { useRecoilValue } from "recoil"
import { myKeywordState } from "../stores/MyPageAtoms"
import { useEffect } from "react"

const MyPage = () => {
  // myKeyword state
  const myKeyword = useRecoilValue(myKeywordState)

  useEffect(() => {
    console.log(myKeyword)
  }, [myKeyword])

  return (
    <>
      {!myKeyword ? (
        <MyPageWrapper>
          <HeadTitle />
          <MyStock />
          <ComponentWrapper>
            <MyKeyword />
            <MyIndustry />
          </ComponentWrapper>
        </MyPageWrapper>
      ) : undefined}
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
