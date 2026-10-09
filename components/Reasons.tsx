"use client";

import { useState } from "react";

const loveReasons = [
  "Tu forma única de hacerme reír incluso en los momentos difíciles.",
  "Cómo me miras cuando crees que no me doy cuenta.",
  "Tu paciencia infinita y tu ternura todos los días.",
  "Tus abrazos warm que siempre se sienten como estar en casa.",
  "La forma en que apoyas mis sueños e ideas locas.",
  "Tu voz dulce cuando me dices que me quieres.",
  "Lo detallista que eres y cómo te preocupas por mí.",
  "Simplemente porque a tu lado soy la versión más feliz de mí."
];

export function Reasons() {
  const [currentReason, setCurrentReason] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateRandomReason = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const availableReasons = currentReason ? loveReasons.filter(r => r !== currentReason) : loveReasons;
      const random = availableReasons[Math.floor(Math.random() * availableReasons.length)];
      setCurrentReason(`"${random}"`);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <span className="text-romantic-wine text-xs uppercase tracking-widest font-semibold">Razones de mi Corazón</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-romantic-burgundy">¿Por qué me haces tan feliz? 💌</h2>
        <p className="text-sm text-gray-600">Presiona el botón para descubrir una razón especial por la que me enamoras cada día.</p>

        {/* Interactive Reason Card */}
        <div className="bg-white p-8 rounded-3xl shadow-md border border-romantic-blush min-h-[160px] flex items-center justify-center relative overflow-hidden">
          <p
            className={`font-serif text-lg sm:text-xl text-romantic-burgundy italic transition-opacity duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          >
            {currentReason || '"Haz clic abajo para revelar una razón..."'}
          </p>
        </div>

        <button
          onClick={generateRandomReason}
          className="px-8 py-3.5 bg-romantic-wine text-white rounded-full font-medium shadow-md hover:bg-romantic-burgundy transform hover:scale-105 transition duration-200"
        >
          Ver una Razón 💕
        </button>
      </div>
    </div>
  );
}
