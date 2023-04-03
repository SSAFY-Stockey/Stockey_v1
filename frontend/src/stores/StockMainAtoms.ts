import { atom, selector } from "recoil"
import dayjs from "dayjs"

// stock-main 페이지에서 사용하는 state들을 관리하는 파일입니다.

// 선택된 stock의 index를 저장하는 state
export const selectedStockState = atom<{idx: number, id: number}>({
  key: "selectedStockState",
  default: {
    idx: 0,
    id: 0,
  },
})

// 선택된 keyword의 index를 저장하는 state
export const selectedKeywordState = atom<{idx: number, id: number}>({
  key: "selectedKeywordState",
  default: {
    idx: 1,
    id: 0,
  },
})

export const commonParamsState = atom<object>({
  key: "commonParamsState",
  default: {
    newsType: "STOCK",
    startDate: dayjs().subtract(1, "year").startOf("year").format("YYMMDD"),
    endDate: dayjs().format("YYMMDD"),
  },
})

//
export const keywordParamsState = selector({
  key: "keywordParamsState",
  get: ({ get }) => {
    return {typeId: get(selectedStockState).id, ...get(commonParamsState)}
  },
  set: ({ set }, newValue) => {
    set( , newValue)
  },
})
