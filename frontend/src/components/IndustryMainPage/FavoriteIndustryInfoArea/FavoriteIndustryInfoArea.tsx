import styled from "@emotion/styled"
import FavoriteIndustryCard from "./FavoriteIndustryCard"

const FavoriteIndustryInfoArea = () => {
  return (
    <FavoriteIndustryInfoAreaDiv>
      FavoriteIndustryInfoArea
      <FavoriteIndustryCard />
    </FavoriteIndustryInfoAreaDiv>
  )
}

export default FavoriteIndustryInfoArea

const FavoriteIndustryInfoAreaDiv = styled.div`
  border: 1px dashed black;
  height: 100%;
`
