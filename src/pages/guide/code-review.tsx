import { graphql } from "gatsby"
import React from "react"
import CodeStyleGuide from "../../components/base/code-style-guide/code-style-guide.component"
import GuideContent from "../../components/base/guide-content/guide-content.component"
import GuideLayout from "../../components/base/layout-block/guide-layout"
import PageTitle from "../../components/base/page-title/page-title.component"
import StyleguideTableOfContentsItem from "../../components/base/styleguide-table-of-contents/styleguide-table-of-contents-item.interface"
import StyleguideTableOfContents from "../../components/base/styleguide-table-of-contents/styleguide-table-of-contents.component"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AppFunctionComponent from "../../types/app-function-component.interface"

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

const CodeReviewGuidePage: AppFunctionComponent<Props> = ({
  data: {
    guide: {
      body: codeReviewGuideBody,
      tableOfContents: { items: tocItems },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Code Review Guide" />
      <PageTitle>Code Review Guide</PageTitle>
      <GuideLayout>
        <StyleguideTableOfContents items={tocItems} />
        <GuideContent>
          <CodeStyleGuide content={codeReviewGuideBody} />
        </GuideContent>
      </GuideLayout>
    </Layout>
  )
}

export default CodeReviewGuidePage

export const query = graphql`
  {
    guide: mdx(fileAbsolutePath: { glob: "**/code-review.mdx" }) {
      body
      tableOfContents
    }
  }
`
