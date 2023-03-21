const SearchList = () => {
  // 더미 데이터
  const SampleArray: string[] = [
    "삼성 물산",
    "삼성 전자",
    "삼성 전기",
    "삼성 SDI",
    "삼성 바이오로직스",
  ]

  return (
    <ul>
      {SampleArray.map((item, key) => {
        return <li key={item + key}>{item}</li>
      })}
    </ul>
  )
}

export default SearchList
