import Header from "@/components/Header/Header"
import LoginForm from "@/components/LoginForm/LoginForm"

import styles from "./page.module.css"

export default function Login() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <Header />
        <div className={styles.formWrapper}>
          <LoginForm />
        </div>
      </div>
      <div className={styles.right}>
      </div>
    </main>
  )
}
