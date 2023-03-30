import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import drilldown from "highcharts/modules/drilldown"
import { useEffect } from "react"
import styled from "styled-components"
import {
  defaultDataType,
  drilldownDataType,
} from "../../../../hooks/useIndustryMarketCapList"

interface DonutChartProps {
  chartData: [defaultDataType, drilldownDataType]
  handleClickedIndustryInfo: Function
}

drilldown(Highcharts)

const IndustryMarketCapChartArea = ({
  chartData,
  handleClickedIndustryInfo,
}: DonutChartProps) => {
  const defaultData = chartData[0]
  const drilldownData = chartData[1]

  useEffect(() => {}, [])

  const handleClickChartPoint = (
    event: Highcharts.PointInteractionEventObject
  ) => {
    // const clickedIndustryInfo = {
    //     id: event,
    //     name: clickedIndustryName,
    //     color: clickedChartColor,
    //   }
    //   handleClickedIndustryInfo(clickedIndustryInfo)
    // if (event.point.options.id !== "0") {
    //   let clickedIndustryId: string | undefined
    //   let clickedIndustryName: string
    //   let clickedChartColor: string
    //   const defaultIndustryName = "전체"
    //   const defaultChartColor = "var(--custom-black)"
    //   if (event.point.selected) {
    //     clickedIndustryId = event.point.options.id
    //     clickedIndustryName = event.point.name
    //     if (typeof event.point.color === "string") {
    //       clickedChartColor = event.point.color
    //     } else {
    //       clickedChartColor = defaultChartColor
    //     }
    //   } else {
    //     clickedIndustryName = defaultIndustryName
    //     clickedChartColor = defaultChartColor
    //   }
    // const clickedIndustryInfo = {
    //   id: clickedIndustryId,
    //   name: clickedIndustryName,
    //   color: clickedChartColor,
    // }
    // handleClickedIndustryInfo(clickedIndustryInfo)
    // }
  }

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
        // allowPointSelect: true,
        // events: {
        //   click: handleClickChartPoint,
        // },
        cursor: "pointer",
      },
      series: {
        allowPointSelect: true,
        point: {
          events: {
            select: handleClickChartPoint,
            // unselect:(event) => {}
          },
        },
      },
    },
    series: [
      {
        name: "Percentage",
        data: defaultData,
        type: "pie",
      },
    ],
    drilldown: {
      series: [
        {
          id: "기타",
          name: "기타",
          type: "pie",
          data: drilldownData,
        },
      ],
    },
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
      <HighchartsReact id="chart" highcharts={Highcharts} options={options} />
    </AreaDiv>
  )
}

export default IndustryMarketCapChartArea

const AreaDiv = styled.div`
  width: 240px;
  height: 336px;
  padding: 0px;
`
