import styled from "@emotion/styled";

const FavoriteIndustryCard = () => {
  return <CardDiv></CardDiv>;
};

export default FavoriteIndustryCard;

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px 6px 6px;
  margin: 0px;
  gap: 12px;

  width: calc((100% - 24px) / 2);
  height: 48px;

  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;
