"use client";

import React from 'react'
import styles from "./Menu.module.css"
import { categories } from '@/data'


export default function Menu() {

  return (
    <div className={styles.menu}>
        {categories.map((category) => (
        <button
          key={category.id}
          className={styles.textItem}
        >
          {category.name}
        </button>
      ))}
    </div>
    
    
    
  )
}
