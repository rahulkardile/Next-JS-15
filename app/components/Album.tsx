const fetchPhotos = async () => {
    const response = await fetch("https://picsum.photos/v2/list?page=1&limit=100", {
      cache: "no-store",
    });
    return response.json();
  };
  
  const Album = async () => {
    const photos = await fetchPhotos();
  
    return (
      <div className="p-6">
        <h2 className="text-3xl font-bold text-center mb-6">📸 Image Gallery</h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo: any, index: number) => (
            <div
              key={photo.id}
              className={`relative overflow-hidden rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl ${
                index % 2 === 0 ? "row-span-2" : "row-span-1"
              }`}
            >
              <img
                src={photo.download_url}
                alt={photo.author}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex flex-col justify-end p-3 transition-opacity">
                <p className="text-white text-sm font-semibold">{photo.author}</p>
                <a
                  href={photo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 text-xs"
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
  
  export default Album;
  