import {
  PanelSubTitle,
  PanelTitle,
  PanelWrapper,
} from "../KeywordPanel/KeywordPanel"
import InfoList from "./IndicatorSection/InfoList"
import MainBizSection from "./MainBizSection/MainBizSection"

const SubPanel = () => {
  return (
    <PanelWrapper>
      <PanelSubTitle>네이버는 어떤 회사인가요?</PanelSubTitle>
      <InfoList />
      <PanelSubTitle>잘 나가는 사업 TOP 3</PanelSubTitle>
      <MainBizSection />
    </PanelWrapper>
  )
}
export default SubPanel
