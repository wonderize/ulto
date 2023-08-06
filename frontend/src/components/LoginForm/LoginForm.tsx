import Input from "../Input/Input"
import Button from "../Button/Button"

import styles from "./LoginForm.module.css"

export default function LoginForm() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Вход</h1>
      <Input
        placeholder="Имя пользователя"
        type="text"
      />
      <Input
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
