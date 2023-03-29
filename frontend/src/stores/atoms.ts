import { atom, selector } from "recoil"

export const nicknameValidState = atom<boolean>({
  key: "nicknameValidState",
  default: false,
})

const accessTokenState = atom<string | null>({
  key: "accessToken",
  default: null,
})

export const accessTokenSelector = selector({
  key: "setAccessToken",
  get: ({ get }) => get(accessTokenState),
  set: ({ set }, newValue) => {
    set(accessTokenState, newValue)
  },
})
