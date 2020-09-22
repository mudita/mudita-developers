import React from "react"
import styled from "styled-components"
import BoxGrid from "../components/base/box-grid/box-grid.component"
import Hero from "../components/base/hero/hero.component"
import RecruitmentAd from "../components/base/recruitment-ad/recruitment-ad.component"
import Box from "../components/base/box/box.component"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AppFunctionComponent from "../types/app-function-component.interface"

const PageColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const IndexPage: AppFunctionComponent = () => (
  <Layout>
    <SEO title="App'n'roll Developers" />
    <PageColumn>
      <Hero />
      <BoxGrid>
        <Box
          title={"Code styleguide"}
          description={"Learn about the rules fo the code."}
          link={"/styleguide"}
        />
        <Box
          title={"Developer guides"}
          description={"Read the guides about working in the team."}
          link={"/guides"}
        />
      </BoxGrid>
      <RecruitmentAd />
    </PageColumn>
  </Layout>
)

export default IndexPage
