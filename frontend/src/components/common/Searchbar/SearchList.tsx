import SampleStock from "./SampleList"
import { useState, useEffect } from "react"

type SearchListProps = {
  page: string
  value: string | undefined
}

const SearchList = ({ page, value }: SearchListProps) => {
  // 연관 검색어 저장 array
  const [searchResult, setSearchResult] = useState<string[]>([])

  // 입력값이 바뀔 때, 검색 결과 데이터를 갱신
  useEffect(() => {
    // page = "stock" or "industry" 일 때 탐색 함수
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

  // 검색 결과 포함 내역

  return (
    <ul>
      {searchResult.map((item, key) => {
        return <li key={item + key}>{item}</li>
      })}
    </ul>
  )
}

export default SearchList
