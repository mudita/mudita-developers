import React from "react"
import PageTitle from "../components/base/page-title/page-title.component"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AppFunctionComponent from "../types/app-function-component.interface"

const TechnologiesPage: AppFunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Technologies" />
      <PageTitle>Technologies</PageTitle>
    </Layout>
  )
}

export default TechnologiesPage
