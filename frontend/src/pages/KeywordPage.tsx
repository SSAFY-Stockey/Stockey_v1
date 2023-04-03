// import Searchbar from "../components/common/Searchbar/Searchbar"
import Bookmark from "../components/common/Bookmark/BookmarkBtn"
import styled from "styled-components"
import { Grid } from "@mui/material"
import customAxios from "../utils/customAxios"

import { useEffect } from "react"

import { accessTokenSelector, nicknameState } from "../stores/atoms"
import { useRecoilState, useRecoilValue } from "recoil"

const KeywordPage = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector)
  const axios = customAxios(accessToken, setAccessToken)
  const nickname = useRecoilValue(nicknameState)

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

  return (
    <>
      <PageGrid>
        <Example>
          안녕하세요
          <Bookmark isBookmarked={false} page={"keyword"} num={1} />
        </Example>
        <button onClick={handleClick}>실험</button>
        <div>{nickname}</div>
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
