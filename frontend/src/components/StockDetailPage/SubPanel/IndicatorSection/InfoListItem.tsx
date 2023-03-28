import styled from "styled-components"

interface Props {
  type: "finance" | "size" | "sales" | "credit_rating"
  value: string
}

const infoType = {
  finance: "재무평가",
  size: "기업규모",
  sales: "매출액",
  credit_rating: "신용등급",
}

const InfoListItem = ({ type, value }: Props) => {
  return (
    <InfoDiv>
      <img src={`/infoLogos/${type}.png`} alt={type} />
      <InfoDetailDiv>
        <InfoType>{infoType[`${type}`]}</InfoType>
        <InfoValue>
          {type === "finance" && <SubDescription>상위 </SubDescription>}
          {value}
        </InfoValue>
      </InfoDetailDiv>
    </InfoDiv>
  )
}

export default InfoListItem

const InfoDiv = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 24px;
  border: 5px solid white;
  padding-block: 3%;
  width: 100%;
`

const InfoDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  // padding-left: 3%;
  & p {
    font-weight: bold;
    margin: 0;
    white-space: nowrap;
  }
`

const InfoType = styled.p`
  font-size: 1.2rem;
  color: rgba(151, 151, 151, 1);
`
const InfoValue = styled.p`
  font-size: 4.2rem;
  color: black;
`
const SubDescription = styled.span`
  font-size: 1.6rem;
  color: rgba(109, 102, 102, 1);
`
