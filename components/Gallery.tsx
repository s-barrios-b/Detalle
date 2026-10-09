"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
    caption: "Nuestra primera cita ❤️",
    hiddenMessage: "Tu sonrisa siempre ilumina mis días más oscuros. ☀️",
    rotate: "-rotate-2",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    caption: "Risas e historias ✨",
    hiddenMessage: "Cada viaje o salida a tu lado se convierte en la mejor aventura. 🗺️",
    rotate: "rotate-2",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
    caption: "Abrazos infinitos 🤗",
    hiddenMessage: "Gracias por ser mi lugar seguro en el mundo. 🏡",
    rotate: "-rotate-1",
  },
];

export function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ caption: "", imgSrc: "" });

  const showModal = (caption: string, imgSrc: string) => {
    setModalData({ caption, imgSrc });
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-12">
        <span className="text-romantic-wine text-xs uppercase tracking-widest font-semibold">Galeria de Fotos</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-romantic-burgundy mt-1">Nuestros Momentos Favoritos 📸</h2>
        <p className="text-sm text-gray-600 mt-2">Puedes hacer clic en cualquier foto para ver el mensaje oculto.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className={`polaroid rounded-lg cursor-pointer transform ${photo.rotate}`}
            onClick={() => showModal(photo.hiddenMessage, photo.src)}
          >
            <div className="h-64 overflow-hidden rounded bg-romantic-rose relative">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-dancing text-xl text-center text-romantic-burgundy mt-3">{photo.caption}</p>
          </div>
        ))}
      </div>

      {/* Photo Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-2xl max-w-md w-full text-center space-y-4 shadow-2xl border border-romantic-blush"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-64">
              <Image
                src={modalData.imgSrc}
                alt="Modal Image"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <p className="font-dancing text-2xl text-romantic-burgundy">{modalData.caption}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="px-6 py-2 bg-romantic-wine text-white text-sm rounded-full hover:bg-romantic-burgundy transition"
            >
              Cerrar ✨
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
