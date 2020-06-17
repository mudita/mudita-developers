import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import GuideContent from "../../components/base/guide-content/guide-content.component"
import GuideLayout from "../../components/base/layout-block/guide-layout"
import PageTitle from "../../components/base/page-title/page-title.component"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AppFunctionComponent from "../../types/app-function-component.interface"

interface Props {
  data: {
    okr: {
      body: string
    }
  }
}

const Boards: AppFunctionComponent<Props> = ({
  data: {
    okr: { body: boardsBody },
  },
}) => {
  return (
    <Layout>
      <SEO title="Boards" />
      <PageTitle>Boards</PageTitle>
      <GuideLayout>
        <GuideContent>
          <MDXRenderer>{boardsBody}</MDXRenderer>
        </GuideContent>
      </GuideLayout>
    </Layout>
  )
}

export default Boards

export const query = graphql`
  {
    okr: mdx(fileAbsolutePath: { glob: "**/boards.mdx" }) {
      body
    }
  }
`
