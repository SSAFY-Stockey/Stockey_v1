import styled from "styled-components"
import { useState } from "react"

import DropDown from "./DropDown"

const Searchbar = () => {
  const [isSearched, setIsSearched] = useState<boolean>(true)
  const handleBtn = () => {
    setIsSearched(!isSearched)
  }

  return (
    <>
      <button onClick={handleBtn}>버튼</button>
      <SearchbarDiv className={isSearched ? "searched" : undefined} />
      {isSearched ? <DropDown /> : undefined}
    </>
  )
}

export default Searchbar

const SearchbarDiv = styled.div`
  // 위치
  position: relative;

  // 글자
  font-size: 14px;
  font-weight: bold;

  // 크기
  width: 800px;
  height: 44px;

  // 패딩
  padding: 12px;

  // 형태
  border: 2px solid #f4f4ff;
  border-radius: 22px;
  background-color: #fafafe;

  // 그림자
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.25);

  &.searched {
    border-radius: 22px 22px 0px 0px;
    border-bottom: none;
  }
`
