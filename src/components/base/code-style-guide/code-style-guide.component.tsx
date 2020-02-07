import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import AppFunctionComponent from "../../../types/app-function-component.interface"

interface Props {
  content: string
}

const CodeStyleGuide: AppFunctionComponent<Props> = ({ content }) => {
  return <MDXRenderer>{content}</MDXRenderer>
}

export default CodeStyleGuide
