import styled from "@emotion/styled"
import IndustryCard from "./IndustryCard"
import { IndustryInfoType } from "./IndustryCard/IndustryCard"

interface IndustryListProps {
  industryList: IndustryInfoType[]
}

const IndustryCardList = ({ industryList }: IndustryListProps) => {
  return (
    <IndustryCardListDiv>
      {industryList?.map((industryInfo) => (
        <IndustryCard key={industryInfo.id} industryInfo={industryInfo} />
      ))}
    </IndustryCardListDiv>
  )
}

export default IndustryCardList

const IndustryCardListDiv = styled.div`
  margin: 0px;
  padding: 5px;
  width: calc(100% - 10px);
  height: 100%;
  overflow-y: scroll;

  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  ::-webkit-scrollbar {
    width: 22px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 24px;
    border: 5px solid transparent;
    background-clip: padding-box;
  }
  ::-webkit-scrollbar-track {
    width: 22px;
  }
`
