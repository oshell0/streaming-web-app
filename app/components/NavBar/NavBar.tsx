"use client";

import React from 'react'
import styles from "./NavBar.module.css";

import ProfilePic from './Right/ProfilePic';
import SearchBtn from './Right/SearchBtn';
import UploadBtn from './Right/UploadBtn';
import NotificationBtn from './Right/NotificationBtn';
import Menu from './Middle/Menu';

export default function NavBar({ onSearch }: { onSearch: (q: string) => void }) {
  return (
    <header className={styles.navbar}>
        <div className={styles.leftGroup}>
          <h1 className={styles.title}>Home</h1>

        </div>

        <div className={styles.middleGroup}>
            <Menu />
        </div>

        <div className={styles.rightGroup}>
            <SearchBtn onSearch={onSearch} />
            <UploadBtn />
            <NotificationBtn />
            <ProfilePic />
        </div>
    </header>
    
  )
}
