import * as Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import styled from "styled-components"

interface HighchartsOptions {
  chart?: Highcharts.ChartOptions
  title?: Highcharts.TitleOptions
  subtitle?: Highcharts.SubtitleOptions
  // xAxis?: Highcharts.XAxisOptions
  xAxis?: any
  yAxis?: Highcharts.YAxisOptions
  legend?: Highcharts.LegendOptions
  // series?: Highcharts.SeriesOptionsType[]
  series?: any
  plotOptions?: Highcharts.PlotOptions
  tooltip?: Highcharts.TooltipOptions
  credits?: Highcharts.CreditsOptions
  exporting?: Highcharts.ExportingOptions
  colors?: string[]
  responsive?: Highcharts.ResponsiveOptions
  accessibility?: Highcharts.AccessibilityOptions
  events?: Highcharts.ChartEventsOptions
}

const KewordBarGraph = () => {
  const options: HighchartsOptions = {
    title: { text: undefined },
    chart: { type: "column", backgroundColor: "transparent" },
    colors: ["#FF9D6A", "#FF6F9D", "#D0BCFF"],
    xAxis: {
      type: "category",
      crosshair: true,
      labels: {
        style: {
          fontSize: "15px",
          color: "black",
          fontWeight: "bold",
        },
        reserveSpace: true,
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      gridLineWidth: 0,
      labels: {
        enabled: false,
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        dataLabels: {
          enabled: true,
        },
        borderRadius: 10,
      },
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
          verticalAlign: "top",
          style: {
            fontSize: "12px",
          },
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    series: [
      {
        colorByPoint: true,
        data: [
          {
            name: "빅스텝",
            y: 34.84,
          },
          {
            name: "금리",
            y: 63.06,
          },
          {
            name: "공매도",
            y: 19.18,
          },
        ],
      },
    ], // 데이터가 처음엔 비어았다.
  }

  return (
    <StyledDiv>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </StyledDiv>
  )
}

export default KewordBarGraph

const StyledDiv = styled.div`
  width: 100%;
  align-items: center;
`
