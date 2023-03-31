import styled from "styled-components"

const IndustryOverall = () => {
  const description = `컨텐츠와 정보 생산 또는 독립적인 플랫폼을 통해 수익을 얻는 회사. 
  검색엔진, 소셜 미디어 및 네트워킹 플랫폼, 온라인 벼룩시장 및 온라인 리뷰 회사 포함. 
  인터넷 및 다이렉트 마케팅 소매로 분류 된 온라인 마켓플레이스를 운영하는 회사 제외`
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
        <DescriptionDiv>{description}</DescriptionDiv>
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
