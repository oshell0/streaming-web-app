"use client";
import React from 'react'
import styles from "./landingVid.module.css"
import { Play } from 'lucide-react'
import { useRef } from 'react';

export default function LandingVid() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src="/relax.mp4"
        className={styles.video}
        muted
        loop
        playsInline
      />
      <div className={styles.overlay}>
        <Play size={48} className={styles.playIcon} />
      </div>
    </div>
  );
}
