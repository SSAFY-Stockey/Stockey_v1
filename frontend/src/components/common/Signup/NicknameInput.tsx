import styled from "styled-components"
import { useState, useEffect, useCallback } from "react"
import debounceFunction from "../Debouncer/Debouncer"
import customAxios from "../../../utils/customAxios"

// recoil
import { useSetRecoilState } from "recoil"
import { nicknameValidState } from "../../../stores/atoms"

type props = {
  nickname: string | undefined
  getNickname: Function
}

const NicknameInput = ({ nickname, getNickname }: props) => {
  const setIsDuplicated = useSetRecoilState(nicknameValidState)
  const [isValid, setIsValid] = useState<boolean>(false)

  // debouncer를 통한 타이핑 완료 후 닉네임 저장
  const printValue = useCallback(
    debounceFunction((value: string | undefined) => {
      getNickname(value)
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

  // nickname이 유효하다면(isValid === true) 중복성 검사
  useEffect(() => {
    const axios = customAxios()
    // 서버에 닉네임을 송신하는 코드
    const checkNickname = async () => {
      try {
        const validity = await axios
          .get("/member/nickname", { params: { nickname: nickname } })
          .then((response) => {
            return response.status
          })
          .catch((error) => {
            return error.status
          })

        // 닉네임 중복 검사 유효할 경우
        if (validity === 200) {
          setIsDuplicated(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
    if (isValid) {
      checkNickname()
    }
  }, [isValid, setIsDuplicated])

  return (
    <>
      <CustomInput onChange={handleChange} />
    </>
  )
}

export default NicknameInput

const CustomInput = styled.input``

const ErrorDiv = styled.div``
