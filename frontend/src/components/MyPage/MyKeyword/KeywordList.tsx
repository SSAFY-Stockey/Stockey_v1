import styled from "styled-components"
import KeywordItem from "./KeywordItem"
import KeywordSampleData from "./KeywordSampleData"
import { useRecoilValue } from "recoil"
import { myKeywordState } from "../../../stores/MyPageAtoms"

const KeywordList = () => {
  const myKeyword = useRecoilValue(myKeywordState)

  return (
    <>
      <ListWrapper>
        {KeywordSampleData.map((keyword, key) => {
          const isSelected = keyword.name === myKeyword ? true : false
          return (
            <KeywordItem key={key} keyword={keyword} isSelected={isSelected} />
          )
        })}
      </ListWrapper>
    </>
  )
}

export default KeywordList

const ListWrapper = styled.div`
  // size
  height: 25vh;
  width: 100%;

  // margin & padding
  margin: 12px;

  // display
  display: flex;
  gap: px;
  flex-wrap: wrap;

  // overflow
  overflow-y: scroll;

  // scroll bar
  // 아래의 모든 코드는 영역::코드로 사용
  &::-webkit-scrollbar {
    width: 25px; // 스크롤바의 너비
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
