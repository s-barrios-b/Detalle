"use client";

import confetti from "canvas-confetti";

export function Celebration() {
  const triggerLoveSurprise = () => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#FF8FAB', '#800020', '#FFB3C6', '#D4AF37'],
      shapes: ['circle']
    });
  };

  return (
    <>
      <h2 className="font-serif text-3xl sm:text-5xl font-bold text-romantic-burgundy">
        ¡Por Muchos Meses Más De Alegría! 🥂
      </h2>
      <p className="text-gray-700 text-base sm:text-lg">
        Gracias por hacerme la persona más afortunada en estos 6 meses. Te envío todo mi amor en este botón:
      </p>

      <div className="pt-4">
        <button
          onClick={triggerLoveSurprise}
          className="px-10 py-5 bg-linear-to-r from-romantic-deep to-romantic-wine text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition duration-300 border-2 border-white"
        >
          Haz clic para recibir un Abrazo y Beso Virtual 💋
        </button>
      </div>
    </>
  );
}
