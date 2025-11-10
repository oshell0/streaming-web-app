"use client";
import React from 'react'
import styles from "./landingVid.module.css"
import { useState } from 'react';
import ReactPlayer from "react-player";
import type { Video } from "@/types/video.ts";

export default function LandingVid({ videos }: { videos: Video[] }) {
  const [isHovered, setIsHovered] = useState(false);

  const firstVideo = videos?.[0];

  // if there is no videos in the db
  if (!firstVideo) {
    return <div className={styles.container}>No video found.</div>;
  }

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     <div className={styles.player}>
      <ReactPlayer
        src={firstVideo.url}
        playing={isHovered}
        controls={isHovered}
        width="100%"
        height="100%"
        muted={!isHovered}
      />
     </div>
    </div>
  );
}
