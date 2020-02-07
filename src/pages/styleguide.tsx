import { graphql } from "gatsby"
import React from "react"
import CodeStyleGuide from "../components/base/code-style-guide/code-style-guide.component"
import LayoutBlock from "../components/base/layout-block/layout-block.component"
import PageTitle from "../components/base/page-title/page-title.component"
import StyleguideTableOfContents from "../components/base/styleguide-table-of-contents/styleguide-table-of-contents.component"
import Layout from "../components/layout"
import AppFunctionComponent from "../types/app-function-component.interface"

interface Props {
  data: {
    guide: {
      body: string
      tableOfContents: {
        items: { url: string; title: string }[]
      }
    }
  }
}

const StyleGuidePage: AppFunctionComponent<Props> = ({
  data: {
    guide: {
      body: styleGuideBody,
      tableOfContents: { items: tocItems },
    },
  },
}) => {
  return (
    <Layout>
      <PageTitle>Code Styleguide</PageTitle>
      <LayoutBlock>
        <StyleguideTableOfContents items={tocItems} />
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
      tableOfContents
    }
  }
`
