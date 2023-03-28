import styled from "styled-components"
import { Paper, Grid, Grow } from "@mui/material"
import { NewsProps } from "./NewsList"

interface Props {
  key: string
  news: NewsProps
  order: number
}

const NewsListItem = ({ key, news, order }: Props) => {
  return (
    <Grow key={key} in={true} timeout={order * 600}>
      <NewsDiv elevation={2}>
        <Grid container>
          <Grid item xs={3}>
            이미지
          </Grid>
          <Grid item xs={9} display="flex" flexDirection="column">
            <NewsTitle>{news.title}</NewsTitle>
            <NewsMeta>
              [{news.press}] {news.date}
            </NewsMeta>
            <NewsContent>{news.content}</NewsContent>
          </Grid>
        </Grid>
      </NewsDiv>
    </Grow>
  )
}

export default NewsListItem

const NewsDiv = styled(Paper)`
  border-radius: 24px;
  // width: 100%;
  margin-bottom: 12px;
  margin-inline: 6px;
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
