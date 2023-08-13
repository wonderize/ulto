import styles from "./Button.module.css"

interface ButtonProps {
  placeholder: string
  style?: React.CSSProperties
}

export default function Button({ placeholder, style }: ButtonProps) {
  return (
    <button style={style} className={styles.button}>
      {placeholder}
    </button>
  )
}
