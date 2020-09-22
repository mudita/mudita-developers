import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"
import AppnrollLogo from "../../../images/appnroll-logotype.svg"

const ContentWrapper = styled.div`
  padding: 1.45rem 2rem;
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
  text-decoration: none;
`

const Subtitle = styled.span`
  margin-top: 9px;
  margin-left: 8px;
  text-transform: uppercase;
  color: black;
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

const NavigationLink = styled(Link).attrs({
  activeClassName: "active",
  partiallyActive: true,
})`
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

const Header: AppFunctionComponent = () => {
  return (
    <header>
      <ContentWrapper>
        <TitleLink to="/">
          <Title>
            <Logo />
            <Subtitle>Developers</Subtitle>
          </Title>
        </TitleLink>
        <nav>
          <NavigationList>
            <NavigationItem>
              <NavigationLink to="/styleguide">Code styleguide</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/guides">Developer guides</NavigationLink>
            </NavigationItem>
          </NavigationList>
        </nav>
      </ContentWrapper>
    </header>
  )
}

export default Header
