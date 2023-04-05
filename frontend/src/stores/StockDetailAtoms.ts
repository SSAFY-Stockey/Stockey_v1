import { atom, selector } from "recoil"
import dayjs from "dayjs"
import { StockDetailType } from "../hooks/useStockDetail"

// stock-detail 페이지에서 사용하는 state들을 관리하는 파일입니다.

// 현재 페이지 stock의 모든 detail information을 저장하는 state
export const stockDetailState = atom<StockDetailType | undefined>({
  key: "stockDetailState",
  default: {
    id: 0,
    name: "",
    code: 0,
    description: null,
    marketCap: 0, // 시가총액
    stockCount: 0,
    companySize: "",
    companySales: "", // 74조7,216억
    creditRank: "", // 최상 (2023.02)
    basicInfo: "", // 상위12%
    industry: {
      id: 0,
      name: "",
      description: null,
      category: "",
    },
    businesses: [
      {
        id: 0,
        name: "",
        description: null,
      },
    ],
    todayDailyStock: {
      id: 0,
      stockDate: "", // 2023-04-04
      openPrice: 0,
      closePrice: 0,
      lowPrice: 0,
      highPrice: 0,
      volume: 0,
      changeRate: 0,
    },
    industryCapRank: 0, // 소속 산업 내 시총 순위
    industryFavRank: 0, // 소속 산업 내 관심 순위
    industryAvgChangeRate: 0, // 소속 산업 평균 등락률
  },
})

// // 선택된 keyword의 index를 저장하는 state
// export const selectedKeywordState = atom<{
//   idx: number
//   id: number | undefined
// }>({
//   key: "selectedKeywordState",
//   default: {
//     idx: 1,
//     id: 0,
//   },
// })

// export const keywordParamsState = selector<KeywordRankParamsType>({
//   key: "keywordParamsState",
//   get: ({ get }) => {
//     return {
//       topN: 6,
//       typeId: get(selectedStockState).id,
//       newsType: "STOCK",
//       startDate: dayjs().subtract(1, "year").startOf("year").format("YYMMDD"),
//       endDate: dayjs().format("YYMMDD"),
//     }
//   },
// })
// export const keyphraseParamsState = selector<KeyphraseListParamsType>({
//   key: "keyphraseParamsState",
//   get: ({ get }) => {
//     return {
//       newsType: "STOCK",
//       typeId: get(selectedStockState).id,
//       keywordId: get(selectedKeywordState).id,
//       startDate: dayjs().subtract(1, "year").startOf("year").format("YYMMDD"),
//       endDate: dayjs().format("YYMMDD"),
//     }
//   },
// })
