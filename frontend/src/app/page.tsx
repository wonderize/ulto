"use client"

import { useState } from "react"

import Header from "@/components/Header/Header"
import ClassCard from "@/components/ClassCard/ClassCard"
import Settings from "@/components/Settings/Settings"
import IconButton from "@/components/IconButton/IconButton"

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
      <Header settingsState={[isSettingsVisible, setSettingsVisibility]} />
      <div className={styles.wrapper}>
        {settingsComponent}
        <div className={styles.controls}>
          <IconButton icon={faChevronLeft} />
          {/* <button className={styles.control}>
            <FontAwesomeIcon
              className={styles.controlIcon}
              icon={faChevronLeft}
            />
          </button> */}
          <h1 className={styles.date}>понедельник, 07.08.2023</h1>
          <IconButton icon={faChevronRight} />
          {/* <button className={styles.control}>
            <FontAwesomeIcon
              className={styles.controlIcon}
              icon={faChevronRight}
            />
          </button> */}
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
