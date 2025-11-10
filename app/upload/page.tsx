"use client";
import { useState } from "react";
import styles from "./upload.module.css";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [uploaded, setUploaded] = useState(false); // 🧩 add this line

  const handleUpload = async () => {
    try {
      const res = await fetch("/api/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, url, category }),
      });

      if (res.ok) {
        // clear all fields
        setTitle("");
        setUrl("");
        setCategory("");

        // show "uploaded" message
        setUploaded(true);

        
      } else {
        console.error("Upload failed:", await res.text());
      }
    } catch (err) {
      console.error("Error uploading:", err);
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        {uploaded ? (
          <h1 className={styles.success}>Uploaded Successfully!</h1> 
        ) : (
          <>
            <h1 className={styles.title}>Upload a Video</h1>
            <input
              className={styles.input}
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className={styles.input}
              placeholder="Video URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <input
              className={styles.input}
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <button className={styles.button} onClick={handleUpload}>
              Upload
            </button>
          </>
        )}
      </div>
    </main>
  );
}
