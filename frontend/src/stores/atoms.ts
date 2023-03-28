import { atom, selector } from "recoil"

export const accessTokenState = atom<string | null>({
  key: "accessToken",
  default: null,
})

export const setAccessToken = selector({
  key: "setAccessToken",
  get: ({ get }) => get(accessTokenState),
  set: ({ set }, newValue) => {
    set(accessTokenState, newValue)
  },
})
