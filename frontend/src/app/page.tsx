"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Header from "@/components/Header/Header"
import ClassCard from "@/components/ClassCard/ClassCard"
import Settings from "@/components/Settings/Settings"
import Button from "@/components/Button/Button"

import {
  faChevronRight,
  faChevronLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons"

import styles from "./page.module.css"

export default function Home() {
  const [isSettingsVisible, setSettingsVisibility] = useState(false)

  const handleButtonOnClick = () => {
    setSettingsVisibility(!isSettingsVisible)
  }

  const settingsComponent = isSettingsVisible ? <Settings /> : null

  return (
    <main className={styles.main}>
      <Header>
        {/* TODO: Turn `Button` into reusable component */}
        <Button
          style={{gridColumnStart: -1}}
          placeholder="Войти"
        />
        <button className={styles.menu} onClick={handleButtonOnClick}>
          <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
        </button>
      </Header>
      <div className={styles.wrapper}>
      {settingsComponent}
        <div className={styles.controls}>
          <button className={styles.control}>
            <FontAwesomeIcon
              className={styles.controlIcon}
              icon={faChevronLeft}
            />
          </button>
          <h1 className={styles.date}>понедельник, 07.08.2023</h1>
          <button className={styles.control}>
            <FontAwesomeIcon
              className={styles.controlIcon}
              icon={faChevronRight}
            />
          </button>
        </div>
        <div className={styles.schedule}>
          <ClassCard
            emphasis={["Высшая математика", "08:30"]}
            details={[
              {
                title: "Локация",
                value: "Голландия",
              },
              {
                title: "Аудитория",
                value: "В-404",
              },
              {
                title: "Преподаватель",
                value: "Емченко Е. А.",
              },
            ]}
          />
          <ClassCard
            emphasis={["Физические основы защиты информации", "08:30"]}
            details={[
              {
                title: "Локация",
                value: "Голландия",
              },
              {
                title: "Аудитория",
                value: "В-404",
              },
              {
                title: "Преподаватель",
                value: " Оттовордемгентшенфельд Е. А.",
              },
            ]}
          />
        </div>
      </div>
    </main>
  )
}
