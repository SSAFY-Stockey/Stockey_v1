import customAxios from "../../../utils/customAxios"
import { useState } from "react"

export const CheckNickname = (nickname: string | undefined) => {
  const axios = customAxios()
  const [isValid, setIsValid] = useState<boolean>(false)

  axios
    .get("/member/nickname", { params: { nickname: nickname } })
    .then((response) => {
      console.log(response?.status)
      if (response?.status === 200) {
        setIsValid(true)
      }
    })
    .catch((error) => {
      console.log(error)
    })

  return isValid
}
