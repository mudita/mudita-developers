import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"
import AppnrollLogo from "../../../images/appnroll-logo.svg"

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1rem;
`

const TitleLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const Logo = styled(AppnrollLogo)`
  margin-right: 0.5rem;
`

const NavigationList = styled.ul`
  margin-left: 0;
  padding: 0;
  list-style: none;
  display: flex;
`

const NavigationItem = styled.li`
  margin-right: 1rem;
`

const NavigationLink = styled(Link).attrs({ activeClassName: "active" })`
  position: relative;
  color: red;
  text-decoration: none;

  &::before {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }

  &::before {
    top: calc(100% + 10px);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: 10px solid #f00;
  }

  &.active::before,
  &:hover::before {
    opacity: 1;
  }
`

const LoginButton = styled.button`
  padding: 1rem;
  border: none;
  background-color: red;
  line-height: 1;
  color: #fff;
`

interface Props {
  siteTitle: string
}

const Header: AppFunctionComponent<Props> = ({ siteTitle }) => {
  return (
    <header>
      <ContentWrapper>
        <TitleLink to="/">
          <Title>
            <Logo />
            <span>{siteTitle}</span>
          </Title>
        </TitleLink>
        <nav>
          <NavigationList>
            <NavigationItem>
              <NavigationLink to="/styleguide">Code Styleguide</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/guide">Guide</NavigationLink>
            </NavigationItem>
          </NavigationList>
        </nav>
        <LoginButton>Login</LoginButton>
      </ContentWrapper>
    </header>
  )
}

export default Header
