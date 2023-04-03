import * as Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import styled from "styled-components"

export interface HighchartsOptions {
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
interface TopKeywordType {
  keywordCount: number
  keywordName: string
  keywordId: number
}
interface DataProps {
  totalNewsCount: number
  topKeywords: TopKeywordType[]
}

const KeywordBarGraph = ({ totalNewsCount, topKeywords }: DataProps) => {
  const chartData = topKeywords?.map((keyword, index) => {
    return {
      name: keyword.keywordName,
      y: keyword.keywordCount / totalNewsCount,
      rank: index + 1,
    }
  })

  const top_1 = chartData.splice(1, 1)
  chartData.splice(0, 0, top_1[0])

  const yAxisMax: number = Math.max(...chartData.map((word) => word.y)) + 150
  const options: HighchartsOptions = {
    title: { text: undefined },
    chart: {
      type: "column",
      backgroundColor: "var(--custom-background)",
      borderRadius: 20,
      height: "42%",
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
      tickWidth: 0,
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
        data: chartData,
      },
    ],
  }

  return (
    <GraphWrapper>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </GraphWrapper>
  )
}

export default KeywordBarGraph

const GraphWrapper = styled.div`
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
    font-size: 2.2rem;
    text-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    margin-bottom: 0;
  }
  & .custom-label .label-value {
    font-size: 1.6rem;
    color: #605d62;
    margin-block: 0.5rem;
  }
  & .custom-label .label-rank {
    font-size: 5rem;
    color: white;
    font-style: oblique;
    font-weight: extra-bold;
    text-shadow: rgba(0, 0, 0, 0.3) 0px 4px 4px;
    margin-block: 0
    `
