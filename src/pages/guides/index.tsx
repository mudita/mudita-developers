import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import PageTitle from "../../components/base/page-title/page-title.component"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AppFunctionComponent from "../../types/app-function-component.interface"

const Content = styled.section`
  margin: 2rem;
`

const GuidesList = styled.ul`
  padding-left: 1rem;
`

const GuideItem = styled.li``

const GuideLink = styled(Link)`
  color: rgb(234, 40, 41);
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`

const GuidePage: AppFunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Guides" />
      <PageTitle>Guides</PageTitle>
      <Content>
        <GuidesList>
          <GuideItem>
            <GuideLink to={"/guides/pr-and-cr-guide"}>
              Code Review and Pull Requests Guide
            </GuideLink>
          </GuideItem>
        </GuidesList>
      </Content>
    </Layout>
  )
}

export default GuidePage
