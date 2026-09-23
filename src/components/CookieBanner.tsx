import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già accettato i cookie
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Mostra il banner dopo 2 secondi
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie_consent", "all");
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie_consent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🍪</span>
              <h3 className="font-bold text-gray-800">Cookie Policy</h3>
            </div>
            <p className="text-sm text-gray-600">
              Utilizziamo cookie tecnici e, previo tuo consenso, cookie di profilazione e di terze parti.
              Clicca su "Accetta tutti" per acconsentire all'uso di tutti i cookie, oppure personalizza le tue preferenze.
              <a href="#" className="text-[#FFD700] hover:underline ml-1">Leggi l'informativa completa</a>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <button
              onClick={acceptEssential}
              className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Solo essenziali
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-2 text-sm font-bold text-white bg-[#FFD700] rounded-full hover:bg-yellow-500 transition-colors whitespace-nowrap"
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
