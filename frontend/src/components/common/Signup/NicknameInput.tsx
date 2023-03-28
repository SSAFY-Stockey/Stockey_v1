import styled from "styled-components"
import { useState, useEffect, useCallback } from "react"
import { CheckNickname } from "./CheckNickname"
import debounceFunction from "../Debouncer/Debouncer"

// recoil
import { useRecoilState } from "recoil"
import { nicknameValidState } from "../../../stores/atoms"

const NicknameInput = () => {
  const [nickname, setNickname] = useState<string | undefined>("")
  const [isDuplicated, setIsDuplicated] = useRecoilState(nicknameValidState)
  const [isValid, setIsValid] = useState<boolean>(false)

  // debouncer를 통한 타이핑 완료 후 닉네임 저장
  const printValue = useCallback(
    debounceFunction((value: string | undefined) => {
      setNickname(value)
    }, 500),
    []
  )

  // input onChangeHandler
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    setIsDuplicated(false)
    setIsValid(false)
    printValue(event?.target.value)
  }

  // nickname 변화 이후 validate 검사(길이) 수행
  useEffect(() => {
    // 길이 유효성 검사
    const nickanmeTest = /^[가-힣a-zA-Z0-9]+$/
    const validity = nickname
      ? nickname?.trim()
        ? nickname?.length >= 4 && nickname?.length <= 8
          ? nickanmeTest.test(nickname)
            ? true
            : false
          : false
        : false
      : false

    setIsValid(validity)
  }, [nickname])

  useEffect(() => {
    if (isValid) {
      const validity = CheckNickname(nickname)
      setIsDuplicated(validity)
    }
  }, [isValid])
  return (
    <>
      <CustomInput onChange={handleChange} />
      <div>{nickname}</div>
    </>
  )
}

export default NicknameInput

const CustomInput = styled.input``
