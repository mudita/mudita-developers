import React from "react"
import PageTitle from "../components/base/page-title/page-title.component"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AppFunctionComponent from "../types/app-function-component.interface"

const DevelopersPage: AppFunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Developers" />
      <PageTitle>Developers</PageTitle>
    </Layout>
  )
}

export default DevelopersPage
