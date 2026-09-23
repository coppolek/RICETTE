export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#FFD700] to-[#FFA500] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Ricette facili e veloci per tutti i giorni
            </h2>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              Scopri migliaia di ricette della tradizione italiana, passo dopo passo, con foto e video tutorial.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-[#FFD700] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                <i className="fas fa-utensils mr-2"></i>
                Esplora Ricette
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-colors">
                <i className="fas fa-play mr-2"></i>
                Video Ricette
              </button>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">3000+</div>
                <div className="text-sm opacity-80">Ricette</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-80">Video</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">2M+</div>
                <div className="text-sm opacity-80">Utenti</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                alt="Ricette italiane"
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Testata</div>
                    <div className="text-xs text-gray-500">da chef esperti</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="bg-[#FFD700] rounded-full w-8 h-8 flex items-center justify-center">
                    <i className="fas fa-star text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">4.8/5</div>
                    <div className="text-xs text-gray-500">valutazione media</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-20">
        <i className="fas fa-utensils text-6xl text-white"></i>
      </div>
      <div className="absolute bottom-10 left-10 opacity-20">
        <i className="fas fa-pepper-hot text-4xl text-white"></i>
      </div>
    </section>
  );
}
