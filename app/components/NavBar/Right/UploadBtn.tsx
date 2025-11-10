import React from 'react'
import { SquarePlus } from 'lucide-react'
import styles from "./right.module.css"
import Link from "next/link"; 

export default function UploadBtn() {
  return (
    <Link href="/upload">
        <button className={styles.iconButton} aria-label="Upload Button">
          <SquarePlus size={22} />
        </button>
    </Link>

  )
}
