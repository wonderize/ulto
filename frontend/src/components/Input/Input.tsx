import styles from "./Input.module.css"

interface InputProps {
  placeholder: string
  type: "email" | "number" | "password" | "search" | "tel" | "text" | "url"
}

export default function Input({ placeholder, type }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        autoFocus
      />
      <label className={styles.placeholder}>{placeholder}</label>
    </div>
  )
}
