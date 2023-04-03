import { atom } from "recoil"

export const selectedStockIdxState = atom<number>({
  key: "selectedStockIdxState",
  default: 0,
})

export const selectedKeywordIdxState = atom<number>({
  key: "selectedKeywordIdxState",
  default: 1,
})
