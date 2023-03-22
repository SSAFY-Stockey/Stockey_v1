import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

interface DonutChartProps {
  data: {
    name: string
    y: number
  }[]
}

const IndustryMarketCapChart = ({ data }: DonutChartProps) => {
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
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default IndustryMarketCapChart
