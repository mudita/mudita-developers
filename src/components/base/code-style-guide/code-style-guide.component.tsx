import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"

const Container = styled.div`
  & > :first-child {
    margin-top: 0;
  }
`

interface Props {
  content: string
}

const CodeStyleGuide: AppFunctionComponent<Props> = ({ content }) => {
  return (
    <Container>
      <MDXRenderer>{content}</MDXRenderer>
    </Container>
  )
}

export default CodeStyleGuide
