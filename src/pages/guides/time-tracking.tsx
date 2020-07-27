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

const TimeTrackingGuidePage: AppFunctionComponent<Props> = ({
  data: {
    guide: {
      body: timeTrackingGuideBody,
      tableOfContents: { items: tocItems },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Time Tracking Guide" />
      <PageTitle>Time Tracking Guide</PageTitle>
      <GuideLayout>
        <StyleguideTableOfContents items={tocItems} />
        <GuideContent>
          <CodeStyleGuide content={timeTrackingGuideBody} />
        </GuideContent>
      </GuideLayout>
    </Layout>
  )
}

export default TimeTrackingGuidePage

export const query = graphql`
  {
    guide: mdx(fileAbsolutePath: { glob: "**/time-tracking.mdx" }) {
      body
      tableOfContents
    }
  }
`
