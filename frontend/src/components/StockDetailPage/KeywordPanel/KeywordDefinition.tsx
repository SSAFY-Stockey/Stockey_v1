import styled from "styled-components"

const KeywordDefinition = () => {
  return (
    <StyledContent>
      어학적으로는 "큰 발전" 혹은 "큰 도약"을 뜻하는 말이나 경제 분야에서는
      금리를 한 번에 0.5% 포인트 올리는 것을 말한다.통상적으로 금리 인상 폭은
      0.25% 정도이나, 인플레이션 등의 이유로 큰 폭의 인상(jumbo-size rate
      rises)을 단행하기도 한다.
    </StyledContent>
  )
}

export default KeywordDefinition

const StyledContent = styled.p`
  font-size: 1.4rem;
`
