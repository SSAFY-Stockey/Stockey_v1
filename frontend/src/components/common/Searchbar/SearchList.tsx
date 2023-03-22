import SampleStock from "./SampleList"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

type SearchListProps = {
  page: string
  value: string | undefined
}

const SearchList = ({ page, value }: SearchListProps) => {
  // 연관 검색어 저장 array
  const [searchResult, setSearchResult] = useState<string[]>([])

  // 입력값이 바뀔 때, 검색 결과 데이터를 갱신
  useEffect(() => {
    // page = "stock"
    const saveSearchResult = () => {
      const sampleResult = SampleStock.filter((item: string) =>
        item
          .toUpperCase()
          .replace(" ", "")
          .includes(value ? value.toUpperCase().replace(" ", "") : "")
      )
      return sampleResult
    }
    setSearchResult(saveSearchResult())
  }, [value])

  // 클릭시 해당 페이지로 이동하는 함수
  const navigate = useNavigate()
  const handleClick = (
    item: string,
    event: React.MouseEvent<HTMLLIElement> | undefined
  ) => {
    navigate(`/stock/${item}`)
  }

  // 검색 내역 포함 부분 표시 함수
  const coloredItem = (item: string, key: number) => {
    return (
      <ResultLi onClick={(event) => handleClick(item, event)} key={item + key}>
        {item.split(value ? value.toUpperCase().replace(" ", "") : "")[0]}
        <HiglightSpan>
          {value ? value.toUpperCase().replace(" ", "") : ""}
        </HiglightSpan>
        {item.split(value ? value.toUpperCase().replace(" ", "") : "")[1]}
      </ResultLi>
    )
  }

  return (
    <>
      <ResultUl>
        {searchResult.map((item, key) => {
          return coloredItem(item, key)
        })}
      </ResultUl>
    </>
  )
}

export default SearchList

const ResultUl = styled.ul`
  padding: 0px 12px 0px 0px;
`

const ResultLi = styled.li`
  // 글자
  font-weight: normal;
  font-size: inherit;

  // 리스트 dot 없애기
  list-style-type: none;

  // 패딩 조절
  padding: 10px 0px;

  // transition
  transition: background-color 0.1s;

  // 드래그 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  // 커서
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`

const HiglightSpan = styled.span`
  font-weight: bold;
  font-size: inherit;

  color: var(--custom-pink-1);
`
