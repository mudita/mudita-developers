import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"
import StyleguideTableOfContentsItem from "./styleguide-table-of-contents-item.interface"

const RawList = styled.ul`
  padding-left: 0;
  list-style: none;
`

const MainList = styled(RawList)`
  margin: 2rem;
  width: 200px;
  flex-shrink: 0;
`

const NestedList = styled(RawList)`
  padding-left: 1rem;
`

const ListItem = styled.li<{ primary: boolean }>`
  margin-top: ${({ primary }) => (primary ? 1 : 0.3)}rem;
`

const Anchor = styled.a<{ primary: boolean }>`
  display: block;
  padding-bottom: ${({ primary }) => (primary ? 0.5 : 0)}rem;
  color: ${({ primary }) => (primary ? `rgb(234, 40, 41)` : "black")};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

interface Props {
  items: StyleguideTableOfContentsItem[]
}

const Item: AppFunctionComponent<StyleguideTableOfContentsItem & {
  level: number
}> = ({ url, title, items, level }) => {
  const primary = level === 0
  return (
    <ListItem primary={primary}>
      <Anchor href={url} primary={primary}>
        {title}
      </Anchor>
      {items && level < 1 && (
        <NestedList>
          {items.map(item => (
            <Item key={item.url} {...item} level={level + 1} />
          ))}
        </NestedList>
      )}
    </ListItem>
  )
}

const StyleguideTableOfContents: AppFunctionComponent<Props> = ({ items }) => {
  return (
    <MainList>
      {items.map(item => (
        <Item key={item.url} {...item} level={0} />
      ))}
    </MainList>
  )
}

export default StyleguideTableOfContents
