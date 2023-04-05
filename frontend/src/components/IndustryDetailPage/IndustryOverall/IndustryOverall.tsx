import styled from "styled-components"

interface Props {
  industryInfo: {
    id: number
    name: string
    description: string | null
    category: string
  }
}

const IndustryOverall = ({ industryInfo }: Props) => {
  return (
    <AreaDiv>
      <OverallDiv>
        <ImgDiv>
          <img
            src="/industryLogos/sampleIndustryLogo.png"
            alt="#"
            width="100%"
          />
        </ImgDiv>
        <DescriptionDiv>{industryInfo.description}</DescriptionDiv>
      </OverallDiv>
    </AreaDiv>
  )
}

export default IndustryOverall

const AreaDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const OverallDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: top;
  padding: 24px 18px;
  gap: 18px;
  background: #eaddff;
  border-radius: 24px;
`

const ImgDiv = styled.div`
  width: 35%;
  border-radius: 50%;
`

const DescriptionDiv = styled.div`
  flex-grow: 1;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  white-space: pre-line;
`
