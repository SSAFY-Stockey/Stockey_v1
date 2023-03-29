import styled from "styled-components"
import IndustryCardList from "./IndustryCardList"
import { useIndustryList } from "../../../hooks/useIndustryList"
import Spinner from "../../common/Spinner/Spinner"
import { Suspense } from "react"

const IndustrySelector = () => {
  const { data: industryList } = useIndustryList()
  console.log(industryList)
  return (
    <IndustrySelectorDiv>
      <IndustrySelectorTitleDiv>산업 분류 선택</IndustrySelectorTitleDiv>
      <Suspense fallback={<Spinner />}>
        <IndustryCardList industryList={industryList} />
      </Suspense>
    </IndustrySelectorDiv>
  )
}

export default IndustrySelector

const IndustrySelectorDiv = styled.div`
  height: calc(100vh - 156px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 0px 24px 24px;
  gap: 24px;

  background: #f8f8f8;
  /* M3/Elevation Light/3 */

  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 24px;
`
const IndustrySelectorTitleDiv = styled.div`
  width: 100%;
  height: 24px;
  margin: 0px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 20px;
  /* or 83% */

  display: flex;
  align-items: center;
  letter-spacing: 0.1px;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`
