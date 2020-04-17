import React from "react"
import styled, { ThemeProvider } from "styled-components"
import AppFunctionComponent from "../types/app-function-component.interface"
import Loader from "../components/animations/loader.component"
import SideMenu from "../components/animations/side-menu.component"
import HeroSection from "../components/animations/hero-section.component"
import ScrollAnimation from "../components/animations/scroll-animation.component"
import theme from "../theming/theme"
import { Normalize } from "styled-normalize"
import GlobalStyle from "../components/global-style.component"

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: #100e17;
  color: white;
  width: 100%;
`

const AnimationsPage: AppFunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Normalize />
        <GlobalStyle />
        <Wrapper>
          <Loader />
          <SideMenu />
          <HeroSection />
          <ScrollAnimation />
        </Wrapper>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default AnimationsPage
