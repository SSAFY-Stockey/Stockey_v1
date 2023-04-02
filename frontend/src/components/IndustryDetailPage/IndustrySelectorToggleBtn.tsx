import Button from "@mui/material/Button"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import styled from "@emotion/styled"

const IndustrySelectorToggleBtn = ({
  changeLayout,
}: {
  changeLayout: (e: React.MouseEvent<HTMLElement>, mode: string) => void
}) => {
  return (
    <StyledButton
      endIcon={<KeyboardArrowDownIcon />}
      onClick={(e) => changeLayout(e, "sel")}
    >
      <ButtonImg src="/industryLogos/sampleIndustryLogo.png" alt="" />
      다른산업보기
    </StyledButton>
  )
}

export default IndustrySelectorToggleBtn

const StyledButton = styled(Button)({
  height: "4.8rem",
  background: "var(--custom-gradient-pink)",
  borderRadius: 24,
  paddingLeft: 6,
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "1.4rem",
  lineHeight: "2rem",
  letterSpacing: "0.1px",
  color: "#FFFFFF",
})

const ButtonImg = styled.img`
  height: 100%;
  margin-right: 12px;
`
