import React from 'react'
import { Bell } from 'lucide-react'
import styles from "./right.module.css"

export default function NotificationBtn() {
  return (
    <div>
        <button className={styles.iconButton} aria-label="Notifications">
          <Bell size={22} />
        </button>
    </div>
  )
}
