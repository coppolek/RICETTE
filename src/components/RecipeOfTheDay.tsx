export default function RecipeOfTheDay() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            <span className="text-[#FFD700]">|</span> Ricetta del Giorno
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <i className="far fa-calendar-alt text-[#FFD700]"></i>
            <span>{new Date().toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long" })}</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl overflow-hidden border border-yellow-100">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-80">
              <img
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop"
                alt="Ricetta del giorno"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#FFD700] text-white px-3 py-1 rounded-full text-sm font-bold">
                <i className="fas fa-crown mr-1"></i> In Evidenza
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="text-[#FFD700] font-medium text-sm mb-2">PRIMI PIATTI</span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                Spaghetti alla Carbonara
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                La vera ricetta romana della carbonara, cremosa e saporita, preparata con guanciale
                croccante, uova fresche, pecorino romano DOP e una generosa macinata di pepe nero.
                Un classico intramonto della cucina italiana.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <i className="far fa-clock text-[#FFD700]"></i>
                  <span className="text-sm font-medium">30 min</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <i className="fas fa-signal text-[#FFD700]"></i>
                  <span className="text-sm font-medium">Facile</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <i className="fas fa-users text-[#FFD700]"></i>
                  <span className="text-sm font-medium">4 persone</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <i className="fas fa-star text-[#FFD700]"></i>
                  <span className="text-sm font-medium">4.8</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="bg-[#FFD700] text-white px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors shadow-md">
                  <i className="fas fa-book-open mr-2"></i>
                  Vedi Ricetta
                </button>
                <button className="border-2 border-[#FFD700] text-[#FFD700] px-4 py-3 rounded-full font-bold hover:bg-[#FFD700] hover:text-white transition-colors">
                  <i className="far fa-bookmark"></i>
                </button>
                <button className="border-2 border-gray-200 text-gray-500 px-4 py-3 rounded-full font-bold hover:border-red-300 hover:text-red-500 transition-colors">
                  <i className="far fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
