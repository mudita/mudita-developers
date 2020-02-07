import React from "react"
import PageTitle from "../components/base/page-title/page-title.component"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AppFunctionComponent from "../types/app-function-component.interface"

const BlogPage: AppFunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <PageTitle>Blog</PageTitle>
    </Layout>
  )
}

export default BlogPage
