import React from "react"
import Feature from "../components/base/feature/feature.component"
import Hero from "../components/base/hero/hero.component"
import LayoutBlock from "../components/base/layout-block/layout-block.component"
import RecruitmentAd from "../components/base/recruitment-ad/recruitment-ad.component"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AppFunctionComponent from "../types/app-function-component.interface"

const IndexPage: AppFunctionComponent = () => (
  <Layout>
    <SEO title="App'n'roll Developers" />
    <Hero />
    <RecruitmentAd />
    <LayoutBlock>
      <Feature
        title="We're blogging"
        linkText="Read the blog"
        linkPath="/blog"
        textSide="left"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          corporis culpa delectus doloremque, esse eum fugit illo in iste iure
          laborum nemo nisi non quaerat quia quos recusandae soluta veniam!
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          corporis culpa delectus doloremque, esse eum fugit illo in iste iure
          laborum nemo nisi non quaerat quia quos recusandae soluta veniam!
        </p>
      </Feature>
      <Feature
        title="Meet the Devs"
        linkText="Developers"
        linkPath="/developers"
        textSide="right"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        corporis culpa delectus doloremque, esse eum fugit illo in iste iure
        laborum nemo nisi non quaerat quia quos recusandae soluta veniam!
      </Feature>
      <Feature
        title="Our tech"
        linkText="Learn the technologies"
        linkPath="/technologies"
        textSide="left"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        corporis culpa delectus doloremque, esse eum fugit illo in iste iure
        laborum nemo nisi non quaerat quia quos recusandae soluta veniam!
      </Feature>
      <Feature
        title="Code style"
        linkText="See how we code"
        linkPath="/code-style"
        textSide="right"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        corporis culpa delectus doloremque, esse eum fugit illo in iste iure
        laborum nemo nisi non quaerat quia quos recusandae soluta veniam!
      </Feature>
      <Feature
        title="Developer Guide"
        linkText="Read the guide"
        linkPath="/guide"
        textSide="left"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        corporis culpa delectus doloremque, esse eum fugit illo in iste iure
        laborum nemo nisi non quaerat quia quos recusandae soluta veniam!
      </Feature>
      <Feature
        title="Useful resources"
        linkText="Browse the resources"
        linkPath="/resources"
        textSide="right"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        corporis culpa delectus doloremque, esse eum fugit illo in iste iure
        laborum nemo nisi non quaerat quia quos recusandae soluta veniam!
      </Feature>
    </LayoutBlock>
  </Layout>
)

export default IndexPage
