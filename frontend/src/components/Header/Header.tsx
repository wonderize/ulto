"use client"
import { Dispatch, SetStateAction } from "react"

import Logo from "../Logo/Logo"
import IconButton from "../IconButton/IconButton"
import Button from "../Button/Button"

import { faBars, faUser } from "@fortawesome/free-solid-svg-icons"

import styled from "styled-components"

type SettingsState = [boolean, Dispatch<SetStateAction<boolean>>]

interface HeaderProps {
  isLogin?: boolean
  user?: string
  settingsState?: SettingsState
}

export default function Header({ isLogin, user, settingsState }: HeaderProps) {
  const [isSettingsVisible, setSettingsVisibility] = settingsState
    ? settingsState
    : [null, null]

    const Header = styled.header `
      
    `
    

  const onClick = () => {
    if (setSettingsVisibility !== null && isSettingsVisible !== null) {
      setSettingsVisibility(!isSettingsVisible)
    }
  }

  const menuButton = isLogin ? null : (
    <IconButton icon={faBars} onClick={onClick} />
  )
  const userButton = user ? (
    <IconButton icon={faUser} />
  ) : isLogin ? null : (
    <Button placeholder="Войти" />
  )

  return (
    <header className="Header">
      <div className="Header_wrapper">
        {menuButton}
        <Logo />
        {userButton}
      </div>
    </header>
  )
}
