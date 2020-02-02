import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"
import LayoutBlock from "../layout-block/layout-block.component"

const Header = styled.header`
  padding: 1rem 0;
  background-color: red;
  color: white;
`

const PageTitle: AppFunctionComponent = ({ children }) => {
  return (
    <Header>
      <LayoutBlock>
        <h1>{children}</h1>
      </LayoutBlock>
    </Header>
  )
}

export default PageTitle
