import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Title = styled.h2`
  color: red;
`

interface Props {
  title: string
  body: string
}

const CodeStyleguideItem: AppFunctionComponent<Props> = ({ title, body }) => {
  return (
    <section>
      <Title>{title}</Title>
      <MDXRenderer>{body}</MDXRenderer>
    </section>
  )
}

export default CodeStyleguideItem
