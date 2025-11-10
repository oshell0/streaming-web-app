import React from 'react'
import styles from "./NavBar.module.css";

import ProfilePic from './Right/ProfilePic';
import SearchBtn from './Right/SearchBtn';
import UploadBtn from './Right/UploadBtn';
import NotificationBtn from './Right/NotificationBtn';
import Menu from './Middle/Menu';

export default function NavBar() {
  return (
    <header className={styles.navbar}>
        <div className={styles.leftGroup}>
          <h1 className={styles.title}>Home</h1>

        </div>

        <div className={styles.middleGroup}>
            <Menu />
        </div>

        <div className={styles.rightGroup}>
            <SearchBtn />
            <UploadBtn />
            <NotificationBtn />
            <ProfilePic />
        </div>
    </header>
    
  )
}
