import {
  PanelSubTitle,
  PanelTitle,
  PanelWrapper,
} from "../KeywordPanel/KeywordPanel"
import MainBuisnessSection from "./MainBuisnessSection/MainBuisnessSection"

const SubPanel = () => {
  return (
    <PanelWrapper>
      <PanelSubTitle>네이버는 어떤 회사인가요?</PanelSubTitle>
      <PanelSubTitle>잘 나가는 사업 TOP 3</PanelSubTitle>
      <MainBuisnessSection />
    </PanelWrapper>
  )
}
export default SubPanel
