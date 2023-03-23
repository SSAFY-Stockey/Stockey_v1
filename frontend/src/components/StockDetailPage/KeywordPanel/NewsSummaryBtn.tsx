import styled from "styled-components"
import ReactDOM from "react-dom/client"

interface Props {
  keyphrase: string
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>
  index: number
  className: "selected" | "not-selected"
}

const NewsSummaryBtn = ({
  keyphrase,
  setSelectedIndex,
  index,
  className,
}: Props) => {
  return (
    <BtnDiv className={className} onClick={() => setSelectedIndex(index)}>
      {keyphrase}
    </BtnDiv>
  )
}

export default NewsSummaryBtn

const BtnDiv = styled.div`
  border-radius: 20px;
  font-size: 2rem;
  font-weight: bold;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &.selected {
    background-color: var(--custom-mint);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: var(--custom-black);
    font-weight: bolder;
    font-size: 2.2rem;
  }
  &.not-selected {
    background-color: white;
    border: 4px solid #f4eff4;
    color: #979797;
    &:hover {
      color: var(--custom-black);
    }
  }
`
