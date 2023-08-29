import { Dispatch, SetStateAction, useEffect, useState } from "react"

import Select from "@/components/Select/Select"

import styles from "./Settings.module.css"

export default function Settings() {
  // FIXME: Fix this types
  const [groups, setGroups]: [any, any] = useState([])
  const themes: any = [
    {
      value: "system",
      title: "Системная"
    },
    {
      value: "dark",
      title: "Темная"
    },
    {
      value: "light",
      title: "Cветлая"
    },
  ]

  useEffect(() => {
    fetch("http://127.0.0.1:8000/groups")
      .then((data) => data.json())
      .then((data) => setGroups(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Настройки</h1>
      <div className={styles.parameter}>
        <div className={styles.textWrapper}>
          <h2 className={styles.parameterTitle}>Выбор группы</h2>
          <p className={styles.description}>Выбор группы по умолчанию</p>
        </div>
        <Select
          values={groups}
        />
      </div>
      <div className={styles.parameter}>
        <div className={styles.textWrapper}>
          <h2 className={styles.parameterTitle}>Тема</h2>
          <p className={styles.description}>Выбор темы по умолчанию</p>
        </div>
        <Select
          values={themes}
        />
      </div>
    </div>
  )
}
