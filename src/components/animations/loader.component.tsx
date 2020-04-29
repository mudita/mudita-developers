import React, { useEffect } from "react"
import AppFunctionComponent from "../../types/app-function-component.interface"
import styled from "styled-components"
import anime from "animejs"

const Root = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Svg = styled.svg`
  width: 60%;
  display: block;
  margin: 0 auto;
`

const Loader: AppFunctionComponent = () => {
  useEffect(() => {
    const tl = anime.timeline({
      duration: 6000,
      easing: "easeInOutQuart",
    })

    tl.add({
      targets: "#mainLogo",
      keyframes: [
        { scale: 0.2, rotate: "0deg" },
        { scale: 0.6, rotate: "360deg" },
      ],
      duration: 3000,
    })

    tl.add(
      {
        targets: ["#logo", "feTurbulence", "feDisplacementMap"],
        baseFrequency: 0,
        numOctaves: 0,
        scale: 1,
      },
      "-=2000"
    )

    tl.add({
      targets: "#mainLogo",
      scale: 0,
      duration: 500,
    })
  })
  return (
    <Root>
      <Svg id="mainLogo" viewBox="0 0 113 39">
        <filter id="displacementFilter">
          <feTurbulence
            type="turbulenece"
            baseFrequency="0.03"
            numOctaves="4"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <g fill="none" style={{ filter: "url(#displacementFilter)" }}>
          <path
            id="logo"
            fill="#EA2829"
            d="M15.413 24.193v12.788l-1.72 1.725-1.717-1.725V24.193h3.437zm-5.863 0v10.355L6.115 31.1v-6.908H9.55zm8.289-13.557l3.435 2.406V31.1l-3.435 3.448V10.636zm5.86-5.108l3.44 2.407v17.282l-3.44 3.451V5.528zm-8.286 12.91v3.448H3.687v6.78L.25 25.218v-6.78h15.163zM6.115.25L9.55 2.658v13.474H6.115V.25zm5.86 10.385l3.438 2.406v3.09h-3.437v-5.496z"
          />
          <path
            id="text"
            fill="#000"
            d="M53.214 18.469c.863 0 1.598.17 2.199.51.6.339 1.09.77 1.472 1.29.38.522.652 1.096.822 1.723.17.627.253 1.221.253 1.783 0 .703-.117 1.365-.35 1.986-.234.62-.56 1.163-.98 1.625-.422.463-.92.83-1.497 1.099-.579.27-1.212.404-1.902.404-.443 0-.825-.047-1.146-.14-.321-.094-.601-.206-.842-.335-.238-.128-.435-.26-.586-.395-.151-.135-.268-.249-.35-.343v4.13h-2.908V18.802h2.732v1.072h.051c.292-.375.684-.703 1.175-.984.492-.28 1.11-.421 1.857-.421zm11.682 0c.866 0 1.598.17 2.199.51.6.339 1.092.77 1.472 1.29.38.522.654 1.096.822 1.723.17.627.255 1.221.255 1.783 0 .703-.116 1.365-.35 1.986-.233.62-.562 1.163-.98 1.625-.421.463-.922.83-1.499 1.099-.579.27-1.211.404-1.9.404-.445 0-.827-.047-1.148-.14-.321-.094-.601-.206-.84-.335-.24-.128-.435-.26-.588-.395-.151-.135-.268-.249-.35-.343v4.13H59.08V18.802h2.732v1.072h.054c.292-.375.683-.703 1.172-.984.492-.28 1.11-.421 1.857-.421zm-25.22 0c.396 0 .75.043 1.067.131.314.088.589.2.822.334.234.135.426.281.58.44.15.158.274.313.367.465h.034v-1.037h2.91v9.753h-2.91v-1.054h-.034c-.13.234-.292.439-.492.615-.197.175-.425.322-.68.439-.259.117-.531.202-.816.255-.287.053-.569.079-.849.079-.771 0-1.46-.14-2.068-.422-.608-.281-1.119-.662-1.532-1.142-.414-.48-.733-1.034-.954-1.66-.224-.627-.333-1.292-.333-1.995 0-.797.134-1.517.401-2.161.27-.645.625-1.192 1.07-1.643.443-.451.96-.797 1.55-1.037.589-.24 1.212-.36 1.866-.36zM99 18.486c.888 0 1.656.158 2.31.475.655.316 1.198.723 1.63 1.22.434.499.757 1.055.974 1.67.214.615.323 1.221.323 1.819 0 .597-.11 1.204-.323 1.819-.217.615-.54 1.171-.973 1.669-.433.498-.976.905-1.63 1.221-.655.317-1.423.475-2.311.475-.888 0-1.66-.158-2.312-.475-.654-.316-1.196-.723-1.63-1.221-.433-.498-.756-1.054-.973-1.67-.214-.614-.323-1.22-.323-1.818 0-.598.11-1.204.323-1.819.217-.615.54-1.171.973-1.67.431-.497.976-.904 1.63-1.22.652-.317 1.424-.475 2.312-.475zm-19.127-.017c.465 0 .93.082 1.392.246.462.164.827.363 1.094.597.13.117.26.255.395.413.133.158.253.36.36.606.104.246.192.542.262.888.068.345.105.758.105 1.238v6.098h-2.907v-5.324c0-.176-.01-.378-.027-.607-.017-.228-.073-.448-.168-.659-.092-.21-.24-.39-.445-.536-.204-.146-.499-.22-.886-.22-.42 0-.742.08-.963.238-.221.158-.384.346-.489.562-.107.217-.168.44-.185.668-.017.229-.027.419-.027.571v5.307h-2.907v-9.753h2.715v1.037h.034c.07-.117.168-.255.29-.413.124-.158.287-.307.491-.448.205-.14.458-.26.762-.36.304-.1.671-.15 1.104-.15zm14.047 0v2.934c-.338.012-.647.041-.93.088-.28.047-.52.135-.727.264-.202.128-.36.31-.472.544-.11.235-.165.533-.165.896v5.36H88.72v-9.753h2.732v1.037h.034c.058-.117.14-.255.245-.413.105-.158.249-.307.429-.448.182-.14.416-.26.7-.36.287-.1.64-.15 1.06-.15zm14.346-2.917v13.003h-2.907V15.552h2.907zm4.484 0v13.003h-2.908V15.552h2.908zm-72.657 5.64c-.419 0-.779.08-1.076.237-.299.159-.547.36-.744.607-.2.246-.346.515-.44.808-.093.293-.14.58-.14.861 0 .234.045.492.132.773.088.281.229.548.421.8.192.252.44.463.745.632.301.17.676.255 1.121.255.455 0 .837-.085 1.146-.255.309-.17.562-.38.754-.632.192-.252.329-.524.411-.817.08-.293.122-.557.122-.791 0-.293-.049-.586-.149-.879-.1-.293-.25-.56-.454-.8-.205-.24-.463-.433-.772-.58-.309-.146-.669-.219-1.077-.219zm12.523 0c-.396 0-.746.076-1.05.229-.305.152-.558.348-.762.588-.204.24-.358.507-.465.8-.104.293-.158.586-.158.878 0 .305.056.607.168.905.112.3.273.566.482.8.21.234.465.422.761.562.3.14.64.211 1.024.211.387 0 .728-.07 1.025-.21.299-.141.552-.329.764-.563.209-.234.37-.5.481-.8.11-.298.166-.6.166-.905 0-.292-.051-.585-.158-.878-.105-.293-.258-.56-.465-.8-.202-.24-.457-.436-.762-.588-.301-.153-.652-.229-1.05-.229zm11.685 0c-.396 0-.75.076-1.05.229-.305.152-.558.348-.762.588-.207.24-.36.507-.465.8-.107.293-.158.586-.158.878 0 .305.056.607.165.905.112.3.273.566.482.8.212.234.465.422.764.562.297.14.637.211 1.024.211.384 0 .727-.07 1.024-.21.297-.141.552-.329.762-.563.209-.234.372-.5.481-.8.112-.298.168-.6.168-.905 0-.292-.053-.585-.158-.878-.107-.293-.26-.56-.465-.8-.204-.24-.457-.436-.761-.588-.304-.153-.654-.229-1.05-.229zm34.699.018c-.317 0-.614.061-.893.184-.28.123-.528.293-.745.51-.216.217-.387.477-.508.782-.122.304-.185.632-.185.984 0 .351.063.68.185.984.121.305.292.565.508.782.217.217.465.387.745.51.28.123.576.184.893.184.313 0 .613-.061.892-.184.28-.123.528-.293.745-.51.216-.217.384-.477.508-.782.122-.305.183-.633.183-.984 0-.352-.061-.68-.183-.984-.121-.305-.292-.565-.508-.782-.217-.217-.465-.387-.745-.51-.28-.123-.576-.184-.892-.184zm-25.644-5.658l-.596 5.218h-1.873l-.58-5.218h3.049zm14.258 0l-.596 5.218h-1.873l-.579-5.218h3.048z"
          />
        </g>
      </Svg>
    </Root>
  )
}

export default Loader
