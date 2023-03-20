import styled from "styled-components"
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
}

const PageLinkBtn = () => {
  return (
    <>
      <PageLinkBtnDiv>
        <HomeIcon color="info" />
        <div>주식 종목</div>
      </PageLinkBtnDiv>
    </>
  )
}

export default PageLinkBtn

const PageLinkBtnDiv = styled.div`
  // 레이아웃
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 10px;

  // 크기
  width: 100%;

  // 형태
  background: linear-gradient(92.18deg, #ff996c 1.48%, #fe7598 98.93%);
  border-radius: 100px;

  // 글자
  font-weight: bold;
  font-size: 16px;
  color: white;
`
