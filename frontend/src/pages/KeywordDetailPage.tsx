import styled from "styled-components"
import KeywordDetailContent from "../components/KeywordDetailPage/KeywordDetailContent"
import NotFoundKeyword from "../components/KeywordDetailPage/NotFoundKeyword"
import { KeywordSearchState } from "../stores/KeywordPageAtoms"
import { useRecoilValue } from "recoil"

const KeywordDetailPage = () => {
  const keywordInfo = useRecoilValue(KeywordSearchState)

  return (
    <PageWrapper>
      {!!keywordInfo ? (
        <KeywordDetailContent keywordInfo={keywordInfo} />
      ) : (
        <NotFoundKeyword />
      )}
    </PageWrapper>
  )
}

export default KeywordDetailPage

const PageWrapper = styled.div`
  height: 100vh;
  width: 83.33vw;
  padding: 36px;
`
