import styled from "@emotion/styled"
import Grid from "@mui/material/Grid"

interface PageTitleProps {
  pageTitleInfo: {
    pageTitle: string;
    pageDescription: string;
  }
}

const PageTitle = ({pageTitleInfo}: PageTitleProps) => {
  const {pageTitle, pageDescription} = pageTitleInfo
  return (
    <Grid item xs={12} container spacing={3}>
        <Grid item xs="auto">
          <TitleDiv>{pageTitle}</TitleDiv>
        </Grid>
        <Grid item xs>
          <PageDescriptionDiv>
            {pageDescription}
          </PageDescriptionDiv>
        </Grid>
      </Grid>
  )
}

export default PageTitle

const TitleDiv = styled.div`
  height: 48px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 0.1px;
  color: #000000;

  bottom: 0px;
  margin: 0px;
`

const PageDescriptionDiv = styled.div`
  height: 48px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  align-items: end;
  letter-spacing: 0.025em;
  color: #6d6666;

  display: flex;
  margin: 0px;
`