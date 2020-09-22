import styled from "styled-components"

const GuideContent = styled.section`
  // FIXME: Something's wrong here. There shouldn't be any need for calculation.
  max-width: calc(100% - 330px);
  margin: 0 2rem;
  font-size: 1.2rem;
  line-height: 1.7;

  h1 {
    color: rgb(234, 40, 41);
  }
`

export default GuideContent
