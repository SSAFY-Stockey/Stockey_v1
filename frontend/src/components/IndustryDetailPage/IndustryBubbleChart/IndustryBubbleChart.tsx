import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import styled from "styled-components"

require("highcharts/highcharts-more")(Highcharts)
require("highcharts/modules/pattern-fill")(Highcharts)

const IndustryBubbleChart = () => {
  const options: Highcharts.Options = {
    chart: {
      type: "packedbubble",
      height: "100%",
    },
    title: {
      text: "",
    },
    tooltip: {
      useHTML: true,
      pointFormat: "시가총액: {point.value} 원",
    },
    plotOptions: {
      packedbubble: {
        minSize: "15%",
        maxSize: "50%",
        color: "white",
        layoutAlgorithm: {
          splitSeries: true,
          gravitationalConstant: 0.0002,
        },
        draggable: false,
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          filter: {
            property: "y",
            operator: ">",
            value: 250,
          },
          style: {
            color: "black",
            textOutline: "none",
            fontWeight: "normal",
          },
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "네이버",
        data: [
          {
            name: "네이버",
            value: 45,
          },
        ],
        type: "packedbubble",
        marker: {
          symbol: `url(${process.env.PUBLIC_URL}/logo_images/naver.png)`,
        },
      },
      {
        name: "카카오",
        data: [
          {
            name: "카카오",
            value: 25,
          },
        ],
        type: "packedbubble",
        marker: {
          symbol:
            "url(https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png)",
        },
      },
      {
        name: "라인",
        data: [
          {
            name: "라인",
            value: 14,
          },
        ],
        type: "packedbubble",
        marker: {
          symbol: `url(https://play-lh.googleusercontent.com/74iMObG1vsR3Kfm82RjERFhf99QFMNIY211oMvN636_gULghbRBMjpVFTjOK36oxCbs)`,
        },
      },
      {
        name: "쿠팡",
        data: [
          {
            name: "쿠팡",
            value: 15,
          },
        ],
        type: "packedbubble",
        marker: {
          symbol:
            "url(https://mblogthumb-phinf.pstatic.net/20160902_185/ppanppane_1472800307580XUbQa_PNG/%C4%ED%C6%CE%B7%CE%B0%ED_%282%29.png?type=w800)",
        },
      },
      {
        name: "배민",
        data: [
          {
            name: "배민",
            value: 7,
          },
        ],
        type: "packedbubble",
        marker: {
          symbol: `url(https://post-phinf.pstatic.net/MjAxODEyMThfODIg/MDAxNTQ1MTE3MTgyMTI0.XhPj48MgFKfn52DFErBasuyh-oOUdPRVj3x3Mvukg5sg.5DX71Wmg2s1sKYgdbF-kYIfy6foyUY69ktk_mhJ263Ug.PNG/23795024_1606638182692820_1675214701801471719_n.png?type=w1200)`,
        },
      },
    ],
  }
  return (
    <ChartWrapper>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartWrapper>
  )
}

export default IndustryBubbleChart

const ChartWrapper = styled.div`
  width: 500px;
  height: 500px;
`
