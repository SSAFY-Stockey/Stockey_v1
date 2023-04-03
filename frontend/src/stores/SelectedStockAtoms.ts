import { atom } from "recoil"

export const selectedStockIdxState = atom<number>({
  key: "selectedStockIdxState",
  default: 0,
})
