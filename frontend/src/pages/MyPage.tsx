import styled from "styled-components"
import HeadTitle from "../components/MyPage/HeadTitle"
import MyStock from "../components/MyPage/MyStock/MyStock"
import MyIndustry from "../components/MyPage/MyIndustry/MyIndustry"
import MyKeyword from "../components/MyPage/MyKeyword/MyKeyword"
import KeywordPanel from "../components/StockDetailPage/SubPanel/KeywordPanel/KeywordPanel"
import { useRecoilValue } from "recoil"
import { myKeywordState } from "../stores/MyPageAtoms"
import { useEffect, useState } from "react"

const MyPage = () => {
  // myKeyword state
  const myKeyword = useRecoilValue(myKeywordState)
  // keywordPanel state
  const [isActivate, setIsActivate] = useState<boolean>(false)

  useEffect(() => {
    setIsActivate(!!myKeyword ? true : false)
  }, [myKeyword])

  return (
    <Wrapper>
      <ComponentWrapper>
        <MyPageWrapper>
          <HeadTitle />
          <MyStock isActivate={isActivate} />
          <ComponentRowWrapper>
            <MyKeyword isActivate={isActivate} />
            <MyIndustry isActivate={isActivate} isVisible={!isActivate} />
          </ComponentRowWrapper>
          <MyIndustry isActivate={isActivate} isVisible={isActivate} />
        </MyPageWrapper>
        <PannerWrapper className={isActivate ? "isActivate" : undefined}>
          {!!myKeyword ? <KeywordPanel keyword={myKeyword} /> : undefined}
        </PannerWrapper>
      </ComponentWrapper>
    </Wrapper>
  )
}
export default MyPage

const Wrapper = styled.div`
  position: relative;
  width: 83.33vw;
  height: 100vh;
  overflow: hidden;
`

const ComponentWrapper = styled.div`
  // flex-box
  display: flex;
  flex-direction: row;
  gap: 24px;
`

const MyPageWrapper = styled.div`
  // size
  width: 100%;
  height: 100vh;

  // padding & margin
  padding: 36px;

  // overflow
  overflow-x: hidden;
  overflow-y: scroll;

  // scrollbar
  &::-webkit-scrollbar {
    display: none;
  }
`

// // componenet 가로 길이 고정용 wrapper
// const ComponentColWrapper = styled.div`
//   // size
//   width: 100%;

//   transition: width 0.8s ease-in-out;

//   &.isActivate {
//     width: 50vw;
//   }
// `

// component 가로 정렬용 wrapper
const ComponentRowWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: nowrap;
  width: 200vw;
`

const PannerWrapper = styled.div`
  // size
  height: 100vh;
  width: calc(33.33vw - 36px);

  // position
  position: absolute;
  right: -100%;

  // transition
  transition: all 0.8s ease-in-out;

  &.isActivate {
    width: calc(100%-36px);
    right: 0px;
  }
`
