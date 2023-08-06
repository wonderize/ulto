import Logo from "../Logo/Logo"
import styles from "./Header.module.css"

export default function Header({ children }: { children: JSX.Element | never[] }) {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        {children}
      </div>
    </header>
  )
}
