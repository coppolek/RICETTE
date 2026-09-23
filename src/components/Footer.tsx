export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#FFD700] rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-xl font-bold text-white">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Giallo<span className="text-[#FFD700]">Zafferano</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Il portale di ricette più amato dagli italiani. Migliaia di ricette testate,
              con foto passo passo e video tutorial per cucinare piatti deliziosi.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="bg-gray-800 hover:bg-[#FFD700] w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#FFD700] w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#FFD700] w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-youtube text-sm"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#FFD700] w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-tiktok text-sm"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#FFD700] w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-pinterest text-sm"></i>
              </a>
            </div>
          </div>

          {/* Ricette */}
          <div>
            <h4 className="font-bold text-lg mb-4">Ricette</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Primi Piatti</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Secondi Piatti</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Dolci e Dessert</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Antipasti</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Contorni</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Pane e Pizza</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Ricette Veloci</a></li>
            </ul>
          </div>

          {/* Tematiche */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tematiche</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Ricette Vegetariane</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Ricette Vegane</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Senza Glutine</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Ricette Light</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Ricette Regionali</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Ricette Economiche</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Ricette per Bambini</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Informazioni</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Chi Siamo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Contattaci</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Lavora con Noi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors">Termini di Servizio</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 GialloZafferano. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">Scarica l'app:</span>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors">
              <i className="fab fa-apple text-lg"></i>
              <div className="text-xs">
                <div className="text-gray-400">Scarica su</div>
                <div className="font-medium">App Store</div>
              </div>
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors">
              <i className="fab fa-google-play text-lg"></i>
              <div className="text-xs">
                <div className="text-gray-400">Disponibile su</div>
                <div className="font-medium">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
