import React from "react"
import PageTitle from "../components/base/page-title/page-title.component"
import Layout from "../components/layout"
import AppFunctionComponent from "../types/app-function-component.interface"

const DevelopersPage: AppFunctionComponent = () => {
  return (
    <Layout>
      <PageTitle>Developers</PageTitle>
    </Layout>
  )
}

export default DevelopersPage
