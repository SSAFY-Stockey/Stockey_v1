import styled from "@emotion/styled"

interface CardProps {
  imgUrl: string
  industryName: string
  marketCapFluctuationRate: number
}

const FavoriteIndustryCard = ({
  imgUrl,
  industryName,
  marketCapFluctuationRate,
}: CardProps) => {
  return (
    <CardDiv>
      <IndustryLogoImg src={imgUrl} alt="logo" />
      <IndustryNameDiv>{industryName}</IndustryNameDiv>
      <FluctuationDiv value={marketCapFluctuationRate}>
        {marketCapFluctuationRate}
      </FluctuationDiv>
    </CardDiv>
  )
}

export default FavoriteIndustryCard

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
`

const IndustryLogoImg = styled.img`
  width: 36px;
  height: 36px;
`

const IndustryNameDiv = styled.div`
  width: auto;
  height: 1rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
`

const FluctuationDiv = styled.div<{ value: number }>`
  width: auto;
  height: 1.5rem;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  text-align: right;

  color: ${({ value }) =>
    value > 0 ? "FF0000" : value < 0 ? "#4537FF" : "#000000"};
`
