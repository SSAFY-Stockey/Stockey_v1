import FavoriteIndustryCard from "./FavoriteIndustryCard/FavoriteIndustryCard";
import styled from "@emotion/styled";

const FavoriteIndustryCardList = () => {
  return (
    <CardListDiv>
      <FavoriteIndustryCard />
      <FavoriteIndustryCard />
      <FavoriteIndustryCard />
      <FavoriteIndustryCard />
      <FavoriteIndustryCard />
      <FavoriteIndustryCard />
      <FavoriteIndustryCard />
      <FavoriteIndustryCard />
      <FavoriteIndustryCard />
      <FavoriteIndustryCard />
      <FavoriteIndustryCard />
    </CardListDiv>
  );
};

export default FavoriteIndustryCardList;

const CardListDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  gap: 24px;
  width: auto;
  overflow-y: scroll;
  padding: 0px 24px 4px;
`;
