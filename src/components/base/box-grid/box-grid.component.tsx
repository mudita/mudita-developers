import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  justify-content: center;
  gap: 20px;
`

const BoxGrid: AppFunctionComponent = ({ children, className }) => {
  return <Container className={className}>{children}</Container>
}

export default BoxGrid
