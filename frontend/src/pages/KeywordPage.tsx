// import Searchbar from "../components/common/Searchbar/Searchbar"
import Bookmark from "../components/common/Bookmark/BookmarkBtn"
import styled from "styled-components"
import { Grid } from "@mui/material"
import customAxios from "../utils/customAxios"

import { accessTokenSelector } from "../stores/atoms"
import { useRecoilState } from "recoil"

const KeywordPage = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector)
  const axios = customAxios(accessToken, setAccessToken)

  const handleClick = () => {
    axios
      .get("member")
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleAnotherClick = () => {
    console.log(document.cookie)
  }

  return (
    <>
      <PageGrid>
        <Example>
          안녕하세요
          <Bookmark isBookmarked={false} page={"keyword"} />
        </Example>
        <button onClick={handleClick}>실험</button>
        <button onClick={handleAnotherClick}>실험2</button>
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
