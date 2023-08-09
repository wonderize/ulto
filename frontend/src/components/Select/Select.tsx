import inputStyle from "@/styles/templates/Input.module.css"
import styles from "./Select.module.css"

export default function Select() {
  return (
    <div className={`${inputStyle.input} ${styles.wrapper}`} aria-required>
      <select className={styles.select} name="name" required>
        <option
          value=""
          disabled
          hidden
          selected
        >
          Default option
        </option>
        <option
          value="value"
        >
          Value
        </option>
      </select>
      <span className={styles.focus} />
    </div>
  )
}
