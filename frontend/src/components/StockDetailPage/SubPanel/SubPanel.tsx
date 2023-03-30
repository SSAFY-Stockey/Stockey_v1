import { PanelTitle, PanelWrapper } from "../KeywordPanel/KeywordPanel"
import InfoList from "./IndicatorSection/InfoList"
import MainBizSection from "./MainBizSection/MainBizSection"
import ComparingAnalysisSection from "./ComparingAnalysisSection/ComparingAnalysisSection"

const SubPanel = () => {
  return (
    <PanelWrapper>
      <InfoList />
      <MainBizSection />
      <ComparingAnalysisSection />
    </PanelWrapper>
  )
}
export default SubPanel
