"use client";
import NavBar from "./components/NavBar/NavBar";
import LandingVid from "./components/LandingVid/LandingVid";
import Carousel from "./components/Carousel/Carousel";
import { useState, useEffect } from "react";

export default function Home() {
  const [videos, setVideos] = useState([]);

  // fetch all videos
  useEffect(() => {
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  // the search input
  const handleSearch = (query: string) => {
    fetch(`/api/videos?title=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => setVideos(data));
  };

  return (
    <div>
      <header>
        <NavBar onSearch={handleSearch}/>
      </header>

      <main>
        <LandingVid videos={videos} />
        
        <h1 style={{ textAlign: "left", margin: "1rem 0" }}>Continue Watching</h1>
        <Carousel videos={videos} category="Suspenseful" />

        <h1 style={{ textAlign: "left", margin: "1rem 0" }}>Subscriptions</h1>
        <Carousel videos={videos} category="Story" />
        <h1 style={{ textAlign: "left", margin: "1rem 0" }}>New</h1>
        <Carousel videos={videos} category="Suspenseful" />
      </main>
    </div>
  );
}
