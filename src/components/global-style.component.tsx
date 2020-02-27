import { createGlobalStyle } from "styled-components"
import { Theme } from "../theming/theme"

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  html, body  {
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    line-height: 1.5;
  }
`

export default GlobalStyle
