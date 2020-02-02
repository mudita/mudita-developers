import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"

const RecruitmentAdRoot = styled.section`
  margin: 1rem 0;
  padding: 2rem 0;
  border-style: solid;
  border-color: red;
  border-width: 1px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  &::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;

    border-right: 10px solid red;
    margin-right: 1rem;
  }

  &::after {
    content: "";
    margin-left: 1rem;
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;

    border-left: 10px solid red;
  }
`

const CareersLink = styled.a`
  color: red;
  text-decoration: none;
`

const RecruitmentAd: AppFunctionComponent = () => {
  return (
    <RecruitmentAdRoot>
      <span>
        Wan't to join us? Head over to the{" "}
        <CareersLink href="https://appnroll.com/careers">
          careers page{" "}
        </CareersLink>
        and see the open positions.
      </span>
    </RecruitmentAdRoot>
  )
}

export default RecruitmentAd
