import { graphql } from "gatsby"
import React from "react"
import CodeStyleGuide from "../components/base/code-style-guide/code-style-guide.component"
import LayoutBlock from "../components/base/layout-block/layout-block.component"
import PageTitle from "../components/base/page-title/page-title.component"
import StyleguideTableOfContentsItem from "../components/base/styleguide-table-of-contents/styleguide-table-of-contents-item.interface"
import StyleguideTableOfContents from "../components/base/styleguide-table-of-contents/styleguide-table-of-contents.component"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AppFunctionComponent from "../types/app-function-component.interface"

interface Props {
  data: {
    guide: {
      body: string
      tableOfContents: {
        items: StyleguideTableOfContentsItem[]
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
      <SEO title="Code Styleguide" />
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
