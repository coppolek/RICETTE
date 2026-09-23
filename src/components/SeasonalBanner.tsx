export default function SeasonalBanner() {
  const seasonalRecipes = [
    {
      title: "Ricette Estive",
      subtitle: "Piatti freschi e leggeri",
      icon: "☀️",
      color: "from-orange-400 to-yellow-400",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
    },
    {
      title: "Dolci di Natale",
      subtitle: "Tradizioni dolciarie",
      icon: "🎄",
      color: "from-red-500 to-green-600",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    },
    {
      title: "Menu di Pasqua",
      subtitle: "Ricette per le feste",
      icon: "🐣",
      color: "from-purple-400 to-pink-400",
      image: "https://images.unsplash.com/photo-1432139509613-5c4255a1d197?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            <span className="text-[#FFD700]">|</span> Ricette per Occasione
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {seasonalRecipes.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group relative overflow-hidden rounded-xl h-48 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-70 group-hover:opacity-80 transition-opacity`}></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="text-4xl mb-2">{item.icon}</span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm opacity-90">{item.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
