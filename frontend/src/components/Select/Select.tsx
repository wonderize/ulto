import { useState } from "react"

import inputStyle from "@/styles/templates/Input.module.css"
import styles from "./Select.module.css"

interface SelectProps {
  values: [
    {
      value: string
      title: string
    }
  ]
}

export default function Select({ values }: SelectProps) {
  const [option, setOption] = useState("")

  const options = values.map((value, index) => (
    <option key={index} value="{value.value}">
      {value.title}
    </option>
  ))

  return (
    <div className={`${inputStyle.input} ${styles.wrapper}`} aria-required>
      <select
        className={styles.select}
        name="name"
        value={option}
        onChange={(event) => setOption(event.target.value)}
        required
      >
        <option value="" disabled hidden>
          Выбрать
        </option>
        {options}
      </select>
      <span className={styles.focus} />
    </div>
  )
}
