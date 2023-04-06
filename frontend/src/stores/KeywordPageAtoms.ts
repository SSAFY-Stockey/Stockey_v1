import { atom } from "recoil"

export const KeywordSearchState = atom<string | undefined>({
  key: "KeywordSearchState",
  default: undefined,
})
