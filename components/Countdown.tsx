"use client";

import { useEffect, useState } from "react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // La meta: Mañana a las 00:00 (10 de octubre de 2026 a las 12:00 AM hora local)
    const targetDate = new Date("2026-10-10T00:00:00-05:00");

    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: "00", minutes: "00", seconds: "00" });
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days,
        hours: hours < 10 ? '0' + hours : hours.toString(),
        minutes: minutes < 10 ? '0' + minutes : minutes.toString(),
        seconds: seconds < 10 ? '0' + seconds : seconds.toString(),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
      <div className="bg-white/80 backdrop-blur-sm border border-romantic-blush p-4 rounded-2xl shadow-sm">
        <span className="block font-serif text-3xl sm:text-4xl font-bold text-romantic-wine">{timeLeft.days}</span>
        <span className="text-xs text-gray-500 uppercase">Días</span>
      </div>
      <div className="bg-white/80 backdrop-blur-sm border border-romantic-blush p-4 rounded-2xl shadow-sm">
        <span className="block font-serif text-3xl sm:text-4xl font-bold text-romantic-wine">{timeLeft.hours}</span>
        <span className="text-xs text-gray-500 uppercase">Horas</span>
      </div>
      <div className="bg-white/80 backdrop-blur-sm border border-romantic-blush p-4 rounded-2xl shadow-sm">
        <span className="block font-serif text-3xl sm:text-4xl font-bold text-romantic-wine">{timeLeft.minutes}</span>
        <span className="text-xs text-gray-500 uppercase">Minutos</span>
      </div>
      <div className="bg-white/80 backdrop-blur-sm border border-romantic-blush p-4 rounded-2xl shadow-sm">
        <span className="block font-serif text-3xl sm:text-4xl font-bold text-romantic-wine">{timeLeft.seconds}</span>
        <span className="text-xs text-gray-500 uppercase">Segundos</span>
      </div>
    </div>
  );
}
