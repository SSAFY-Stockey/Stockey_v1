// import Searchbar from "../components/common/Searchbar/Searchbar"
import Bookmark from "../components/common/Bookmark/BookmarkBtn"
import styled from "styled-components"
import { Grid } from "@mui/material"

import { useRecoilValue } from "recoil"
import { accessTokenSelector } from "../stores/atoms"

const KeywordPage = () => {
  const accssToken = useRecoilValue(accessTokenSelector)
  console.log(accssToken)

  return (
    <>
      <PageGrid>
        <Example>
          안녕하세요
          <Bookmark isBookmarked={false} page={"keyword"} />
        </Example>
      </PageGrid>
    </>
  )
}

export default KeywordPage

const PageGrid = styled(Grid)({
  padding: "36px 36px 0px",
})

const Example = styled.span`
  font-size: 4rem;
  font-weight: bold;

  display: flex;
  align-items: center;
`
