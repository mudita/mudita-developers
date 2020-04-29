import { createGlobalStyle } from "styled-components"
import { Theme } from "../theming/theme"
import { textColor } from "../theming/theme-getters"

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  html, body  {
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    line-height: 1.5;
    color: ${textColor("primary")};
    scroll-behavior: smooth;
  }
`

export default GlobalStyle
