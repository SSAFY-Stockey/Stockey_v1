import Button from "@mui/material/Button"
import CircleIcon from "@mui/icons-material/Circle"
import styled from "styled-components"

interface Props {
  stockName: string
}

const HighlyRelatedStockSwitch = ({ stockName }: Props) => {
  return (
    <StockSwitchBtn
      disabled={false}
      size="large"
      startIcon={<CircleIcon sx={{ color: "var(--custom-pink-1)" }} />}
    >
      <BtnText>{stockName}</BtnText>
    </StockSwitchBtn>
  )
  //
}

export default HighlyRelatedStockSwitch

const StockSwitchBtn = styled(Button)`
  background-color: var(--custom-pink-4) !important;
  border-radius: 36px !important;
  color: black !important;
  font-weight: bold !important;
  align-items: center !important;
`

const BtnText = styled.p`
  font-size: 1.4rem;
  margin: 0 !important;
  line-height: normal;
`
