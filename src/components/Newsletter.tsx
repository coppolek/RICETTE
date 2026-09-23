import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-4xl mb-4">📧</div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Iscriviti alla Newsletter
          </h2>
          <p className="text-white/90 mb-6">
            Ricevi ogni settimana le migliori ricette direttamente nella tua casella email.
            Nuove idee per cucinare piatti deliziosi!
          </p>
          {subscribed ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center gap-2 text-white">
              <i className="fas fa-check-circle"></i>
              <span>Grazie! Ti abbiamo iscritto con successo.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="La tua email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 py-3 px-5 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
              >
                Iscriviti
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
