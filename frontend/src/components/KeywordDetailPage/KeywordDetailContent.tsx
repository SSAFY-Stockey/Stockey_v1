import styled from "styled-components"
import { TitleDiv } from "../IndustryDetailPage/PageLayouts/AnimatedComponent"
import BookmarkBtn from "../common/Bookmark/BookmarkBtn"
import { useRecoilState } from "recoil"
import { KeywordType } from "../../stores/KeywordPageAtoms"
import { accessTokenSelector } from "../../stores/atoms"
import customAxios from "../../utils/customAxios"
import { useQuery } from "react-query"
import { useEffect, useState } from "react"
import KeywordChartArea from "./KeywordChartArea"
import NewsArea from "./NewsArea"

const KeywordDetailContent = ({
  keywordInfo,
}: {
  keywordInfo: KeywordType
}) => {
  // 북마크 여부 체크(로그인 상태에서만)
  const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector)
  const axios = customAxios(accessToken, setAccessToken)
  const fetchMyKeywordCheck = ({ queryKey }: any) => {
    const keywordId = queryKey[1]
    return axios.get(`industry/keywordlist/my/${keywordId}`)
  }
  const select = (response: any) => {
    return response.data.data
  }

  const useMyKeywordCheck = (keywordId: number | undefined) => {
    return useQuery(["myKeywordCheck", keywordId], fetchMyKeywordCheck, {
      refetchOnWindowFocus: false,
      select,
      retry: false,
      enabled: !!accessToken,
    })
  }

  const { data: bookmarked } = useMyKeywordCheck(keywordInfo.id)

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)

  useEffect(() => {
    setIsBookmarked(bookmarked)
  }, [bookmarked])

  return (
    <PageWrapper>
      <TitleDiv>
        {keywordInfo?.name}
        {!!accessToken && (
          <BookmarkBtn
            isBookmarked={isBookmarked}
            page="keyword"
            num={keywordInfo.id}
          />
        )}
      </TitleDiv>
      <ContentWrapper>
        <KeywordChartArea
          keyword={keywordInfo.name}
          keywordId={keywordInfo.id}
        />
        <NewsArea keywordId={keywordInfo.id} keyword={keywordInfo.name} />
      </ContentWrapper>
    </PageWrapper>
  )
}

export default KeywordDetailContent

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

const ContentWrapper = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  display: flex;
  gap: 3rem;
`
