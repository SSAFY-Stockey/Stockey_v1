import styled from "styled-components"

interface Props {
  subTitle: string
  description: string
}

const SubTitle = ({ subTitle, description }: Props) => {
  return (
    <>
      <SubTitleDiv>
        {subTitle} <DescriptionSpan>{description}</DescriptionSpan>
      </SubTitleDiv>
    </>
  )
}

export default SubTitle

const SubTitleDiv = styled.div`
  // font
  font-size: 2.4rem;
  font-weight: bold;
`

const DescriptionSpan = styled.span`
  // font
  font-size: 1.2rem;

  // marign
  margin-left: 12px;
`
