import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"

const FeatureRoot = styled.section<{ textSide: "left" | "right" }>`
  margin: 4rem 0;
  display: flex;
  flex-direction: ${({ textSide }) =>
    textSide === "right" ? "row-reverse" : "row"};
`

const ImagePlaceholder = styled.div`
  flex-shrink: 0;
  width: 400px;
  height: 400px;
  background: rgb(253, 29, 29);
  background: linear-gradient(
    180deg,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 69, 169, 1) 100%
  );
`

const Title = styled.h2`
  color: red;
`

const Content = styled.div<{ side: "left" | "right" }>`
  ${({ side }) =>
    side === "left"
      ? css`
          margin-right: 2rem;
        `
      : css`
          margin-left: 2rem;
        `}
`

const TextWrapper = styled.div`
  margin-bottom: 1.5rem;
`

const FeatureLink = styled(Link)`
  color: red;
  text-decoration: none;
  &::after {
    content: "";
    margin-left: 0.5rem;
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;

    border-left: 10px solid red;
  }
`

interface Props {
  title: string
  linkText: string
  linkPath: string
  textSide: "left" | "right"
}

const Feature: AppFunctionComponent<Props> = ({
  title,
  linkPath,
  linkText,
  textSide = "left",
  children,
}) => {
  return (
    <FeatureRoot textSide={textSide}>
      <Content side={textSide}>
        <Title>{title}</Title>
        <TextWrapper>{children}</TextWrapper>
        <FeatureLink to={linkPath}>{linkText}</FeatureLink>
      </Content>
      <ImagePlaceholder />
    </FeatureRoot>
  )
}

export default Feature
