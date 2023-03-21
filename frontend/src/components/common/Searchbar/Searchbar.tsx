import styled from "styled-components"

const Searchbar = () => {
  return (
    <>
      <SearchbarDiv />
    </>
  )
}

export default Searchbar

const SearchbarDiv = styled.input`
  // 글자
  font-size: 14px;
  font-weight: bold;

  // 패딩
  padding: 12px;

  // border
  border: 1px solid black;
  border-radius: 22px;
`
