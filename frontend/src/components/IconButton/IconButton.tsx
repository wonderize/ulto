import { MouseEventHandler } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"

import styles from "./IconButton.module.css"

interface IconButtonProps {
  icon: IconDefinition
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
    </button>
  )
}
