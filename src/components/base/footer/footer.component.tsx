import React from "react"
import styled from "styled-components"
import AppnrollLogo from "../../../images/appnroll.svg"
import AppFunctionComponent from "../../../types/app-function-component.interface"

const FooterRoot = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`

const AnrLink = styled.a`
  margin-left: 1rem;
`

const Footer: AppFunctionComponent = () => {
  return (
    <FooterRoot>
      <AnrLink href="https://www.appnroll.com/" title="App'n'roll">
        <AppnrollLogo />
      </AnrLink>
    </FooterRoot>
  )
}

export default Footer
