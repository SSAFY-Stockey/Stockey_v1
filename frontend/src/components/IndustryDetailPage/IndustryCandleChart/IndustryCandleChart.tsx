import Highcharts from "highcharts/highstock"
import HighchartsReact from "highcharts-react-official"
import styled from "styled-components"

import { makedummyData } from "./dummyData"
import { useEffect, useState } from "react"

const IndustryCandleChart = () => {
  const dummyData = makedummyData(36)
  const [viewRange, setViewRange] = useState<number>(36)
  const [chartType, setChartType] = useState<string>("candlestick")
  const [series, setSeries] = useState<any>()

  useEffect(() => {
    if (viewRange > 20) {
      setChartType("spline")
    } else {
      setChartType("candlestick")
    }
  }, [viewRange])

  const options: Highcharts.Options = {
    chart: {
      type: chartType,
      height: "60%",
      backgroundColor: "transparent",
      borderRadius: 24,
    },
    title: {
      text: "",
    },
    tooltip: {},
    credits: {
      enabled: false,
    },
    navigator: {
      enabled: true,
      series: {
        type: "areaspline",
        data: dummyData,
        fillOpacity: 0.05,
        lineWidth: 1,
        marker: {
          enabled: false,
        },
      },
    },
    plotOptions: {
      candlestick: {
        showInLegend: false,
        showInNavigator: true,
      },
    },
    xAxis: {
      events: {
        afterSetExtremes: function (event) {
          setViewRange(event.max - event.min)
        },
      },
    },
    series: [
      {
        type: "candlestick",
        name: "삼성전자",
        data: dummyData,
      },
    ],
  }
  return (
    <AreaDiv>
      <TitleDiv>산업 내 시가총액 TOP 5</TitleDiv>
      <ChartWrapper>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </ChartWrapper>
    </AreaDiv>
  )
}

export default IndustryCandleChart

const ChartWrapper = styled.div`
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  background-color: var(--custom-background);
`

const AreaDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const TitleDiv = styled.div`
  height: 2.4rem;
  width: auto;
  padding: 0px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.4rem;
  /* or 83% */

  display: flex;
  align-items: center;
  letter-spacing: 0.1px;
`
