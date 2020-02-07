import React from "react"
import AppFunctionComponent from "../../../types/app-function-component.interface"
import StyleguideTableOfContentsItem from "./styleguide-table-of-contents-item.interface"

interface Props {
  items: StyleguideTableOfContentsItem[]
}

const Item: AppFunctionComponent<StyleguideTableOfContentsItem> = ({
  url,
  title,
  items,
}) => {
  return (
    <li>
      <a href={url}>{title}</a>
      {items && (
        <ul>
          {items.map(item => (
            <Item key={item.url} {...item} />
          ))}
        </ul>
      )}
    </li>
  )
}

const StyleguideTableOfContents: AppFunctionComponent<Props> = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <Item key={item.url} {...item} />
      ))}
    </ul>
  )
}

export default StyleguideTableOfContents
