import styled from "styled-components"
import IndustryMarketCapChart from "./IndustryMarketCapChart"

const IndustryMarketCapChartArea = () => {
  const data = [
    { name: "IT", y: 61.41 },
    { name: "반도체", y: 10.85 },
    { name: "자동차", y: 7.67 },
    { name: "금융", y: 5.18 },
    { name: "Other", y: 14.89 },
  ]
  return (
    <AreaDiv>
      <IndustryMarketCapChart data={data} />
    </AreaDiv>
  )
}

export default IndustryMarketCapChartArea

const AreaDiv = styled.div`
  width: 240px;
  height: 336px;
  padding: 0px;
`
