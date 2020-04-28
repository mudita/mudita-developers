import React from "react"
import AppFunctionComponent from "../../types/app-function-component.interface"
import styled from "styled-components"
import snowImage from "../../images/snow.jpg"

const Parallax = styled.div`
  min-height: 200vh;
`
const TextWithBackground = styled.p`
  font-weight: 1000;
  -webkit-background-clip: text;
  color: transparent;
  background-image: url(${snowImage});
  font-size: 360px;
  line-height: 360px;
  margin-left: 50px;
  word-break: break-all;
  background-clip: text;
  background-size: cover;
  background-position-x: 542px;
  background-position-y: 951px;
`

// const getViewportHeight = () => {
//   const height = document.documentElement.clientHeight
//   const innerHeight = window.innerHeight;
//   return height < innerHeight ? innerHeight : height;
// }
//
// const animate = () => {
//   console.log("animate")
// }

const HeroSection: AppFunctionComponent = () => {
  return (
    <Parallax>
      <TextWithBackground>Parallax effect!</TextWithBackground>
    </Parallax>
  )
}

export default HeroSection
