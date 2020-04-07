import { Link } from "gatsby"
import React from "react"
import PageTitle from "../../components/base/page-title/page-title.component"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AppFunctionComponent from "../../types/app-function-component.interface"

const GuidePage: AppFunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Guide" />
      <PageTitle>Guide</PageTitle>
      <Link to={"/guide/code-review"}>Code Review and Pull Requests Guide</Link>
    </Layout>
  )
}

export default GuidePage
