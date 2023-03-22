import styled from "styled-components"
import { useState } from "react"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"

type BookmarkBtnProps = {
  state: boolean
}

const BookmarkBtn = ({ state }: BookmarkBtnProps) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(state)

  const handleClick = () => {
    setIsBookmarked(!isBookmarked)
  }

  return (
    <>
      <BookmarkWrapper>
        {isBookmarked ? (
          <BookmarkIcon sx={{ fontSize: 36 }} onClick={handleClick} />
        ) : (
          <BookmarkBorderIcon sx={{ fontSize: 36 }} onClick={handleClick} />
        )}
      </BookmarkWrapper>
    </>
  )
}

export default BookmarkBtn

const BookmarkWrapper = styled.span`
  // 형태
  color: var(--custom-orange-1);
  width: 36px;
  height: 36px;

  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`
