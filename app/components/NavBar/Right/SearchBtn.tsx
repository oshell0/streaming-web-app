import React from 'react'
import { Search } from 'lucide-react'
import styles from "./right.module.css"

export default function SearchBtn() {
  return (
    <div>
        <button className={styles.iconButton} aria-label="Search">
          <Search size={22} />
        </button>
    </div>
  )
}
