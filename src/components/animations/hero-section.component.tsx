import React from "react"
import AppFunctionComponent from "../../types/app-function-component.interface"
import styled from "styled-components"
import snowImage from "../../images/snow.jpg"
import gold from "../../images/background-gold.jpg"
import cat from "../../images/cat.jpg"
import rose from "../../images/roses.jpg"
import waterdrops from "../../images/waterdrops.jpg"

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

const getViewportHeight = () => {
  const height = document.documentElement.clientHeight
  const innerHeight = window.innerHeight
  return height < innerHeight ? innerHeight : height
}

const Background = styled("div")<{ image: string }>`
  background-image: url(${props => (props.image ? props.image : snowImage)});
  width: 100%;
  height: 30vh;
  min-height: 450px;
  background-size: cover;
  background-position: top;
`

const TextBlock = styled.div`
  width: 100%;
  height: 30vh;
`

// const animate = () => {
//   console.log("animate")
// }

const HeroSection: AppFunctionComponent = () => {
  return (
    <Parallax>
      <TextWithBackground>Parallax effect!</TextWithBackground>
      <Background image={gold} />
      <TextBlock />
      <Background image={cat} />
      <TextBlock />
      <Background image={rose} />
      <TextBlock />
      <Background image={waterdrops} />
    </Parallax>
  )
}

export default HeroSection
