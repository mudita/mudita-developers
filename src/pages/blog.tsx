import React from "react"
import PageTitle from "../components/base/page-title/page-title.component"
import Layout from "../components/layout"
import AppFunctionComponent from "../types/app-function-component.interface"

const BlogPage: AppFunctionComponent = () => {
  return (
    <Layout>
      <PageTitle>Blog</PageTitle>
    </Layout>
  )
}

export default BlogPage
