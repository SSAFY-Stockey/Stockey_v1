import styled from "@emotion/styled"
import FavoriteIndustryCardList from "./FavoriteIndustryCardList"

const FavoriteIndustryInfoArea = () => {
  const userName = "OOO"
  return (
    <AreaDiv>
      <TitleDiv>{userName} 님의 관심 산업</TitleDiv>
      <FavoriteIndustryCardList />
    </AreaDiv>
  )
}

export default FavoriteIndustryInfoArea

const AreaDiv = styled.div`
  width: 100%;
  height: calc((100vh - 192px) / 2);
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
