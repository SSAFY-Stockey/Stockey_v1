import styled from "styled-components"
import { useState } from "react"
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded"
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded"
import customAxios from "../../../utils/customAxios"
// recoil
import { useRecoilState } from "recoil"
import { accessTokenSelector } from "../../../stores/atoms"
// react - query
import { useMutation } from "react-query"

type BookmarkProps = {
  isBookmarked: boolean
  page: string
  num: number
}

// page : keyword, industry, stock 3개 중 1가지 입력할 것!
const BookmarkBtn = ({ isBookmarked, page, num }: BookmarkProps) => {
  // bookmark state
  const [bookmarked, setBookmarked] = useState(isBookmarked)
  // hover state
  const [isHovered, setIsHovered] = useState(false)
  // accessToken selector
  const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector)
  // customAxios
  const axios = customAxios(accessToken, setAccessToken)
  // fetchUrl
  const fetchUrl =
    page === "industry"
      ? `/industry/my/${num}`
      : page === "stock"
      ? `/stock/my/${num}`
      : page === "keyword"
      ? `/keywords/keywordlist/my/${num}`
      : ""

  // 관심 등록 Function & useMutation
  const fetchAddBookmark = () => {
    return axios.post(fetchUrl)
  }
  const { mutate: addBookmark } = useMutation(fetchAddBookmark, {
    onSuccess: () => {
      setBookmarked(true)
    },
  })
  // 관심 해제 Function & useMutation
  const fetchDeleteBookmark = () => {
    return axios.delete(fetchUrl)
  }
  const { mutate: deleteBookmark } = useMutation(fetchDeleteBookmark, {
    onSuccess: () => {
      setBookmarked(false)
    },
  })
  // hovering handling
  const handleMouseOVer = () => {
    setIsHovered(true)
  }
  const handleMouseOut = () => {
    setIsHovered(false)
  }

  // click handling
  const handleClick = () => {
    if (bookmarked) {
      deleteBookmark()
    } else {
      addBookmark()
    }
  }

  return (
    <>
      {bookmarked ? (
        <IconSpan
          onClick={handleClick}
          onMouseOver={handleMouseOVer}
          onMouseOut={handleMouseOut}
        >
          <IconText className={isHovered ? "fadeIn" : "fadeOut"}>
            즐겨찾기 제거
          </IconText>
          <IconWrapper className="fadeIn">
            <BookmarkRoundedIcon sx={{ fontSize: 40 }} />
          </IconWrapper>
          <IconWrapper className="fadeOut">
            <BookmarkBorderRoundedIcon sx={{ fontSize: 40 }} />
          </IconWrapper>
        </IconSpan>
      ) : (
        <IconSpan
          onClick={handleClick}
          onMouseOver={handleMouseOVer}
          onMouseOut={handleMouseOut}
        >
          <IconText className={isHovered ? "fadeIn" : "fadeOut"}>
            즐겨찾기 추가
          </IconText>
          <IconWrapper className="fadeOut">
            <BookmarkRoundedIcon sx={{ fontSize: 40 }} />
          </IconWrapper>
          <IconWrapper className="fadeIn">
            <BookmarkBorderRoundedIcon sx={{ fontSize: 40 }} />
          </IconWrapper>
        </IconSpan>
      )}
    </>
  )
}

export default BookmarkBtn

// icon relative span
const IconSpan = styled.span`
  width: 40px;
  height: 40px;

  position: relative;
`
// icon text span
const IconText = styled.div`
  // position
  position: absolute;
  top: 0.85rem;
  left: 40px;

  // font
  font-size: 1.5rem;
  color: white;

  // shape
  background-color: var(--custom-orange-1);
  border-radius: 0.2rem;

  text-align: center;
  cursor: pointer;

  // padding
  padding: 0.5rem;

  // size
  width: 12rem;

  // transition
  transition: 0.2s all ease-in-out;

  // prevent drag
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;

  &.fadeIn {
    opacity: 1;
    transition: opacity 0.15s ease-in-out;
    visibility: visible;
  }

  &.fadeOut {
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
    visibility: hidden;
  }
`

// icon absolute span
const IconWrapper = styled.span`
  // 위치
  position: absolute;
  top: 0px;
  left: 0px;

  // 형태
  color: var(--custom-orange-1);
  width: 48px;
  height: 48px;

  // 클릭
  cursor: pointer;

  &.fadeIn {
    opacity: 1;
    transition: opacity 0.15s ease-in-out;
  }

  &.fadeOut {
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
  }
`
