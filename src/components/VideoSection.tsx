export default function VideoSection() {
  const videos = [
    {
      title: "Come fare la pasta fresca in casa",
      duration: "12:34",
      views: "245K",
      thumbnail: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=400&h=250&fit=crop",
    },
    {
      title: "Il segreto del risotto perfetto",
      duration: "8:21",
      views: "189K",
      thumbnail: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=250&fit=crop",
    },
    {
      title: "Tiramisù: ricetta originale",
      duration: "15:42",
      views: "512K",
      thumbnail: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=250&fit=crop",
    },
    {
      title: "Pizza napoletana: impasto e cottura",
      duration: "20:15",
      views: "378K",
      thumbnail: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="py-10 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            <span className="text-[#FFD700]">|</span> Video Ricette
          </h2>
          <a href="#" className="text-[#FFD700] font-medium text-sm hover:underline">
            Vedi tutti i video <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-3">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-[#FFD700] rounded-full w-12 h-12 flex items-center justify-center">
                    <i className="fas fa-play text-white text-lg ml-1"></i>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="text-white font-medium text-sm group-hover:text-[#FFD700] transition-colors">
                {video.title}
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                <i className="fas fa-eye mr-1"></i> {video.views} visualizzazioni
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
