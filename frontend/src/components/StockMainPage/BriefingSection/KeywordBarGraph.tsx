import * as Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import styled from "styled-components"
import { useKeywordRank } from "../../../hooks/useKeywordRank"
import { KeywordRankParamsType } from "../../../hooks/useKeywordRank"
import { commonParamsState } from "../../../stores/StockMainAtoms"
import { useRecoilValue } from "recoil"
import { useRandomStock } from "../../../hooks/useRandomStock"
import { selectedStockIdxState } from "../../../stores/StockMainAtoms"
import { Suspense } from "react"
import LoadingComponent from "../../common/Loading/LoadingComponent"

interface KeywordType {
  keywordName: string
  keywordCount: number
  keywordId: number
}

interface ChartDataType {
  name: string
  y: number
  rank: number
}

const KeywordBarGraph = () => {
  const { data: randomStockData } = useRandomStock(3) // 랜덤 주식 데이터
  const selectedStockIdx = useRecoilValue(selectedStockIdxState) // 현재 선택된 주식의 인덱스
  const commonParams = useRecoilValue(commonParamsState)
  export const keywordRankParams: KeywordRankParamsType = {
    topN: 3,
    typeId: randomStockData?.[selectedStockIdx]?.id,
    ...commonParams,
  }
  // keyword 순위 읽어오기
  const { data: keywordRankData, isLoading } = useKeywordRank(keywordRankParams)
  console.log(keywordRankData)
  const { totalNewsCount, topKeywords } = { ...keywordRankData }
  const chartData = topKeywords.map((keyword: KeywordType, index: number) => {
    return {
      name: keyword.keywordName,
      y: (keyword.keywordCount / totalNewsCount) * 100,
      rank: index + 1,
    }
  })
  const top_1 = chartData.splice(1, 1)
  chartData.splice(0, 0, top_1[0])
  console.log(chartData)
  const yAxisMax: number =
    Math.max(...chartData.map((word: ChartDataType) => word.y)) + 150
  console.log(yAxisMax, "yAxisMax")

  const options: Highcharts.Options = {
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
      max: isLoading ? 200 : yAxisMax,
      // max: yAxisMax,
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
        name: "Keyword",
        type: "column",
        data: isLoading ? [] : chartData,
        colorByPoint: true,
      },
    ],
  }

  return (
    <Suspense fallback={<LoadingComponent />}>
      <GraphWrapper>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </GraphWrapper>
    </Suspense>
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
