import * as Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import styled from "styled-components"

interface HighchartsOptions {
  // chart?: Highcharts.ChartOptions
  chart?: any
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

const KeywordChart = () => {
  const options: HighchartsOptions = {
    chart: {
      type: "area",
      zoomType: "x",
      panning: true,
      panKey: "shift",
    },
    title: {
      text: "키워드 언급량 (%)",
    },

    subtitle: {
      text: "당일 경제 뉴스 중 키워드가 언급된 기사의 비율",
    },

    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    series: [
      {
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
      },
    ],
    plotOptions: {
      area: {
        pointStart: 1940,
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
export default KeywordChart
