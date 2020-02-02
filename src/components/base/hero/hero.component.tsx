import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"

const HeroRoot = styled.section`
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
  font-size: 1.2rem;
  color: #fff;
`

const Heading = styled.h1`
  margin: 0;
`

const Lead = styled.p`
  margin-bottom: 0;
`

const Hero: AppFunctionComponent = () => {
  return (
    <HeroRoot>
      <Heading>We're App'n'roll Developers</Heading>
      <Lead>Our job is to create great web apps for great products.</Lead>
    </HeroRoot>
  )
}

export default Hero
