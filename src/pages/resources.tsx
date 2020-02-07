import React from "react"
import PageTitle from "../components/base/page-title/page-title.component"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AppFunctionComponent from "../types/app-function-component.interface"

const ResourcesPage: AppFunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Resources" />
      <PageTitle>Resources</PageTitle>
    </Layout>
  )
}

export default ResourcesPage
