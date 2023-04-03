import { atom } from "recoil"

interface SelectedStockType {
  id: number
  name: string
  changeRate: number
  currentPrice: number
  index?: number
}

export const selectedStockState = atom<SelectedStockType>({
  key: "selectedStockIdxState",
  default: {
    id: -1,
    name: "",
    changeRate: 0,
    currentPrice: 0,
    index: 0,
  },
})
