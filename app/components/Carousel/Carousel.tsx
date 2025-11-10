"use client";
import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Video } from "@/types/video.ts";
import styles from "./carousel.module.css";

export default function Carousel({ videos, category }: { videos: Video[]; category: string }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    
    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const scrollAmount = scrollRef.current.clientWidth * 0.8;
        scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
        });
    };
    const filtered =
    category === "All"
      ? videos
      : videos.filter((v) => v.category === category);

    if (filtered.length === 0) {
        return <div className={styles.wrapper}>No videos in this category.</div>;
    }
  return (
    <div className={styles.wrapper}>
        <button className={styles.arrow} onClick={() => scroll("left")}>
            <ChevronLeft size={28} />
        </button>

        <div className={styles.carousel} ref={scrollRef}>
            {filtered.map((video, i) => (
            <div 
                key={video._id} 
                className={styles.vidContainer}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
            >
                <ReactPlayer
                    src={video.url}
                    light={hoverIndex !== i}
                    playing={hoverIndex == i}
                    controls={hoverIndex == i}
                    width="100%"
                    height="100%"
                    muted={true}
                />
            </div>
            ))}
        </div>

      <button className={styles.arrow} onClick={() => scroll("right")}>
        <ChevronRight size={28} />
      </button>
    </div>
  );
}