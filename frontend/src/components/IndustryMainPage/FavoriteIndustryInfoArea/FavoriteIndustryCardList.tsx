import FavoriteIndustryCard from "./FavoriteIndustryCard/FavoriteIndustryCard"
import styled from "@emotion/styled"

const FavoriteIndustryCardList = () => {
  return (
    <CardListDiv>
      <FavoriteIndustryCard
        imgUrl={`/industryLogos/sampleIndustryLogo.png`}
        industryName="무선통신서비스"
        marketCapFluctuationRate={0.27}
      />
      <FavoriteIndustryCard
        imgUrl={`/industryLogos/sampleIndustryLogo.png`}
        industryName="무선통신서비스"
        marketCapFluctuationRate={0.27}
      />
      <FavoriteIndustryCard
        imgUrl={`/industryLogos/sampleIndustryLogo.png`}
        industryName="무선통신서비스"
        marketCapFluctuationRate={0.27}
      />
      <FavoriteIndustryCard
        imgUrl={`/industryLogos/sampleIndustryLogo.png`}
        industryName="무선통신서비스"
        marketCapFluctuationRate={0.27}
      />
      <FavoriteIndustryCard
        imgUrl={`/industryLogos/sampleIndustryLogo.png`}
        industryName="무선통신서비스"
        marketCapFluctuationRate={0.27}
      />
      <FavoriteIndustryCard
        imgUrl={`/industryLogos/sampleIndustryLogo.png`}
        industryName="무선통신서비스"
        marketCapFluctuationRate={0.27}
      />
      <FavoriteIndustryCard
        imgUrl={`/industryLogos/sampleIndustryLogo.png`}
        industryName="무선통신서비스"
        marketCapFluctuationRate={0.27}
      />
      <FavoriteIndustryCard
        imgUrl={`/industryLogos/sampleIndustryLogo.png`}
        industryName="무선통신서비스"
        marketCapFluctuationRate={0.27}
      />
      <FavoriteIndustryCard
        imgUrl={`/industryLogos/sampleIndustryLogo.png`}
        industryName="무선통신서비스"
        marketCapFluctuationRate={0.27}
      />
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
