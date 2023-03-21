import styled from "@emotion/styled";
import FavoriteIndustryCardList from "./FavoriteIndustryCardList";

const FavoriteIndustryInfoArea = () => {
  return (
    <AreaDiv>
      <TitleDiv>FavoriteIndustryInfoArea</TitleDiv>
      <FavoriteIndustryCardList />
    </AreaDiv>
  );
};

export default FavoriteIndustryInfoArea;

const AreaDiv = styled.div`
  width: 100%;
  height: calc((100vh - 228px) / 2);
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0px;
  background: #faf5f7;
  border-radius: 24px;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3));
`;

const TitleDiv = styled.div`
  height: 24px;
  width: auto;
  padding: 0px 24px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 20px;
  /* or 83% */

  display: flex;
  align-items: center;
  letter-spacing: 0.1px;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
