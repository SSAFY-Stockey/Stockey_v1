import styled from "@emotion/styled"
import FavoriteIndustryCardList from "./FavoriteIndustryCardList"
import { accessTokenSelector } from "../../../stores/atoms"
import customAxios from "../../../utils/customAxios"
import { useQuery } from "react-query"
import Spinner from "../../common/Spinner/Spinner"
import { useRecoilState } from "recoil"

export interface MyIndustryType {
  id: number
  name: string
  description: string
  category: string
}

const FavoriteIndustryInfoArea = () => {
  // nickname 받아오는 코드로 변경
  const userName = "OOO"
  const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector)
  const axios = customAxios(accessToken, setAccessToken)
  const fetchMyIndustryList = () => {
    return axios.get("/industry/stocklist/my")
  }
  const select = (response: any) => {
    const data: MyIndustryType[] = response.data.data
    return data
  }
  const { isLoading, data: myIndustryList } = useQuery(
    "myIndustry",
    fetchMyIndustryList,
    {
      refetchOnWindowFocus: false,
      select,
      retry: false,
      // enabled: !!accessToken, // 배포 서버에 인증 기능 연결되면 주석 해제
    }
  )
  return (
    <AreaDiv>
      <TitleDiv>{userName} 님의 관심 산업</TitleDiv>
      {isLoading ? (
        <Spinner />
      ) : myIndustryList ? (
        <FavoriteIndustryCardList myIndustryList={myIndustryList} />
      ) : (
        <DefaultPhrase>관심 산업을 등록해보세요.</DefaultPhrase>
      )}
    </AreaDiv>
  )
}

export default FavoriteIndustryInfoArea

const AreaDiv = styled.div`
  min-width: 500px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0px;
  background: var(--custom-background);
  border-radius: 24px;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3));
`

const TitleDiv = styled.div`
  height: 2rem;
  width: auto;
  padding: 0px 24px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  /* or 83% */

  display: flex;
  align-items: center;
  letter-spacing: 0.1px;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const DefaultPhrase = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 10%;
  font-size: 2rem;
  color: gray;
`
