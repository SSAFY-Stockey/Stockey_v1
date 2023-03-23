import styled from "styled-components"
import IndustryMarketCapChart from "./IndustryMarketCapChart"

const IndustryMarketCapChartArea = () => {
  const data = [
    { name: "IT", y: 61.41, color: "var(--custom-pink-1)" },
    { name: "반도체", y: 10.85, color: "var(--custom-orange-1)" },
    { name: "자동차", y: 7.67, color: "var(--custom-purple-1)" },
    { name: "금융", y: 5.18, color: "var(--custom-green-1)" },
    { name: "Other", y: 14.89, color: "gray" },
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
