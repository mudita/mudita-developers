import React from "react"
import styled from "styled-components"
import BoxGrid from "../../components/base/box-grid/box-grid.component"
import Box from "../../components/base/box/box.component"
import PageTitle from "../../components/base/page-title/page-title.component"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AppFunctionComponent from "../../types/app-function-component.interface"

const BoardsGrid = styled(BoxGrid)`
  margin-top: 2rem;
`

const Boards: AppFunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Boards" />
      <PageTitle>Boards</PageTitle>
      <BoardsGrid>
        <Box
          title={"Developer Ops"}
          description={
            "We're making the team better here. Track the progress of tasks here."
          }
          link={"https://trello.com/b/DYYMcnav/developerops"}
        />
        <Box
          title={"Objectives and Key Results"}
          description={
            "Track your and your teammates progress at becoming better developers."
          }
          link={"https://trello.com/b/AxQsuAXA/objectives-and-key-results"}
        />
        <Box
          title={"appnroll@npm"}
          description={"Keep track of the npm packages we create."}
          link={"https://trello.com/b/mSLDpNYT/npmappnroll"}
        />
        <Box
          title={"Learning"}
          description={"Share the knowledge and learn new things."}
          link={"https://trello.com/b/xw13w30S/anr-learning"}
        />
      </BoardsGrid>
    </Layout>
  )
}

export default Boards
