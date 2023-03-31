import React from "react"
import styled, { keyframes } from "styled-components"

const Loader = () => {
  return (
    <>
      <LoadingSpinner>
        <LoaderWrapper>
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </LoaderWrapper>
      </LoadingSpinner>
    </>
  )
}
const SearchAnimation = keyframes`
  0%    { transform: translate(0px,2px) }
 33.33% { transform: translate(50px,10px) }
 66.66% { transform: translate(20px,50px) }
100%    { transform: translate(2px,0px) }
  `

const LoadingSpinner = styled.div`
  width: auto;
  height: 200px;
  display: inline-block;
  // overflow: hidden;
  // background: #f1f2f3;
`
const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */

  & div {
    box-sizing: content-box;
  }

  & > div {
    transform: scale(1);
    transform-origin: 100px 100px;
  }

  & > div > div {
    animation: ${SearchAnimation} 1.4s linear infinite;
    position: absolute;
  }

  & > div > div div:nth-child(1) {
    width: 73px;
    height: 73px;
    border-radius: 50%;
    border: 12px solid #ff727d;
    background: #f4fdff;
  }

  & > div > div div:nth-child(2) {
    width: 17.255px;
    height: 51.76499999999999px;
    transform: rotate(-45deg);
    background: #ff727d;
    border-radius: 0 0 8.12px 8.12px;
    position: absolute;
    top: 69.02px;
    left: 86.27499999999999px;
  }
`

export default Loader
