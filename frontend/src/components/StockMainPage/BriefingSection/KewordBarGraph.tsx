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

interface DataProps {
  name: string
  y: number
  rank: number
}

const KewordBarGraph = () => {
  const data: DataProps[] = [
    { name: "빅스텝", y: 74.84, rank: 2 },
    { name: "금리", y: 100, rank: 1 },
    { name: "연준", y: 34.84, rank: 3 },
  ]
  const yAxisMax: number = Math.max(...data.map((item) => item.y)) + 160
  const options: HighchartsOptions = {
    title: { text: undefined },
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    colors: [
      "var(--custom-orange-1)",
      "var(--custom-pink-1)",
      "var(--custom-purple-2)",
    ],
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: "category",
      crosshair: true,
      labels: {
        enabled: false,
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
      max: yAxisMax,
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        dataLabels: {
          enabled: true,
          align: "center",
          useHTML: true,
          className: "custom-label",
          formatter: function (this: any) {
            return (
              '<div><p class="label-title">' +
              this.point.name +
              '</p><p class="label-value">' +
              this.y.toFixed(1) +
              '%</p><p class="label-rank">' +
              this.point.rank +
              "</p></div>"
            )
          },
        },
        borderRadius: 10,
      },
      series: {
        borderWidth: 0,
      },
    },
    tooltip: {
      enabled: false,
    },
    series: [
      {
        colorByPoint: true,
        data: data,
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
  & .custom-label {
    text-align: center;
  }
  & .custom-label span {
  }
  & .custom-label .label-title {
    color: var(--custom-black);
    font-weight: bolder;
    font-size: 2.4rem;
    text-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    margin-bottom: 0;
  }
  & .custom-label .label-value {
    font-size: 1.6rem;
    color: #605d62;
    margin-top: 0.5rem;
  }
  & .custom-label .label-rank {
    font-size: 6.4rem;
    color: white;
    font-style: oblique;
    font-weight: extra-bold;
    text-shadow: rgba(0, 0, 0, 0.3) 0px 4px 4px;
    margin-block: 0
    `