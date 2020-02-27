import React, { useState } from "react"
import "../components/MovementV.ttf"
import styled, { css } from "styled-components"
import "../components/font.css"

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Heading = styled.h1<{ spac: number; wght: number }>`
  margin: 0;
  font-family: Movement;
  font-size: 200px;
  line-height: 200px;
  font-variation-settings: "SPAC" ${({ spac }) => spac},
    "wght" ${({ wght }) => wght};
  transition: font-variation-settings ease-in-out 150ms;
`

const Controls = styled.div`
  font-size: 2rem;
  margin-top: 2rem;

  button {
  }
`

const Button = styled.button<{ selected: boolean }>`
  background: none;
  border: none;
  font-size: inherit;

  ${({ selected }) =>
    selected &&
    css`
      border-bottom: 3px solid black;
    `}

  &:focus {
    outline: none;
  }
`

const Char = styled.span<{ index: number; dancing: boolean }>`
  @keyframes breathe {
    0% {
      font-variation-settings: "wght" 100, "wdth" 85;
      font-size: 10vw;
    }
    60% {
      font-variation-settings: "wght" 700, "wdth" 100;
      font-size: 11vw;
    }

    100% {
      font-variation-settings: "wght" 100, "wdth" 85;
      font-size: 10vw;
    }
  }

  ${({ dancing }) =>
    dancing &&
    css`
      animation: breathe 4000ms infinite both;
    `}
  animation-delay: calc((${({ index }) => index} + 1) * 400ms);
`

const FontDemoPage = () => {
  const [wght, setWght] = useState(100)
  const [spac, setSpac] = useState(100)
  const [dancing, setDancing] = useState(false)
  const text = "Bajery".split("").map((char, index) => (
    <Char key={index} index={index} dancing={dancing}>
      {char}
    </Char>
  ))
  return (
    <Container>
      <Heading spac={spac} wght={wght}>
        {text}
      </Heading>
      <Controls>
        <Button selected={wght === 900} onClick={() => setWght(900)}>
          bold
        </Button>
        <Button selected={wght === 100} onClick={() => setWght(100)}>
          thin
        </Button>
        <Button selected={wght === 400} onClick={() => setWght(400)}>
          normal
        </Button>
        <Button selected={spac === 100} onClick={() => setSpac(100)}>
          straight
        </Button>
        <Button selected={spac === 120} onClick={() => setSpac(120)}>
          curved
        </Button>
        <Button selected={dancing} onClick={() => setDancing(!dancing)}>
          dance
        </Button>
      </Controls>
    </Container>
  )
}

export default FontDemoPage
