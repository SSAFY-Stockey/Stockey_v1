import styled from "styled-components"
import KeyphraseListItem from "./KeyphraseListItem"
import { useRecoilValue } from "recoil"
import { selectedKeywordIdxState } from "../../../stores/SelectedIdxAtoms"

const KeyphraseList = () => {
  const selectedKeywordIdx = useRecoilValue(selectedKeywordIdxState) // 현재 선택된 키워드의 인덱스
  const colors: string[] = ["orange", "pink", "purple"]
  const keyphrases: string[] = [
    "금리 인상",
    "대출 규제",
    "부동산 하락",
    "연준 발표",
  ]
  return (
    <KeyphraseContainer selectedIdx={selectedKeywordIdx}>
      {keyphrases.map((phrase, index) => {
        return (
          <KeyphraseListItem
            keyphrase={phrase}
            backgroundColor={`var(--custom-${colors[selectedKeywordIdx]}-${
              index + 1
            })`}
            rank={index + 1}
          />
        )
      })}
    </KeyphraseContainer>
  )
}

export default KeyphraseList

const KeyphraseContainer = styled.div<{ selectedIdx: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px 0px;
  width: 100%;
  background-color: white;
  border-radius: 36px;
  position: relative;
  height: 24vh;

  // 말풍선 꼬리
  ::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: ${({ selectedIdx }) => 50 + (selectedIdx - 1) * 32}%;
    width: 0;
    height: 0;
    border: 2em solid transparent;
    border-top-color: #ffffff;
    border-bottom: 0;
    margin-left: -1.5em;
    margin-bottom: -1.5em;
    z-index: 1;
  }
`
