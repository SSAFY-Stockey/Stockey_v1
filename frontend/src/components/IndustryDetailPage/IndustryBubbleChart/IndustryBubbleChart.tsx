import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

require("highcharts/highcharts-more")(Highcharts)
require("highcharts/modules/pattern-fill")(Highcharts)

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
        maxSize: "110%",
        color: "var(--custom-background)",
        layoutAlgorithm: {
          splitSeries: false,
          bubblePadding: 40,
          gravitationalConstant: 0.0005,
          maxSpeed: 0.5,
        },
        showInLegend: false,
        draggable: false,
        dataLabels: {
          enabled: true,
          // format: "{point.name}",
          style: {
            color: "black",
            textOutline: "none",
            fontWeight: "normal",
            width: 100,
            height: 100,
          },
          useHTML: true,
          format:
            '<img width="{point.radius}" height="{point.radius}" src="{process.env.PUBLIC_URL}/logo_images/{point.name}.png" alt="#" />',
        },
        events: {
          click: function (event) {
            console.log(event)
            navigate(`/stock/${event.point.name}`)
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
        // marker: {
        //   symbol: `url(${process.env.PUBLIC_URL}/logo_images/삼성전자.png)`,
        // },
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
        // marker: {
        //   symbol: `url(${process.env.PUBLIC_URL}/logo_images/SK하이닉스.png)`,
        // },
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
        // marker: {
        //   symbol: `url(${process.env.PUBLIC_URL}/logo_images/naver.png)`,
        // },
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
        // marker: {
        //   symbol: `url(${process.env.PUBLIC_URL}/logo_images/롯데케미칼.png)`,
        // },
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
        // marker: {
        //   symbol: `url(${process.env.PUBLIC_URL}/logo_images/KB금융.png)`,
        // },
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
  background-color: var(--custom-gradient-violet);
`

const AreaDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0px 12px;
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
