import styled from "styled-components"
import SubTitle from "../SubTitle"
import KeywordList from "./KeywordList"

const MyKeyword = () => {
  return (
    <>
      <MyKeywordWrapper>
        <SubTitle
          subTitle="단어장"
          description="관심 있는 단어를 한번에 확인해보세요"
        />
        <KeywordList />
      </MyKeywordWrapper>
    </>
  )
}

export default MyKeyword

const MyKeywordWrapper = styled.div`
  width: calc(50% - 12px);
  height: 37vh;

  // background
  background-color: #fafafe;

  // border
  border-radius: 24px;

  // box-shadow
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.25);

  // 드래그 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  // margin & pdding
  margin-top: 12px;
  padding: 24px;
`
