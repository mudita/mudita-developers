import { graphql } from "gatsby"
import React from "react"
import CodeStyleGuide from "../../components/base/code-style-guide/code-style-guide.component"
import GuideContent from "../../components/base/guide-content/guide-content.component"
import GuideLayout from "../../components/base/layout-block/guide-layout"
import PageContribution from "../../components/base/page-contribution/page-contribution.component"
import PageTitle from "../../components/base/page-title/page-title.component"
import StyleguideTableOfContentsItem from "../../components/base/styleguide-table-of-contents/styleguide-table-of-contents-item.interface"
import StyleguideTableOfContents from "../../components/base/styleguide-table-of-contents/styleguide-table-of-contents.component"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AppFunctionComponent from "../../types/app-function-component.interface"
import { GithubContributors } from "../../types/github-contributors.interface"

interface Props {
  data: {
    guide: {
      body: string
      tableOfContents: {
        items: StyleguideTableOfContentsItem[]
      }
    }
    github: GithubContributors
  }
}

const TimeTrackingGuidePage: AppFunctionComponent<Props> = ({
  data: {
    guide: {
      body: timeTrackingGuideBody,
      tableOfContents: { items: tocItems },
    },
    github,
  },
}) => {
  console.log(github)
  return (
    <Layout>
      <SEO title="Time Tracking Guide" />
      <PageTitle>Time Tracking Guide</PageTitle>
      <PageContribution
        contributions={github}
        path={"src/content/time-tracking.mdx"}
      />
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
    github {
      repository(owner: "Appnroll", name: "appnroll-developers") {
        object(expression: "master") {
          ... on GitHub_Commit {
            history(first: 100, path: "src/content/time-tracking.mdx") {
              nodes {
                authoredDate
                author {
                  user {
                    name
                    avatarUrl
                    login
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
