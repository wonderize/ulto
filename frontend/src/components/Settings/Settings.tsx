import Select from "@/components/Select/Select"

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
        <Select />
      </div>
      <div className={styles.parameter}>
        <div className={styles.textWrapper}>
          <h2 className={styles.parameterTitle}>Тема</h2>
          <p className={styles.description}>Выбор темы по умолчанию</p>
        </div>
        <Select />
      </div>
    </div>
  )
}
