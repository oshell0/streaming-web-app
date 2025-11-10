"use client";
import React from 'react'
import { Search } from 'lucide-react'
import { useState, useRef, useEffect } from 'react';
import styles from "./right.module.css"
import type { Video } from "@/types/video.ts";


export default function SearchBtn({ onSearch }: { onSearch: (query: string) => void }) {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<Video[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);


  const handleSearch = (value = searchValue) => {
    const trimmed = value.trim();
    onSearch(trimmed);
    setSearchValue(""); // clears input
    setSuggestions([]); // close dropdown after searching
    setSearchOpen(false); // closes input after search
  };

  const handleInputChange = (val: string) => {
    setSearchValue(val);

    if (val.length > 0) {
      fetch(`/api/videos?title=${encodeURIComponent(val)}`)
        .then((res) => res.json())
        .then((data: Video[]) => setSuggestions(data));
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={styles.searchContainer}>
      {searchOpen && (
      <div className={styles.inputWrapper}>

      <input
        type="text"
        value={searchValue}
        onChange={(e) => handleInputChange(e.target.value)}
          className={styles.searchInput}
          placeholder="Search videos..."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
      />
      {suggestions.length > 0 && (
          <ul className={styles.dropdown}>
            {suggestions.map((video) => (
              <li
                key={video._id}
                onClick={() => {
                  handleSearch(video.title);
                  setSearchValue(video.title);
                }}
              >
                {video.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      )}
      <button 
        onClick={() => setSearchOpen((s) => !s)}
        className={styles.iconButton}>
          <Search size={22} />
      </button>
    </div>
  )
}
