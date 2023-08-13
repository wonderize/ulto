import buttonStyle from "@/styles/templates/Button.module.css"
import styles from "./Button.module.css"

interface ButtonProps {
  placeholder: string
}

export default function Button({ placeholder }: ButtonProps) {
  return <button className={`${buttonStyle.button} ${styles.button}`}>{placeholder}</button>
}
