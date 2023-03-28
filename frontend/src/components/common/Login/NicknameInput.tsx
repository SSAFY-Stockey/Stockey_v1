import styled from "styled-components"
import { useState } from "react"

const NicknameInput = () => {
  const [nickname, setNickname] = useState<string | undefined>("")

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    setNickname(event?.target.value)
  }

  return (
    <>
      <CustomInput onChange={handleChange} />
    </>
  )
}

export default NicknameInput

const CustomInput = styled.input``
