import inputStyle from "@/styles/templates/Input.module.css"
import styles from "./PlaceholderInput.module.css"

interface InputProps {
  placeholder: string
  type: "email" | "number" | "password" | "search" | "tel" | "text" | "url"
}

export default function Input({ placeholder, type }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <input
        className={`${inputStyle.input} ${styles.input}`}
        type={type}
        placeholder={placeholder}
        autoFocus
      />
      <label className={styles.placeholder}>{placeholder}</label>
    </div>
  )
}
