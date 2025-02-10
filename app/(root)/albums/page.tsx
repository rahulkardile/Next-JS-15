"use client";

import React, { useEffect, useState } from "react";


type Photo = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
  };

const page = () => {
    const [photos, setAlbums] = useState<Photo[]>([]);

    useEffect(() => {
      const fetchAlbums = async () => {
        try {
            const response = await fetch("https://picsum.photos/v2/list?page=1&limit=600");

          const data: Photo[] = await response.json();
          setAlbums(data);
          console.log(data);
        } catch (error) {
          console.error("Error occurred during fetching albums:", error);
        }
      };
      fetchAlbums();
    }, []);
  return (
    <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Image Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="border rounded-lg overflow-hidden shadow-md">
          <img
            src={photo.download_url}
            alt={photo.author}
            className="w-full h-48 object-cover"
          />
          <div className="p-2">
            <p className="text-sm font-semibold">{photo.author}</p>
            <a
              href={photo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm"
            >
              View on Unsplash
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default page;
