import React from "react"
import AppFunctionComponent from "../../types/app-function-component.interface"
import PictureIcon from "../../images/picture.svg"
import StarIcon from "../../images/star.svg"
import SettingsIcon from "../../images/settings.svg"
import StopwatchIcon from "../../images/picture.svg"
import styled from "styled-components"

const Menu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 50px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: #0a090e;

  &:hover {
    svg {
      fill: red;
      width: 40px;
      height: 40px;
    }
  }
`
const MenuElement = styled.li`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    fill: #fff;
    transition: width 1s ease-in-out, height 1s ease-in-out, fill 1s;
    cursor: pointer;
  }
`

const menuElements = [
  {
    icon: <PictureIcon />,
    name: "picture",
  },
  {
    icon: <StarIcon />,
    name: "star",
  },
  {
    icon: <SettingsIcon />,
    name: "settings",
  },
  {
    icon: <StopwatchIcon />,
    name: "stopwatch",
  },
]

const SideMenu: AppFunctionComponent = () => {
  return (
    <Menu>
      {menuElements.map(item => (
        <MenuElement key={item.name}>{item.icon}</MenuElement>
      ))}
    </Menu>
  )
}

export default SideMenu
