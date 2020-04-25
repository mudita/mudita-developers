import React from "react"
import Hero from "../components/base/hero/hero.component"
import RecruitmentAd from "../components/base/recruitment-ad/recruitment-ad.component"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AppFunctionComponent from "../types/app-function-component.interface"

const IndexPage: AppFunctionComponent = () => (
  <Layout>
    <SEO title="App'n'roll Developers" />
    <Hero />
    <RecruitmentAd />
  </Layout>
)

export default IndexPage
