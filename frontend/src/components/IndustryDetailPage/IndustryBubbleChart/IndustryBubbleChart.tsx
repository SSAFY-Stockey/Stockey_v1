import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

require("highcharts/highcharts-more")(Highcharts)

const IndustryBubbleChart = () => {
  const navigate = useNavigate()

  const options: Highcharts.Options = {
    chart: {
      type: "packedbubble",
      height: "60%",
      backgroundColor: "transparent",
      borderRadius: 24,
    },
    title: {
      text: "",
    },
    tooltip: {
      useHTML: true,
      pointFormat: "시가총액: {point.value} 원",
    },
    plotOptions: {
      packedbubble: {
        minSize: "60%",
        maxSize: "120%",
        color: "var(--custom-background)",
        layoutAlgorithm: {
          splitSeries: false,
          bubblePadding: 30,
          gravitationalConstant: 0.0005,
          maxSpeed: 0.5,
        },
        showInLegend: false,
        draggable: false,
        dataLabels: {
          enabled: true,
          useHTML: true,
          format:
            '<img style="clip-path: circle(50% at 50% 50%); cursor: pointer;" width="{point.radius}" height="{point.radius}" src="{process.env.PUBLIC_URL}/logo_images/{point.name}.png" alt="#" />',
        },
        marker: {
          fillColor: "white",
          fillOpacity: 1,
          lineColor: "var(--custom-purple-3)",
          lineWidth: 2,
        },
        cursor: "pointer",
        events: {
          click: function (event) {
            navigate(`/stock/${event.point.name}`)
          },
        },
        states: {
          inactive: {
            opacity: 0.4,
          },
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "삼성전자",
        data: [
          {
            name: "삼성전자",
            value: 45,
          },
        ],
        type: "packedbubble",
      },
      {
        name: "SK하이닉스",
        data: [
          {
            name: "SK하이닉스",
            value: 25,
          },
        ],
        type: "packedbubble",
      },
      {
        name: "naver",
        data: [
          {
            name: "naver",
            value: 14,
          },
        ],
        type: "packedbubble",
      },
      {
        name: "롯데케미칼",
        data: [
          {
            name: "롯데케미칼",
            value: 15,
          },
        ],
        type: "packedbubble",
      },
      {
        name: "KB금융",
        data: [
          {
            name: "KB금융",
            value: 7,
          },
        ],
        type: "packedbubble",
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

export default IndustryBubbleChart

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