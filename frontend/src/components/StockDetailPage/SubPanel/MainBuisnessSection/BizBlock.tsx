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
  position: relative;
  display: inline-block;
  margin-right: 48px;
  vertical-align: top;
`
