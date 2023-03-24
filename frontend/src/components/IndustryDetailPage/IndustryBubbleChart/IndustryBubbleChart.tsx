import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import styled from "styled-components"

require("highcharts/highcharts-more")(Highcharts)
require("highcharts/modules/pattern-fill")(Highcharts)

const IndustryBubbleChart = () => {
  const options: Highcharts.Options = {
    chart: {
      type: "packedbubble",
      height: "100%",
    },
    title: {
      text: "",
    },
    tooltip: {
      useHTML: true,
      pointFormat: "{point.value}",
    },
    plotOptions: {
      packedbubble: {
        minSize: "30%",
        maxSize: "80%",
        layoutAlgorithm: {
          splitSeries: false,
          gravitationalConstant: 0.02,
        },
        draggable: false,
        dataLabels: {
          enabled: true,
          format: "{series.name}",
          filter: {
            property: "y",
            operator: ">",
            value: 250,
          },
          style: {
            color: "black",
            textOutline: "none",
            fontWeight: "normal",
          },
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "네이버",
        data: [
          {
            name: "ASEAN",
            value: 400,
          },
        ],
        color: {
          pattern: {
            image: `${process.env.PUBLIC_URL}/logo_images/naver.png`,
            width: 20,
            height: 20,
          },
        },
        type: "packedbubble",
      },
      {
        name: "KOR ",
        data: [
          {
            name: "KOR",
            value: 600,
          },
        ],
        color: {
          pattern: {
            image:
              "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg",
            width: 60,
            height: 60,
          },
        },
        type: "packedbubble",
      },
      {
        name: "CHN ",
        data: [
          {
            name: "CHN",
            value: 40,
          },
        ],
        type: "packedbubble",
      },
      {
        name: "ISA ",
        data: [
          {
            name: "ISA",
            value: 1000,
          },
        ],
        type: "packedbubble",
      },
      {
        name: "ANZ ",
        data: [
          {
            name: "ANZ ",
            value: 140,
          },
        ],
        type: "packedbubble",
      },
      {
        name: "JP ",
        data: [
          {
            name: "JP1",
            value: 72,
          },
        ],
        type: "packedbubble",
      },
    ],
  }
  return (
    <ChartWrapper>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartWrapper>
  )
}

export default IndustryBubbleChart

const ChartWrapper = styled.div`
  width: 500px;
  height: 500px;
`
