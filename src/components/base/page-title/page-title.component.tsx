import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"
import GuideLayout from "../layout-block/guide-layout"

const Header = styled.header`
  padding: 1rem 2rem;
  background-color: rgb(234, 40, 41);
  color: white;
`

const PageTitle: AppFunctionComponent = ({ children }) => {
  return (
    <Header>
      <GuideLayout>
        <h1>{children}</h1>
      </GuideLayout>
    </Header>
  )
}

export default PageTitle
