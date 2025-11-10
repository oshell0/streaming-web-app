export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

export interface Category {
  id: string;
  name: string;
  videos: Video[];
}

export const categories: Category[] = [
  {
    id: "0",
    name: "All",
    videos: [
      { id: "v1", title: "Morning Routine", url: "/videos/morning.mp4", thumbnail: "/thumbs/morning.jpg" },
      { id: "v2", title: "Night Sky", url: "/videos/sky.mp4", thumbnail: "/thumbs/sky.jpg" },
    ],
  },
  {
    id: "1",
    name: "Subscriptions",
    videos: [
      { id: "v3", title: "Day in the Life", url: "/videos/life.mp4", thumbnail: "/thumbs/life.jpg" },
    ],
  },
  {
    id: "2",
    name: "Reels",
    videos: [],
  },
  {
    id: "3",
    name: "New",
    videos: [],
  },
];