import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"

interface BoxProps {
  title: string
  description: string
  link: string
}

const linkStyles = css`
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

const Container = styled(Link)`
  ${linkStyles}
`

const ExternalLink = styled.a`
  ${linkStyles}
`

const Box: AppFunctionComponent<BoxProps> = ({ title, description, link }) => {
  const content = (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  )

  return link.startsWith("http") ? (
    <ExternalLink href={link} rel={"noopener"}>
      {content}
    </ExternalLink>
  ) : (
    <Container to={link}>{content}</Container>
  )
}

export default Box
