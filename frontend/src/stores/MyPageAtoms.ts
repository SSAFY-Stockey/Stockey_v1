import { atom } from "recoil"

export const myKeywordState = atom<string | undefined>({
  key: "myKeywordState",
  default: undefined,
})
