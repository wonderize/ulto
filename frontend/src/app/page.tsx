"use client"

import { useState, useEffect } from "react"

import Header from "@/components/Header/Header"
import ClassCard from "@/components/ClassCard/ClassCard"
import Settings from "@/components/Settings/Settings"
import IconButton from "@/components/IconButton/IconButton"

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"

import styles from "./page.module.css"

// TODO: Refactor this
interface IClass {
  id: number
  createdAt: string
  createdBy: string
  updatedAt: string
  updatedBy: string
  title: string
  time: string
  location: string
  classroom: string
  teacher: string
}

export default function Home() {
  const [isSettingsVisible, setSettingsVisibility] = useState(false)
  const [classes, setClasses] = useState([])
  const [date, setDate] = useState(new Date())
  const [formattedDate, setFormattedDate] = useState("")
  const [theme, setTheme] = useState("")
  const [group, setGroup] = useState("1")

  const onButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    step: number
  ) => {
    event.preventDefault()

    setDate(() => {
      let tempDate = new Date()

      tempDate.setDate(date.getDate() + step)

      return tempDate
    })
  }

  const settingsComponent = isSettingsVisible ? (
    <Settings
      selectStates={[
        [theme, setTheme],
        [group, setGroup],
      ]}
    />
  ) : null
  const classesCards = classes.map((value: IClass, index) => {
    const formattedTime = new Date(value.time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })

    return (
      <ClassCard
        key={index}
        emphasis={[value.title, formattedTime]}
        details={[
          { title: "Локация", value: value.location },
          { title: "Аудитория", value: value.classroom },
          { title: "Преподаватель", value: value.teacher },
        ]}
      />
    )
  })

  useEffect(() => {
    const formattedDate = date.toLocaleDateString("ru-RU", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })

    // TODO: Remove hardcoded URLs
    fetch(`http://127.0.0.1:8000/classes?date=${date.toISOString()}&groupId=${group}`)
      .then((data) => data.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error(error))

    setFormattedDate(() => formattedDate)
  }, [date, group])

  return (
    <main className={styles.main}>
      <Header settingsState={[isSettingsVisible, setSettingsVisibility]} />
      <div className={styles.wrapper}>
        {settingsComponent}
        <div className={styles.controls}>
          <IconButton
            icon={faChevronLeft}
            onClick={(event) => onButtonClick(event, -1)}
          />
          <h1 className={styles.date}>{formattedDate}</h1>
          <IconButton
            icon={faChevronRight}
            onClick={(event) => onButtonClick(event, 1)}
          />
        </div>
        <div className={styles.schedule}>{classesCards}</div>
      </div>
    </main>
  )
}
