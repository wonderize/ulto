import Input from "@/components/Input/Input"
import Button from "@/components/Button/Button"

import styles from "./Settings.module.css"

export default function Settings() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Настройки</h1>
      <div className={styles.parameter}>
        <div className={styles.textWrapper}>
          <h2 className={styles.parameterTitle}>Выбор группы</h2>
          <p className={styles.description}>Выбор группы по умолчанию</p>
        </div>
          <Input
            placeholder="Группа"
            type="search"
          />
      </div>
      <div className={styles.parameter}>
        <div className={styles.textWrapper}>
          <h2 className={styles.parameterTitle}>Тема</h2>
          <p className={styles.description}>Выбор темы по умолчанию</p>
        </div>
          <Input
            placeholder="Тема"
            type="search"
          />
      </div>
      <div className={styles.parameter}>
        <div className={styles.textWrapper}>
          <h2 className={styles.parameterTitle}>Войти</h2>
          <p className={styles.description}>Вход в приложение</p>
        </div>
        <Button
          placeholder="Войти"
        />
      </div>
    </div>
  )
}
