import { ChangeEvent, Dispatch, SetStateAction } from "react"

import inputStyle from "@/styles/templates/Input.module.css"
import styles from "./Select.module.css"

interface SelectProps {
  values: [
    {
      value: string
      title: string
    }
  ]
  optionState: [option: string, setOption: Dispatch<SetStateAction<string>>]
}

export default function Select({ values, optionState }: SelectProps) {
  const [option, setOption] = optionState

  const onChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setOption(event.target.value)

  const options = values.map((value, index) => (
    <option key={index} value={value.value}>
      {value.title}
    </option>
  ))

  return (
    <div className={`${inputStyle.input} ${styles.wrapper}`} aria-required>
      <select
        className={styles.select}
        name="name"
        value={option}
        onChange={onChange}
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
