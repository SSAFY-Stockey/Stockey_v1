import { Navigate } from "react-router-dom"

interface Props {
  accessToken: string | undefined
}

export const Test = ({ accessToken }: Props) => {
  if (!accessToken) {
    window.alert("로그인이 필요합니다")
  }
  return !accessToken ? (
    <div>
      <Navigate to="/user/login" replace={true} />
    </div>
  ) : (
    <></>
  )
}
