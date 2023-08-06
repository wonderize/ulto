import styles from "./ClassCard.module.css"

// Not highlighted lines of ClassCard
type Detail = {
  title: string
  value: string
}

interface ClassCardProps {
  emphasis: [string, string]
  details: Detail[]
}

export default function ClassCard(props: ClassCardProps) {
  const [emphasisTitle, emphasisValue] = props.emphasis

  const details = props.details.map((detail, index) => (
    <div key={index} className={styles.detailWrapper}>
      <p className={styles.detail}>{detail.title}</p>
      <p className={styles.detailValue}>{detail.value}</p>
    </div>
  ))

  return (
    <div className={styles.card}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{emphasisTitle}</h2>
        <h2 className={styles.titleValue}>{emphasisValue}</h2>
      </div>
      {details}
    </div>
  )
}
