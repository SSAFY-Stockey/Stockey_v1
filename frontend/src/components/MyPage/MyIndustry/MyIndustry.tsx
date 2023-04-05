import styled from "styled-components"
import SubTitle from "../SubTitle"
import IndustryList from "./IndustryList"

const MyIndustry = () => {
  return (
    <>
      <MyIndustryWrapper>
        <SubTitle
          subTitle="관심 산업"
          description="해당 산업으로 이동할 수 있습니다"
        />
        <IndustryList />
      </MyIndustryWrapper>
    </>
  )
}

export default MyIndustry

const MyIndustryWrapper = styled.div`
  // size
  width: calc(50% - 12px);
  height: 37vh;

  // margin & padding
  margin-top: 12px;
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
