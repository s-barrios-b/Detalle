"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photos = [
  {
    src: "/images/1.jpeg",
    caption: "Recuerdos ❤️",
    hiddenMessage: "Tu sonrisa ilumina todos mis días.",
  },
  {
    src: "/images/2.jpeg",
    caption: "Momentos mágicos ✨",
    hiddenMessage: "Cada instante contigo es un tesoro.",
  },
  {
    src: "/images/3.jpeg",
    caption: "Tú y yo 🥰",
    hiddenMessage: "Mi lugar favorito es a tu lado.",
  },
  {
    src: "/images/4.jpeg",
    caption: "Besos 😘",
    hiddenMessage: "Contigo el mundo es más hermoso.",
  },
  {
    src: "/images/5.jpeg",
    caption: "Tú y yo x2 🥰",
    hiddenMessage: "Amo todo de ti.",
  },
  {
    src: "/images/6.jpeg",
    caption: "Amor puro 💕",
    hiddenMessage: "6 meses maravillosos y una vida por delante.",
  },
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const next = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-10">
        <span className="text-romantic-wine text-xs uppercase tracking-widest font-semibold">Galeria de Fotos</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-romantic-burgundy mt-1">Nuestros Momentos Favoritos 📸</h2>
        <p className="text-sm text-gray-600 mt-2">Haz clic en la foto para ver un mensaje especial.</p>
      </div>

      {/* Preload todas las imágenes ocultas para que carguen instantáneamente al navegar */}
      <div className="hidden">
        {photos.map((photo, idx) => (
          <Image
            key={`preload-${idx}`}
            src={photo.src}
            alt="preload"
            width={400}
            height={500}
            priority={true}
          />
        ))}
      </div>

      <div className="relative w-full max-w-sm sm:max-w-md mx-auto flex items-center justify-center">
        {/* Carousel Buttons */}
        <button
          onClick={prev}
          className="absolute -left-5 sm:-left-10 z-20 p-2 bg-white rounded-full shadow-lg text-romantic-wine hover:bg-romantic-blush hover:scale-110 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Polaroid Card */}
        <div className="w-full relative overflow-visible flex justify-center py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, x: 50, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0, rotate: (currentIndex % 2 === 0 ? -3 : 3) }}
              exit={{ opacity: 0, scale: 0.9, x: -50, rotate: -10 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              className="polaroid rounded-lg cursor-pointer transform bg-white p-3 sm:p-4 shadow-xl border border-romantic-blush w-full max-w-70 sm:max-w-[320px] hover:scale-[1.02] transition-transform"
              onClick={() => setModalOpen(true)}
            >
              <div className="h-72 sm:h-80 w-full overflow-hidden rounded bg-romantic-rose relative shadow-inner">
                <Image
                  src={photos[currentIndex].src}
                  alt={photos[currentIndex].caption}
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
              <p className="font-dancing text-2xl sm:text-3xl text-center text-romantic-burgundy mt-4 mb-2">
                {photos[currentIndex].caption}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          className="absolute -right-5 sm:-right-10 z-20 p-2 bg-white rounded-full shadow-lg text-romantic-wine hover:bg-romantic-blush hover:scale-110 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex space-x-3 mt-8">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? "bg-romantic-wine scale-125" : "bg-romantic-rose hover:bg-romantic-deep"}`}
          />
        ))}
      </div>

      {/* Photo Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white p-6 rounded-2xl max-w-sm w-full text-center space-y-4 shadow-2xl border border-romantic-blush relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-3 right-4 text-gray-400 hover:text-romantic-wine transition"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full h-72 mt-2 shadow-inner rounded-xl overflow-hidden">
                <Image
                  src={photos[currentIndex].src}
                  alt="Modal Image"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-dancing text-3xl sm:text-4xl text-romantic-burgundy mt-4">{photos[currentIndex].caption}</h3>
              <p className="text-gray-700 italic text-base px-2">"{photos[currentIndex].hiddenMessage}"</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
