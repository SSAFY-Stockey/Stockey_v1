import { atom } from "recoil"

export const selectedKeywordIdState = atom<number>({
  key: "selectedKeywordIdState",
  default: 0,
})
