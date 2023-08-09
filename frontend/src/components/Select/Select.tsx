import inputStyle from "@/styles/templates/Input.module.css"
import styles from "./Select.module.css"

export default function Select() {
  return (
    <div className={`${inputStyle.input} ${styles.wrapper}`}>
      <select className={styles.select}>
        <option value="" className={styles.option}>
          Default option
        </option>
      </select>
      <span className={styles.focus} />
    </div>
  )
}
