import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useSetRecoilState } from "recoil"
import { clickedIndustryInfoState } from "../../../../store/store"
import styled from "styled-components"

interface DonutChartProps {
  data: {
    name: string
    y: number
  }[]
}

const IndustryMarketCapChartArea = ({ data }: DonutChartProps) => {
  const setClickedIndustryInfo = useSetRecoilState<{
    clickedIndustryName: string
    clickedChartColor: string
  }>(clickedIndustryInfoState)

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
        center: ["50%", 90],
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
            // selected가 true면 default 상태로 돌리고 false면 select 효과 적용
            if (event.point.selected) {
            }
            setClickedIndustryInfo((info) => {
              let newInfo: {
                clickedIndustryName: string
                clickedChartColor: string
              }
              if (event.point.selected) {
                newInfo = {
                  clickedIndustryName: "전체",
                  clickedChartColor: "var(--custom-black)",
                }
              } else {
                newInfo = { ...info }
                newInfo.clickedIndustryName = event.point.name
                if (typeof event.point.color === "string") {
                  newInfo.clickedChartColor = event.point.color
                }
              }
              return newInfo
            })
            event.point.select(!event.point.selected)
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
      y: -12,
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
