// import { readFileSync } from "fs"
import { ChartWrapper } from "../../SubPanel/KeywordPanel/KeywordChart"
import * as Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import highchartsStock from "highcharts/modules/stock"
import dayjs from "dayjs"
import { useStockPriceList } from "../../../../hooks/useStockPriceList"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Spinner from "../../../common/Spinner/Spinner"

highchartsStock(Highcharts)
Highcharts.setOptions({
  lang: {
    rangeSelectorZoom: "",
    shortMonths: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    weekdays: ["일", "월", "화", "수", "목", "금", "토"],
    rangeSelectorTo: "⁓",
  },
})

interface ChartData {
  DateTime: string
  AAPL: number
}

const StockPriceChart = () => {
  //여기
  const params = useParams()
  const stockId = Number(params?.stockId)
  const { isLoading, data: stockPriceData } = useStockPriceList(
    stockId ? stockId : 0
  )

  const [isCandle, setIsCandle] = useState<boolean>(false)
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({})
  useEffect(() => {
    setChartOptions({
      chart: {
        borderColor: "var(--custom-background)",
        borderRadius: 20,
        borderWidth: 2,
        margin: 20,
      },
      xAxis: {
        type: "datetime",
        dateTimeLabelFormats: {
          day: "%b %e일",
          week: "%b %e일",
          month: "%y년 %b",
          year: "%Y",
        },
        labels: {
          step: 1,
        },
      },
      yAxis: {
        type: "linear",
      },
      credits: {
        enabled: false,
      },
      scrollbar: {
        enabled: false,
      },
      rangeSelector: {
        allButtonsEnabled: false,
        buttons: [
          {
            type: "day",
            count: 1,
            text: "1일",
          },
          {
            type: "week",
            count: 1,
            text: "1주",
          },
          {
            type: "month",
            count: 1,
            text: "1개월",
          },
          {
            type: "year",
            count: 1,
            text: "1년",
          },
          {
            type: "all",
            text: "전체",
          },
        ],
        selected: 5,
        inputDateFormat: "%Y.%m.%d",
        inputEditDateFormat: "%Y.%m.%d",
        inputBoxHeight: 20,
        inputStyle: {
          color: "var(--custom-black)",
          fontSize: "1.4rem",
          fontWeight: "bold",
          borderWidth: 0,
        },
        buttonTheme: {
          width: 40,
          r: 8,
          style: {
            color: "var(--custom-black)",
            fontWeight: "bold",
            borderWidth: 0,
          },
          states: {
            select: {
              fill: "#D1F7EB",
            },
          },
        },
      },
      tooltip: {
        split: false,
        valueDecimals: 2,
        valueSuffix: "원",
        dateTimeLabelFormats: {
          day: "%Y년 %m월 %d일",
        },
      },
      navigator: {
        enabled: true,
        handles: {
          backgroundColor: "var(--custom-purple-2)",
          borderColor: "var(--custom-black)",
          height: 20,
        },
        height: 60,
        margin: 30,
        maskFill: "rgba(212, 193, 255, 0.4)",
      },

      // 나중에 data fetch 시에는 data 속성 활용
      data: {
        // URL: "https://demo-live-data.highcharts.com/time-data.csv",
        // enablePolling: true,
        // csvURL: "../../../sample_data/aapl-stock-price.csv",
        // enablePolling: true,
        // dataRefreshRate: 1,
      },
      plotOptions: {
        line: {
          cursor: "pointer",
          events: {
            // drag: function (this: any, event: any) {
            //   // this.xAxis.plotLinesAndBands[0].options.from = event.point.x
            //   console.log(this.series.flags)
            //   // this.chart.redraw()
            // }, // ??
            // click: function (this: any, event: any) {
            //   // this.xAxis.plotLinesAndBands[0].options.from = event.point.x
            //   console.log(this.series.flags)
            //   this.chart.redraw()
            // },
          },
          showInLegend: false,
          showInNavigator: true,
        },
        candlestick: {
          showInLegend: false,
          showInNavigator: true,
        },
      },
      series: [
        {
          id: ,
          name: "NAVER",
          type: "line",
          data: stockPriceData,
          color: "var(--custom-green-1)",
          shadow: true,
        },
        // {
        //   type: "flags",
        //   name: "Flags on series",
        //   data: [
        //     {
        //       x: Date.UTC(2017, 6, 1),
        //       title: "시작",
        //     },
        //     {
        //       x: Date.UTC(2017, 8, 1),
        //       title: "끝",
        //     },
        //   ],
        //   onSeries: "NAVER",
        //   shape: "squarepin",
        //   // cursor: "pointer",
        //   // dragDrop: {
        //   //   draggableX: true,
        //   //   draggableY: false,
        //   // },
        // },
      ],
    })
  }, [stockPriceData])

  const handleChartType = () => {
    if (!isCandle) {
      setChartOptions({
        series: [
          {
            type: "candlestick",
          },
        ],
      })
    } else {
      setChartOptions({
        series: [
          {
            type: "line",
          },
        ],
      })
    }
    setIsCandle(!isCandle)
  }

  return (
    <ChartWrapper>
      <button onClick={handleChartType}>
        {isCandle ? "간단히" : "자세히"}
      </button>
      {isLoading ? (
        <Spinner />
      ) : (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={chartOptions}
        />
      )}
    </ChartWrapper>
  )
}

export default StockPriceChart
