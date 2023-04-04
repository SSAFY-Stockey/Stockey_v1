import styled from "styled-components"

const MyKeyword = () => {
  return (
    <>
      <MyKeywordWrapper>hello</MyKeywordWrapper>
    </>
  )
}

export default MyKeyword

const MyKeywordWrapper = styled.div`
  width: calc(50% - 12px);
  height: 35vh;

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

  // margin
  margin-top: 24px;
`
