import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import styled from "styled-components"
import { DonutChartDataType } from "../../../../hooks/useIndustryMarketCapList"
import { useEffect, useState } from "react"

interface DonutChartProps {
  chartData: DonutChartDataType
  handleClickedIndustryInfo: Function
}

const IndustryMarketCapChartArea = ({
  chartData,
  handleClickedIndustryInfo,
}: DonutChartProps) => {
  const handleClickChartPoint = (event: any) => {
    let clickedIndustryId: string | undefined
    let clickedIndustryName: string
    let clickedChartColor: string
    const defaultIndustryName = "전체"
    const defaultChartColor = "var(--custom-black)"

    if (event.point.options.id !== "0") {
      event.point.select(!event.point.selected)
      if (event.point.selected) {
        clickedIndustryId = event.point.options.id
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
      const clickedIndustryInfo = {
        id: clickedIndustryId,
        name: clickedIndustryName,
        color: clickedChartColor,
      }
      handleClickedIndustryInfo(clickedIndustryInfo)
    }
  }

  const [chartWidth, setChartWidth] = useState<number>(0)
  const [chartHeight, setChartHeight] = useState<number>(0)

  const container = document.getElementById("donut-chart")
  useEffect(() => {
    if (container) {
      setChartHeight(Math.min(container.clientHeight, container.clientWidth))
    }
  }, [container])

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      height: chartHeight,
    },
    title: {
      text: "",
    },
    tooltip: {
      pointFormat: "<b>{point.percentage:.1f}%</b>",
    },
    colors: [
      "var(--custom-purple-2)",
      "var(--custom-green-2)",
      "var(--custom-pink-2)",
      "var(--custom-orange-2)",
      "var(--custom-yellow-1)",
      "var(--custom-purple-3)",
      "var(--custom-green-3)",
      "#BBBAC5",
    ],
    plotOptions: {
      pie: {
        size: "100%",
        // center: ["50%", "55%"],
        innerSize: "40%",
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          distance: -30,
          style: {
            fontSize: "10px",
            fontWeight: "normal",
            color: "white",
          },
        },
        showInLegend: true,
        cursor: "pointer",
      },
      series: {
        point: {
          events: {
            click: handleClickChartPoint,
          },
        },
      },
    },
    series: [
      {
        name: "DonutChart",
        data: chartData,
        type: "pie",
      },
    ],
    legend: {
      enabled: true,
      backgroundColor: "white",
      borderRadius: 24,
      maxHeight: chartHeight * 0.2,
      align: "left",
      verticalAlign: "bottom",
      alignColumns: false,
      width: "100%",
      padding: 12,
      y: 12,
    },
    credits: {
      enabled: false,
    },
  }

  return (
    <AreaDiv id="donut-chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </AreaDiv>
  )
}

export default IndustryMarketCapChartArea

const AreaDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px;
`
