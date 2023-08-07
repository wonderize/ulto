import Logo from "../Logo/Logo"
import styles from "./Header.module.css"

interface HeaderProps {
  children: JSX.Element | JSX.Element[] | never[]
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        {children}
      </div>
    </header>
  )
}
