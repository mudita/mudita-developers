import React, { useEffect, useRef } from "react"
import { TweenLite, TimelineLite } from "gsap"
import AppFunctionComponent from "../../types/app-function-component.interface"
import styled from "styled-components"
import snowImage from "../../images/snow.jpg"
import gold from "../../images/background-gold.jpg"
import cat from "../../images/cat.jpg"
import rose from "../../images/roses.jpg"
import waterdrops from "../../images/waterdrops.jpg"

const SectionWrapper = styled.div`
  min-height: 200vh;
  margin-left: 50px;
  overflow: hidden;

  @font-face {
    font-family: "Faux Snow";
    src: local("Faux Snow"), local("Faux Snow"),
      url("../../fonts/fauxsnow-webfont.woff") format("woff2"),
      url("../../fonts/fauxsnow-webfont.woff2") format("woff");
    font-weight: 300;
    font-style: normal;
  }
`
const TextWithBackground = styled.p`
  font-weight: 1000;
  -webkit-background-clip: text;
  color: transparent;
  background-image: url(${snowImage});
  font-size: 360px;
  line-height: 360px;
  word-break: break-all;
  background-clip: text;
  background-size: cover;
  background-position-x: 542px;
  background-position-y: 951px;
`

const SnowWrapper = styled.div`
  position: relative;
`

const Snow = styled.p`
  font-family: 'Faux Snow';
  position: absolute;
  word-break: break-all;
  display: flex;
  width: 100%;
  margin:
  justify-content: space-around;
  flex-wrap: wrap;
  transform: translate3d(-100%, -100%, 0);
  opacity: 0;
`

const Snowflake = styled.p`
  font-family: "Faux Snow";
  font-size: 80px;
  color: #fff;
  transition: transform 0.5s ease-in-out;
  margin: 80px;

  &:hover {
    transform: rotate(180deg);
  }
`

const Background = styled("div")<{ image: string; translation?: number }>`
  background-image: url(${props => props.image ?? snowImage});
  width: 100%;
  height: 40vh;
  background-attachment: fixed;
  background-position-x: 50%;
  background-position-y: 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 54vh;
  max-height: 1200px;
  min-height: 200px;
`

const TextBlock = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
`

const exampleText =
  "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur, adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?"

const getViewportHeight = () => {
  const a = document.documentElement.clientHeight
  const b = window.innerHeight
  return a < b ? b : a
}

const getViewportScroll = () => {
  if (typeof window.scrollY !== undefined) {
    return window.scrollY
  }
  if (typeof pageYOffset !== undefined) {
    return pageYOffset
  }
  let doc = document.documentElement
  doc = doc.clientHeight ? doc : document.body
  return doc.scrollTop
}

const doParallax = (images: any[]) => {
  const offset = getViewportScroll()
  const vHeight = getViewportHeight()

  images.map(image => {
    const element = image.current
    const elementOffset = element?.offsetTop
    const elementHeight = element?.offsetHeight

    if (
      elementOffset > offset + vHeight ||
      elementOffset + elementHeight < offset
    ) {
      return
    }
    element.style.backgroundPositionY =
      Math.round(((elementOffset - offset) * 2) / 3) + "px"
  })
}

const HeroSection: AppFunctionComponent = () => {
  const parallaxRef = useRef<HTMLInputElement>(null)
  const parallaxRef2 = useRef<HTMLInputElement>(null)
  const parallaxRef3 = useRef<HTMLInputElement>(null)
  const parallaxRef4 = useRef<HTMLInputElement>(null)

  const snowRef = useRef<HTMLInputElement>(null)

  const images = [parallaxRef, parallaxRef2, parallaxRef3, parallaxRef4]

  useEffect(() => {
    document.addEventListener("scroll", () => doParallax(images))

    const moveDown = TweenLite.to(snowRef.current, 8, {
      duration: 8,
      x: 300,
      y: 150,
    })
    const moveToSides = TweenLite.to(snowRef.current, 8, {
      duration: 8,
      x: 600,
      y: 300,
    })
    const disappear = TweenLite.to(snowRef.current, 2, {
      duration: 2,
      opacity: 0,
    })
    const appear = TweenLite.to(snowRef.current, 2, { duration: 2, opacity: 1 })
    const timeline = new TimelineLite({ repeat: 15 })

    timeline
      .add(moveDown)
      .add(moveToSides, 2)
      .add(disappear, 6)
      .add(appear, 0)
  })

  return (
    <SectionWrapper>
      <SnowWrapper>
        <Snow ref={snowRef}>
          {"gq34uoerfji098egq34uoerfji098e".split("").map(el => (
            <Snowflake key={el}>{el}</Snowflake>
          ))}
        </Snow>
        <TextWithBackground>Parallax effect!</TextWithBackground>
      </SnowWrapper>
      <Background ref={parallaxRef} image={gold} />
      <TextBlock>{exampleText}</TextBlock>
      <Background ref={parallaxRef2} image={cat} />
      <TextBlock>{exampleText}</TextBlock>
      <Background ref={parallaxRef3} image={rose} />
      <TextBlock>{exampleText}</TextBlock>
      <Background ref={parallaxRef4} image={waterdrops} />
      <TextBlock>{exampleText + exampleText}</TextBlock>
    </SectionWrapper>
  )
}

export default HeroSection
