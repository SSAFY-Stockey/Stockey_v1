import styled from "styled-components"
import SubTitle from "../SubTitle"

const MyIndustry = () => {
  return (
    <>
      <MyIndustryWrapper>
        <SubTitle
          subTitle="관심 산업"
          description="클릭하면 해당 산업으로 이동할 수 있습니다"
        />
      </MyIndustryWrapper>
    </>
  )
}

export default MyIndustry

const MyIndustryWrapper = styled.div`
  // size
  width: calc(50% - 12px);
  height: 35vh;

  // margin & padding
  margin-top: 24px;
  padding: 24px;

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
`
