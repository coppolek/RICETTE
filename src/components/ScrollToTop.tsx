import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-[#FFD700] text-white w-12 h-12 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Torna in cima"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}
