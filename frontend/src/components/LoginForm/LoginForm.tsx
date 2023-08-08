import PlaceholderInput from "../PlaceholderInput/PlaceholderInput"
import Button from "../Button/Button"

import styles from "./LoginForm.module.css"

export default function LoginForm() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Вход</h1>
      <PlaceholderInput
        placeholder="Имя пользователя"
        type="text"
      />
      <PlaceholderInput
        placeholder="Пароль"
        type="password"
      />
      <Button
        placeholder="Войти"
      />
      <a className={styles.forgotButton} href="#">
        Забыли пароль?
      </a>
    </div>
  )
}
