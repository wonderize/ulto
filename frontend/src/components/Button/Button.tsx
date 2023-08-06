import styles from "./Button.module.css"

interface ButtonProps {
  placeholder: string
}

export default function Button({ placeholder }: ButtonProps) {
  return <button className={styles.button}>{placeholder}</button>
}
