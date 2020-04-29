import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../types/app-function-component.interface"

const SectionWrapper = styled.div`
  @font-face {
    font-family: "Faux Snow";
    src: local("Faux Snow"), local("Faux Snow"),
      url("../../fonts/fauxsnow-webfont.woff") format("woff2"),
      url("../../fonts/fauxsnow-webfont.woff2") format("woff");
    font-weight: 300;
    font-style: normal;
  }
`

const HeroSection: AppFunctionComponent = () => {
  return <SectionWrapper>Hero Section</SectionWrapper>
}

export default HeroSection
