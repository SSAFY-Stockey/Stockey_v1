import { useState } from "react"
import DefaultBizBlock from "./DefaultBizBlock"
import ExpandedBizBlock from "./ExpandedBizBlock"
import styled from "styled-components"

interface Props {
  type: string
}

const BizBlock = ({ type }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <BizBlockDiv
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
    >
      {isHovered ? (
        <ExpandedBizBlock type={type} />
      ) : (
        <DefaultBizBlock type={type} />
      )}
    </BizBlockDiv>
  )
}

export default BizBlock

const BizBlockDiv = styled.div<{ isHovered: boolean }>`
  width: -webkit-fill-available;
  margin-right: ${(props) => (props.isHovered ? "-12px" : "24px")};
  margin-left: ${(props) => (props.isHovered ? "-100px" : "0px")};
  z-index: ${(props) => (props.isHovered ? 2 : 1)};
  &:hover {
    transition: all 0.3s ease-out;
  }
`
