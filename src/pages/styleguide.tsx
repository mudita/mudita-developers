import { graphql } from "gatsby"
import React from "react"
import CodeStyleguideItem from "../components/base/code-styleguide-item/code-styleguide-item"
import StyleguideItem from "../components/base/code-styleguide-item/StyleguideItem"
import LayoutBlock from "../components/base/layout-block/layout-block.component"
import PageTitle from "../components/base/page-title/page-title.component"
import Layout from "../components/layout"
import AppFunctionComponent from "../types/app-function-component.interface"

interface Props {
  data: {
    guides: {
      nodes: StyleguideItem[]
    }
  }
}

const StyleGuidePage: AppFunctionComponent<Props> = ({
  data: {
    guides: { nodes: guides },
  },
}) => {
  return (
    <Layout>
      <PageTitle>Code Styleguide</PageTitle>
      <LayoutBlock>
        {guides.map(({ id, body, frontmatter: { title } }) => (
          <CodeStyleguideItem title={title} key={id} body={body} />
        ))}
      </LayoutBlock>
    </Layout>
  )
}

export default StyleGuidePage

export const query = graphql`
  {
    guides: allMdx(filter: { fileAbsolutePath: { glob: "**/styleguide/**" } }) {
      nodes {
        frontmatter {
          title
        }
        body
      }
    }
  }
`
