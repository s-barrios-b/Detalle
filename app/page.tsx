"use client";

import { FloatingHearts } from "@/components/FloatingHearts";
import { Countdown } from "@/components/Countdown";
import { LoveLetter } from "@/components/LoveLetter";
import { Timeline } from "@/components/Timeline";
import { Gallery } from "@/components/Gallery";
import { Reasons } from "@/components/Reasons";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Celebration } from "@/components/Celebration";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <FloatingHearts />
      <MusicPlayer />

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative py-12 z-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-block bg-romantic-rose text-romantic-wine text-sm font-medium px-4 py-1.5 rounded-full border border-romantic-blush shadow-sm">
            ✨ 6 Meses de Puro Amor ✨
          </span>
          
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-romantic-burgundy leading-tight">
            ¡Felices 6 Meses, <br />
            <span className="font-dancing text-romantic-deep text-5xl sm:text-7xl md:text-8xl">Mi Amor!</span> 💕
          </h1>
          
          <p className="text-gray-700 max-w-xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Parece que fue ayer cuando empezamos este hermoso camino juntos, pero cada segundo a tu lado ha sido un regalo inolvidable.
          </p>

          {/* Counter Box */}
          <div className="pt-6">
            <p className="text-xs uppercase tracking-widest text-romantic-wine font-semibold mb-3">
              Llevamos Compartiendo Sonrisas:
            </p>
            <Countdown />
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce flex justify-center">
            <a href="#carta" className="text-romantic-wine hover:text-romantic-deep transition">
              <ChevronDown className="w-8 h-8" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE LOVE LETTER SECTION */}
      <section id="carta" className="py-20 px-4 max-w-4xl mx-auto text-center z-10 relative">
        <LoveLetter />
      </section>

      {/* TIMELINE / OUR STORY */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm border-y border-romantic-blush/40 z-10 relative">
        <Timeline />
      </section>

      {/* PHOTO GALLERY SECTION */}
      <section className="py-20 px-4 max-w-5xl mx-auto z-10 relative">
        <Gallery />
      </section>

      {/* REASONS WHY I LOVE YOU SECTION */}
      <section className="py-20 px-4 bg-romantic-rose/40 border-y border-romantic-blush/30 z-10 relative">
        <Reasons />
      </section>

      {/* CELEBRATION & FINAL SURPRISE SECTION */}
      <section className="py-24 px-4 text-center max-w-3xl mx-auto space-y-8 z-10 relative">
        <Celebration />
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-xs text-romantic-wine/70 border-t border-romantic-blush/30 z-10 relative">
        <p>Hecho con todo el amor del mundo para nuestro 6to Mes • ❤️</p>
      </footer>
    </main>
  );
}
