import React, { useEffect } from "react"
import AppFunctionComponent from "../../types/app-function-component.interface"
import styled from "styled-components"
import Aos from "aos"
import "aos/dist/aos.css"

const Root = styled.section`
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
`

const Top = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20rem;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  padding: 5rem;
  width: 60%;
  box-shadow: 10px 10px 40px 10px rgba(0, 0, 0, 0.4);
  margin: 0 auto 5rem;
  background-color: #f4d03f;
  background-image: linear-gradient(132deg, #f4d03f 0%, #16a085 100%);
`

const ScrollAnimation: AppFunctionComponent = () => {
  useEffect(() => {
    Aos.init()
  })
  return (
    <Root>
      <Top>Scroll ↓</Top>
      <Box>Kamil P</Box>
      <Box>Kamil S</Box>
      <Box>Mateusz</Box>
      <Box>Kasia</Box>
      <Box>Sylwia</Box>
      <Box>Ula</Box>
      <Box>Michał</Box>
      <Box>Igor</Box>
    </Root>
  )
}

export default ScrollAnimation
