import { atom } from "recoil"

export const clickedIndustryInfoState = atom({
  key: "clickedIndustryInfo",
  default: {
    clickedIndustryName: "전체",
    clickedChartColor: "var(--custom-black)",
  },
})
