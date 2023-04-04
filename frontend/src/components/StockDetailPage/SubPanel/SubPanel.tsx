import SubInfoPanel from "./SubInfoPanel/SubInfoPanel"
import KeywordPanel from "./KeywordPanel/KeywordPanel"
import styled from "styled-components"

interface Props {
  isPanelExpanded: boolean
}

const SubPanel = ({ isPanelExpanded }: Props) => {
  return (
    <PanelDiv>
      {isPanelExpanded ? <SubInfoPanel /> : <div></div>}
      {/* {false ?  : <KeywordPanel keyword="빅스텝" />} */}
    </PanelDiv>
  )
}

export default SubPanel

const PanelDiv = styled.div`
  margin: 0;
  padding: 0;
  background-color: var(--custom-background);
  border-top-left-radius: 30px;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
`
