import customAxios from "../utils/customAxios"
import { useQuery } from "react-query"

const axios = customAxios()

// fetch search value
const fetchKeywordSearch = ({
  queryKey,
}: {
  queryKey: (string | undefined)[]
}) => {
  const params = { keyword: queryKey[1] }
  return axios.get("/keywords/search/", {
    params,
  })
}

export const useKeywordSearch = (serachValue: string | undefined) => {
  return useQuery(["searchKeyword", serachValue], fetchKeywordSearch, {
    refetchOnWindowFocus: false,
    enabled: false,
    retry: false,
    select,
  })
}

const select = (response: any) => {
  const searchResult: string[] = []

  response.data.data?.forEach((item: any) => {
    searchResult.push(item.name)
  })

  return searchResult
}
