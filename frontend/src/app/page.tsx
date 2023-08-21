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

  const settingsComponent = isSettingsVisible ? <Settings /> : null

  let classesCards = classes.map((value: IClass, index) => (
    <ClassCard
      key={index}
      emphasis={[value.title, value.time]}
      details={[
        { title: "Локация", value: value.location },
        { title: "Аудитория", value: value.classroom },
        { title: "Преподаватель", value: value.teacher },
      ]}
    />
  ))

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/classes?date=${date.toISOString()}`)
      .then((data) => data.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error(error))
  }, [date])

  return (
    <main className={styles.main}>
      <Header settingsState={[isSettingsVisible, setSettingsVisibility]} />
      <div className={styles.wrapper}>
        {settingsComponent}
        <div className={styles.controls}>
          <IconButton icon={faChevronLeft} onClick={(event) => {
            event.preventDefault()

            setDate(() => {
              let tempDate = new Date()

              tempDate.setDate(date.getDate() - 1)

              return tempDate
            })

            console.log(date.toISOString())
          }}/>
          <h1 className={styles.date}>{date.toDateString()}</h1>
          <IconButton icon={faChevronRight} onClick={(event) => {
            event.preventDefault()

            setDate(() => {
              let tempDate = new Date()

              tempDate.setDate(date.getDate() + 1)

              return tempDate
            })

            console.log(date.toISOString())
          }}/>
        </div>
        <div className={styles.schedule}>{classesCards}</div>
      </div>
    </main>
  )
}
