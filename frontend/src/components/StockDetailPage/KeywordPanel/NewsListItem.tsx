import styled from "styled-components"
import { Paper, Grid } from "@mui/material"

const NewsListItem = () => {
  return (
    <NewsDiv elevation={2}>
      <Grid container>
        <Grid item xs={3}>
          이미지
        </Grid>
        <Grid item xs={9} display="flex" flexDirection="column">
          <NewsTitle>
            [르포] '역대급' 인터배터리 개막… 관람객 홀린 'K-배터리'
          </NewsTitle>
          <NewsMeta>[머니S] 2023.03.15 </NewsMeta>
          <NewsContent>
            "올해 인터배터리에는 477개 기업이 참가해 1400개 부스를 꾸렸습니다.
            전시회 기간 총 4만명가량의 관람객이 찾을 것으로 예상됩니다."국
          </NewsContent>
        </Grid>
      </Grid>
    </NewsDiv>
  )
}

export default NewsListItem

const NewsDiv = styled(Paper)`
  border-radius: 24px;
  // width: 100%;
  margin-bottom: 12px;
  background-color: white;
  padding: 10px;
`
const NewsTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
}
`
const NewsMeta = styled.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  margin: 0;
}
`
const NewsContent = styled.p`
  font-size: 1.2rem;
  color: #a0a0a0;
}
`
