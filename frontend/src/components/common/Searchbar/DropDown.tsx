import styled from "styled-components"
import SearchList from "./SearchList"

const DropDown = () => {
  return (
    <SearchListDiv>
      <SearchList />
    </SearchListDiv>
  )
}

export default DropDown

const SearchListDiv = styled.div`
  // 위치
  position: absolute;

  // 크기
  width: 800px;

  // 형태
  border-bottom: 2px solid #f4f4ff;
  border-right: 2px solid #f4f4ff;
  border-left: 2px solid #f4f4ff;
  border-radius: 0px 0px 22px 22px;
  background-color: #fafafe;

  // 그림자
  // box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.25);
`
