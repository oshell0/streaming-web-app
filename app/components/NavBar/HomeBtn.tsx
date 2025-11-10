import React from 'react'
import styles from "./right.module.css"

export default function HomeBtn() {
  return (
    <div>
      <Link href="/app">
        <button className={styles.iconButton} aria-label="Home Btn">
          <SquarePlus size={22} />
        </button>
    </Link>
    </div>
  )
}
