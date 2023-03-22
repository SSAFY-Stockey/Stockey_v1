import * as Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import dayjs from "dayjs"
import styled from "styled-components"

const today = dayjs().endOf("day")
const aMonthAgo = dayjs().subtract(1, "month").subtract(1, "day").startOf("day")

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
  lang?: Highcharts.LangOptions
}

console.log(dayjs().valueOf())

const KeywordChart = () => {
  const options: HighchartsOptions = {
    chart: {
      type: "areaspline",
      zoomType: "x",
      panning: true,
      panKey: "shift",
      backgroundColor: "transparent",
    },
    lang: {
      resetZoom: "한 달로 보기",
    },
    title: {
      text: "키워드 언급량 (%)",
      align: "left",
      style: {
        fontSize: "1.6rem",
        color: "black",
        fontWeight: "bold",
      },
    },

    subtitle: {
      text: "당일 경제 뉴스 중 키워드가 언급된 기사의 비율",
      align: "left",
      style: {
        fontSize: "1.3rem",
        color: "black",
        fontWeight: "bold",
      },
    },

    xAxis: {
      type: "datetime",
      crosshair: true,
      min: aMonthAgo.valueOf(),
      max: today.valueOf(),
      tickInterval: 24 * 3600 * 1000,
      dateTimeLabelFormats: {
        day: "%m/%d",
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      gridLineWidth: 1,
      max: 100,
      min: 0,
      labels: {
        formatter: function (this: any) {
          return this.value + "%"
        },
      },
    },
    legend: {
      layout: "vertical",
      align: "left",
      verticalAlign: "top",
      x: 40,
      y: 70,
      floating: true,
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: "transparent",
      shadow: false,
      itemStyle: {
        color: "black",
        fontWeight: "bold",
        fontSize: "1.2rem",
      },
    },
    tooltip: {
      shared: false,
      formatter: function (this: any) {
        console.log(this)
        if (this.series.index === 0) {
          return (
            "<b>" +
            this.series.name +
            "</b><br/><br/>" +
            "<b>" +
            dayjs(this.point.x).format("MM월 DD일") +
            "</b> 기사의 <b>" +
            this.point.y +
            "%</b> "
          )
        } else {
          return (
            "<b>" + this.series.name + "</b><br/><br/>" + this.point.y + "원"
          )
        }
      },
    },
    series: [
      {
        name: "빅스텝",
        data: [
          29.9, 71.5, 96.4, 79.2, 44.0, 76.0, 35.6, 48.5, 16.4, 94.1, 54.4,
          29.9, 71.5, 96.4, 79.2, 44.0, 76.0, 35.6, 48.5, 16.4, 54.4, 29.9,
          71.5, 96.4, 79.2, 44.0, 76.0, 35.6, 48.5, 16.4,
        ].map((value, index) => {
          return [today.valueOf() - index * 24 * 3600 * 1000, value]
        }),
        color: "#2979ff",
        lineColor: "#2979ff",
        fillColor: {
          linearGradient: { x1: 0, x2: 1, y1: 0, y2: 1 },
          stops: [
            [0, "#99c2ff"],
            [1, "#ffa7d1"],
          ],
        },
        // linecap: "round",
      },
      {
        name: "삼성바이오로직스",
        data: [
          29.9, 16.4, 59.2, 34.0, 26.0, 35.6, 41.5, 19.4, 14.1, 54.4, 29.9,
          31.5, 46.4, 19.2, 44.0, 16.0, 21.5, 35.6, 48.5, 36.4, 64.4, 29.9,
          51.5, 16.4, 19.2, 44.0, 26.0, 35.6, 28.5, 16.4,
        ].map((value, index) => {
          return [today.valueOf() - index * 24 * 3600 * 1000, value]
        }),
        lineWidth: 4,
        lineColor: "#ffd600",
        // fillColor: "#fff59d",
        color: "#ffd600",
        fillColor: "transparent",
        // linecap: "square",
      },
    ],
    plotOptions: {
      areaspline: {
        // pointStart: 22,
        lineWidth: 2.5,
        linecap: "square",
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
        opacity: 0.4,
      },
    },
  }

  return (
    <ChartWrapper>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartWrapper>
  )
}
export default KeywordChart

const ChartWrapper = styled.div`
  align-items: center;
`
