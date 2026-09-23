import { useState } from "react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Ricette",
    "Primi Piatti",
    "Secondi Piatti",
    "Dolci",
    "Antipasti",
    "Video Ricette",
    "Blog",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-[#FFD700]">
        <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-gray-700">Le migliori ricette italiane</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-gray-700 hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-700 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-700 hover:text-gray-900"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-gray-700 hover:text-gray-900"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-[#FFD700] rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-xl font-bold text-white">G</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-gray-800 leading-none">
                  Giallo<span className="text-[#FFD700]">Zafferano</span>
                </h1>
                <p className="text-xs text-gray-500">Ricette di cucina</p>
              </div>
            </a>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Cerca ricette..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 pr-10 border-2 border-gray-200 rounded-full focus:border-[#FFD700] focus:outline-none transition-colors"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FFD700]">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-1 text-gray-600 hover:text-[#FFD700] transition-colors">
              <i className="far fa-heart"></i>
              <span className="text-sm">Preferiti</span>
            </button>
            <button className="hidden md:flex items-center gap-1 bg-[#FFD700] text-white px-4 py-2 rounded-full font-medium hover:bg-yellow-500 transition-colors">
              <i className="far fa-user"></i>
              <span className="text-sm">Accedi</span>
            </button>
            <button
              className="md:hidden text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-6 py-2 overflow-x-auto">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-[#FFD700] whitespace-nowrap transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3">
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Cerca ricette..."
              className="w-full py-2 px-4 pr-10 border-2 border-gray-200 rounded-full focus:border-[#FFD700] focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="block py-2 text-gray-700 hover:text-[#FFD700] font-medium">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
