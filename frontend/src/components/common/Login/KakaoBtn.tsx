const KakaoBtn = () => {
  const REACT_APP_KAKAO_API = process.env.REACT_APP_KAKAO_API
  const REACT_APP_KAKAO_REDIRECT = process.env.REACT_APP_KAKAO_REDIRECT
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_KAKAO_API}&redirect_uri=${REACT_APP_KAKAO_REDIRECT}&response_type=code`

  return (
    <div>
      <a href={KAKAO_AUTH_URL}>
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          alt="카카오 로그인"
          style={{ width: "60%" }}
        />
      </a>
    </div>
  )
}

export default KakaoBtn
