import styled from "@emotion/styled"
import IndustryCard from "./IndustryCard"

interface IndustryListProps {
  industryList: {
    id: number
    name: string
    description: string | null
    category: string
  }[]
}

const IndustryCardList = ({ industryList }: IndustryListProps) => {
  return (
    <IndustryCardListDiv>
      {industryList?.map((industryInfo) => (
        <IndustryCard key={industryInfo.id} industryName={industryInfo.name} />
      ))}
    </IndustryCardListDiv>
  )
}

export default IndustryCardList

const dummydata = [
  {
    id: 1,
    name: "에너지",
    description: null,
    category: "에너지",
  },
  {
    id: 2,
    name: "소재",
    description: null,
    category: "소재",
  },
  {
    id: 3,
    name: "자본재",
    description: null,
    category: "산업재",
  },
  {
    id: 4,
    name: "운송",
    description: null,
    category: "산업재",
  },
  {
    id: 5,
    name: "자동차와부품",
    description: null,
    category: "경기관련소비재",
  },
  {
    id: 6,
    name: "내구소비재와의류",
    description: null,
    category: "경기관련소비재",
  },
  {
    id: 7,
    name: "호텔,레스토랑,레저등",
    description: null,
    category: "경기관련소비재",
  },
  {
    id: 8,
    name: "소매(유통)",
    description: null,
    category: "경기관련소비재",
  },
  {
    id: 9,
    name: "식품,음료,담배",
    description: null,
    category: "필수소비재",
  },
  {
    id: 10,
    name: "제약과생물공학",
    description: null,
    category: "건강관리",
  },
  {
    id: 11,
    name: "은행",
    description: null,
    category: "금융",
  },
  {
    id: 12,
    name: "증권",
    description: null,
    category: "금융",
  },
  {
    id: 13,
    name: "다각화된금융",
    description: null,
    category: "금융",
  },
  {
    id: 14,
    name: "보험",
    description: null,
    category: "금융",
  },
  {
    id: 15,
    name: "소프트웨어와서비스",
    description: null,
    category: "IT",
  },
  {
    id: 16,
    name: "기술하드웨어와장비",
    description: null,
    category: "IT",
  },
  {
    id: 17,
    name: "반도체와반도체장비",
    description: null,
    category: "IT",
  },
  {
    id: 18,
    name: "전기와전기제품",
    description: null,
    category: "IT",
  },
  {
    id: 19,
    name: "디스플레이",
    description: null,
    category: "IT",
  },
  {
    id: 20,
    name: "전기통신서비스",
    description: null,
    category: "커뮤니케이션서비스",
  },
  {
    id: 21,
    name: "미디어와엔터테인먼트",
    description: null,
    category: "커뮤니케이션서비스",
  },
  {
    id: 22,
    name: "유틸리티",
    description: null,
    category: "유틸리티",
  },
]

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
