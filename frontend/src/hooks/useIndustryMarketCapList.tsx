import { useQuery } from "react-query"
import customAxios from "../utils/customAxios"

const axios = customAxios()

const fetchIndustryMarketCapList = () => {
  return axios.get(`/industry/marketcap`)
}

export const useIndustryMarketCapList = () => {
  return useQuery("industryMarketCapList", fetchIndustryMarketCapList, {
    staleTime: 5 * 60 * 1000,
    select,
    onError,
    refetchOnWindowFocus: false,
  })
}

export type defaultDataType = {
  id: string
  name: string
  y: number
  drilldown: string | undefined
}[]

export type drilldownDataType = {
  id: string
  name: string
  y: number
}[]

const select = (response: any) => {
  const rawData = response.data.data

  let defaultData: defaultDataType = []

  let drilldownData: drilldownDataType = []

  let drilldownItem = {
    id: "0",
    name: "기타",
    y: 0,
    drilldown: "기타",
  }
  for (let i = 0; i < rawData.length; i++) {
    if (i < 10) {
      const newDefaultData = {
        id: rawData[i].id,
        name: rawData[i].name,
        y: rawData[i].sum,
        drilldown: undefined,
      }
      defaultData.push(newDefaultData)
    } else {
      const newDrilldownData = {
        id: rawData[i].id,
        name: rawData[i].name,
        y: rawData[i].sum,
      }
      drilldownData.push(newDrilldownData)
      drilldownItem.y += rawData[i].sum
    }
  }
  defaultData.push(drilldownItem)

  const result: [defaultDataType, drilldownDataType] = [
    defaultData,
    drilldownData,
  ]
  return result
}

const onError = (err: any) => {
  console.warn("onError >> ", err)
}
