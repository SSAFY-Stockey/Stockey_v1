import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import styled from "styled-components"

interface DonutChartProps {
  data: {
    name: string
    y: number
  }[]
  setClickedIndustryInfo: (name: string, color: string) => void
}

const IndustryMarketCapChartArea = ({
  data,
  setClickedIndustryInfo,
}: DonutChartProps) => {
  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      width: 240,
      height: 336,
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    tooltip: {
      pointFormat: "<b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        size: 220,
        center: ["50%", "50%"],
        innerSize: "40%",
        dataLabels: {
          enabled: true,
          format: "{point.name}: {point.percentage:.1f} %",
          distance: -30,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        showInLegend: true,
        events: {
          click: function (event) {
            event.point.select(!event.point.selected)

            let clickedIndustryName: string
            let clickedChartColor: string
            const defaultIndustryName = "전체"
            const defaultChartColor = "var(--custom-black)"

            if (event.point.selected) {
              clickedIndustryName = event.point.name
              if (typeof event.point.color === "string") {
                clickedChartColor = event.point.color
              } else {
                clickedChartColor = defaultChartColor
              }
            } else {
              clickedIndustryName = defaultIndustryName
              clickedChartColor = defaultChartColor
            }

            setClickedIndustryInfo(clickedIndustryName, clickedChartColor)
          },
        },
      },
    },
    series: [
      {
        name: "Percentage",
        data: data,
        type: "pie",
      },
    ],
    legend: {
      backgroundColor: "white",
      borderRadius: 24,
      maxHeight: 72,
      align: "left",
      verticalAlign: "bottom",
      alignColumns: false,
      width: "100%",
      padding: 12,
      y: 8,
    },
    credits: {
      enabled: false,
    },
  }
  return (
    <AreaDiv>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </AreaDiv>
  )
}

export default IndustryMarketCapChartArea

const AreaDiv = styled.div`
  width: 240px;
  height: 336px;
  padding: 0px;
`
