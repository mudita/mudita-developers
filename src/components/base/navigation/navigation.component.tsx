import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"

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

const Navigation: AppFunctionComponent = () => {
  return (
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
  )
}

export default Navigation
