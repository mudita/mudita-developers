import { graphql } from "gatsby"
import React from "react"
import CodeStyleGuide from "../components/base/code-style-guide/code-style-guide.component"
import LayoutBlock from "../components/base/layout-block/layout-block.component"
import PageTitle from "../components/base/page-title/page-title.component"
import Layout from "../components/layout"
import AppFunctionComponent from "../types/app-function-component.interface"

interface Props {
  data: {
    guide: {
      body: string
    }
  }
}

const StyleGuidePage: AppFunctionComponent<Props> = ({
  data: {
    guide: { body: styleGuideBody },
  },
}) => {
  return (
    <Layout>
      <PageTitle>Code Styleguide</PageTitle>
      <LayoutBlock>
        <CodeStyleGuide content={styleGuideBody} />
      </LayoutBlock>
    </Layout>
  )
}

export default StyleGuidePage

export const query = graphql`
  {
    guide: mdx(fileAbsolutePath: { glob: "**/styleguide.mdx" }) {
      body
    }
  }
`
