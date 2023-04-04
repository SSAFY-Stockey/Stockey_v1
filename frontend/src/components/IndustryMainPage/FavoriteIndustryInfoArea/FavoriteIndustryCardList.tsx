import { useRecoilState } from "recoil"
import FavoriteIndustryCard from "./FavoriteIndustryCard/FavoriteIndustryCard"
import styled from "@emotion/styled"
import { accessTokenSelector } from "../../../stores/atoms"
import customAxios from "../../../utils/customAxios"
import { useQuery } from "react-query"
import Spinner from "../../common/Spinner/Spinner"

interface MyIndustryType {
  id: number
  name: string
  description: string
  category: string
}

const FavoriteIndustryCardList = () => {
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
      // enabled: !!accessToken,
    }
  )

  return (
    <CardListDiv>
      {isLoading ? (
        <Spinner />
      ) : (
        myIndustryList &&
        myIndustryList.map((myIndustry) => {
          return (
            <FavoriteIndustryCard
              key={myIndustry.id}
              imgUrl={`/industryLogos/sampleIndustryLogo.png`}
              industryName={myIndustry.name}
              industryId={myIndustry.id}
            />
          )
        })
      )}
    </CardListDiv>
  )
}

export default FavoriteIndustryCardList

const CardListDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  gap: 24px;
  width: auto;
  padding: 0px 24px 4px;
  overflow-y: scroll;

  /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`
