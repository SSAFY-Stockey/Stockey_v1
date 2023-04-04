import { useSetRecoilState } from "recoil"
import styled from "styled-components"
import { myKeywordState } from "../../../stores/MyPageAtoms"

interface Props {
  id: number
  name: string
  description: string | null
}

const KeywordItem = ({ props }: { props: Props }) => {
  const setMyKeyword = useSetRecoilState(myKeywordState)

  const handleClick = () => {
    setMyKeyword(props.name)
  }

  return (
    <>
      <ItemDiv onClick={handleClick}>
        <div>{props.name}</div>
      </ItemDiv>
    </>
  )
}

export default KeywordItem

const ItemDiv = styled.div`
  // size
  width: 45%;
  height: 40px;

  // flex-box
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5%;

  // margin & padding
  padding: 24px;

  // border-radius
  border-radius: 12px;

  //cursor
  cursor: pointer;

  background-color: rgb(0, 0, 0, 0);

  // font
  font-size: 2rem;
  font-weight: bold;
  color: var(--custom-black);

  // box-shadow
  box-shadow: 1px 2px 1px;
`
