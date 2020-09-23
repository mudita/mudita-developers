import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"
import { GithubContributors } from "../../../types/github-contributors.interface"

const Container = styled.aside`
  margin: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: dimgray;
`

const Spacer = styled.aside`
  margin: 0 1rem;
  width: 4px;
  height: 4px;
  background: ${({ theme }) => theme.color.background.primary};
  border-radius: 4px;
`

const EditLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${({ theme }) => theme.color.text.link};
  }
`

const InfoBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Person = styled.a`
  font-size: 0;
  & + & {
    margin-left: 2px;
  }
`

const Photo = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 20px;
`

const EditTime = styled.time``

interface Props {
  contributions: GithubContributors
  path: string
}

const PageContribution: AppFunctionComponent<Props> = ({
  contributions,
  path,
}) => {
  const lastEditDate =
    contributions.repository.object.history.nodes[0].authoredDate
  const contributors = Array.from(
    new Map(
      contributions.repository.object.history.nodes.map(
        ({ author: { user } }) => [user.login, user]
      )
    ).values()
  )
  return (
    <Container>
      <InfoBox>
        Contributors:&nbsp;
        {contributors.map(({ login, avatarUrl, url, name }) => (
          <Person key={login} href={url} title={login}>
            <Photo src={avatarUrl} alt={name} />
          </Person>
        ))}
      </InfoBox>
      <Spacer />
      <InfoBox>
        Last edit:&nbsp;
        <EditTime dateTime={lastEditDate}>
          {new Date(lastEditDate).toLocaleDateString("pl")}
        </EditTime>
      </InfoBox>
      <Spacer />
      <InfoBox>
        <EditLink
          href={`https://github.com/Appnroll/appnroll-developers/edit/master/${path}`}
        >
          Edit this page
        </EditLink>
      </InfoBox>
    </Container>
  )
}

export default PageContribution
