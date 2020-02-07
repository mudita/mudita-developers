import React from "react"
import AppFunctionComponent from "../../../types/app-function-component.interface"

interface Props {
  items: { url: string; title: string }[]
}

const StyleguideTableOfContents: AppFunctionComponent<Props> = ({ items }) => {
  return (
    <ul>
      {items.map(({ title, url }) => (
        <li key={url}>
          <a href={url}>{title}</a>
        </li>
      ))}
    </ul>
  )
}

export default StyleguideTableOfContents
