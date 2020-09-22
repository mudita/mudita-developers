import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"

interface BoxProps {
  title: string
  description: string
  link: string
}

const Container = styled(Link)`
  width: 300px;
  padding: 2rem;
  background: black;
  text-decoration: none;
  color: white;

  &:hover {
    background: ${({ theme }) => theme.color.background.primary};
  }

  h3 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
`

const Box: AppFunctionComponent<BoxProps> = ({ title, description, link }) => {
  return (
    <Container to={link}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  )
}

export default Box
