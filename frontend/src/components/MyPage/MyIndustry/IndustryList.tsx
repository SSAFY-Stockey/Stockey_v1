import styled from "styled-components"
import SampleIndustryData from "./SampleIndustryData"
import IndustryCard from "../../IndustryMainPage/IndustrySelector/IndustryCard"

const IndustryList = () => {
  return (
    <>
      <IndustryListWrapper>
        {SampleIndustryData.map((IndustryInfo, key) => {
          return (
            <CardWrapper key={key}>
              <IndustryCard industryInfo={IndustryInfo} />
            </CardWrapper>
          )
        })}
      </IndustryListWrapper>
    </>
  )
}

export default IndustryList

const IndustryListWrapper = styled.div`
  // position
  position: relative;

  // flex-box
  display: flex;
  gap: 24px;
  align-items: center;
  flex: 1;

  // overflow
  flex-wrap: nowrap;
  overflow-x: auto;

  // size
  height: 28vh;
  width: 100%;

  // margin & padding
  padding: 2px;

  // overflow
  flex-wrap: nowrap;
  overflow-x: auto;

  // scroll bar
  // 아래의 모든 코드는 영역::코드로 사용
  &::-webkit-scrollbar {
    height: 25px; // 스크롤바의 너비
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 30px;
    border: 10px solid #fafafe;
  }

  &::-webkit-scrollbar-track {
    // background-color: rgba(0,0,0,0); // 스크롤바 뒷 배경 색상
  }
`

const CardWrapper = styled.div`
  margin-top: 2vh;
  min-width: calc(75px + 3vh);
`
