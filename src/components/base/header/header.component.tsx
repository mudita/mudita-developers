import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"
import AppnrollLogo from "../../../images/appnroll-logo.svg"

const HeaderRoot = styled.header`
  border-bottom: 1px solid red;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  display: flex;
  align-items: center;
`

const Logo = styled(AppnrollLogo)`
  margin-right: 0.5rem;
`

const NavigationList = styled.ul`
  margin: 0 0 0 2rem;
  padding: 0;
  list-style: none;
  display: flex;
`

const NavigationItem = styled.li`
  margin-right: 1rem;
`

const LoginButton = styled.button`
  margin-left: auto;
`

interface Props {
  siteTitle: string
}

const Header: AppFunctionComponent<Props> = ({ siteTitle }) => {
  return (
    <HeaderRoot>
      <ContentWrapper>
        <Link to="/">
          <Title>
            <Logo />
            <span>{siteTitle}</span>
          </Title>
        </Link>
        <nav>
          <NavigationList>
            <NavigationItem>
              <Link to="/blog">Blog</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/devs">Developers</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/technologies">Technologies</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/guide">Guide</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="/resources">resources</Link>
            </NavigationItem>
          </NavigationList>
        </nav>
        <LoginButton>Login</LoginButton>
      </ContentWrapper>
    </HeaderRoot>
  )
}

export default Header
