"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // Detect screen size to choose between side-by-side (desktop) or top-bottom (mobile)
  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-romantic-burgundy mb-2 relative z-10 text-center px-4">
        Una Carta Para Ti
      </h2>
      <p className="text-sm text-gray-600 mb-4 relative z-10 text-center px-4">
        Haz clic en el sello de corazón para descubrir la sorpresa 💌
      </p>

      {/* 
        Contenedor dinámico (Acordeón).
        Su altura se adapta al estado del sobre para no dejar espacios muertos.
      */}
      <motion.div
        className="relative w-full flex justify-center items-center mt-8 mb-8 overflow-visible"
        animate={{
          height: isOpen
            ? (isDesktop ? [260, 520, 520, 520] : [200, 650, 650, 650])
            : (isDesktop ? [520, 520, 520, 260] : [650, 650, 650, 200])
        }}
        transition={{
          duration: 1.5,
          times: isOpen ? [0, 0.2, 0.5, 1] : [0, 0.5, 0.8, 1],
          ease: "easeInOut"
        }}
      >

        {/* Envelope Container con preserve-3d para ordenamiento Z perfecto */}
        <motion.div
          className="relative w-75 sm:w-100 h-50 sm:h-65 cursor-pointer z-20"
          style={{ transformStyle: "preserve-3d", perspective: 1500 }}
          animate={
            isOpen
              ? {
                x: isDesktop ? [0, 0, 0, -220] : [0, 0, 0, 0],
                // Ya no forzamos el 'y' porque el crecimiento del contenedor padre lo empuja naturalmente
                y: [0, 0, 0, 0],
              }
              : {
                x: isDesktop ? [-220, 0, 0, 0] : [0, 0, 0, 0],
                y: [0, 0, 0, 0],
              }
          }
          transition={{
            duration: 1.5,
            times: isOpen ? [0, 0.2, 0.5, 1] : [0, 0.5, 0.8, 1],
            ease: "easeInOut"
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Envelope Back (Inside) - Al fondo en el espacio 3D */}
          <div
            className="absolute inset-0 bg-[#e68a9f] rounded-b-md shadow-inner"
            style={{ transform: "translateZ(-10px)" }}
          />

          {/* The Letter */}
          <motion.div
            className="absolute left-3 right-3 sm:left-5 sm:right-5 top-3 bg-white p-5 sm:p-6 rounded-md shadow-2xl border border-romantic-blush flex flex-col justify-start items-center overflow-y-auto overflow-x-hidden"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#FF8FAB transparent',
              transformOrigin: 'bottom center', // Para que el doblez se sienta desde la base
            }}
            initial={{ y: 0, x: 0, z: 10, rotateX: 0, height: isDesktop ? 236 : 176 }}
            animate={
              isOpen
                ? {
                  // Se compensa la falta de movimiento del sobre con -140 (PC) y -180 (Móvil)
                  y: isDesktop ? [0, 0, -240, -140] : [0, 0, -200, -180],
                  x: isDesktop ? [0, 0, 0, 480] : [0, 0, 0, 0],
                  z: [10, 10, 30, 30],
                  rotateZ: isDesktop ? [0, 0, 0, 2] : [0, 0, 0, 0],
                  rotateX: [0, 0, 0, 0],
                  height: isDesktop ? [236, 236, 236, 450] : [176, 176, 176, 340]
                }
                : {
                  y: isDesktop ? [-140, -240, 0, 0] : [-180, -200, 0, 0],
                  x: isDesktop ? [480, 0, 0, 0] : [0, 0, 0, 0],
                  z: [30, 30, 10, 10],
                  rotateZ: [isDesktop ? 2 : 0, 0, 0, 0],
                  rotateX: [0, -25, 0, 0],
                  height: isDesktop ? [450, 236, 236, 236] : [340, 176, 176, 176]
                }
            }
            transition={{
              duration: 1.5,
              times: isOpen ? [0, 0.2, 0.5, 1] : [0, 0.5, 0.8, 1],
              ease: "easeInOut"
            }}
            onClick={(e) => {
              if (isOpen) {
                e.stopPropagation();
              }
            }}
          >
            <div className="text-right text-[10px] text-romantic-wine font-medium w-full mb-2">
              Barranquilla • 6 Meses
            </div>
            <h3 className="font-dancing text-2xl sm:text-3xl text-romantic-burgundy font-bold mb-3">
              Mi vida entera,
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 w-full">
              Hoy cumplimos 6 meses juntos y no puedo evitar sonreír al pensar en todo lo que hemos vivido. En este medio año me has demostrado lo hermoso que es compartir la vida con alguien tan especial, atento y único como tú.
            </p>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 w-full">
              Gracias por cada abrazo reconfortante, por las risas espontáneas, por aguantar mis días difíciles y por hacer que los días cotidianos se sientan como una aventura mágica.
            </p>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed w-full">
              Estos 6 meses son solo el comienzo de todo lo lindo que nos espera. Te amo con todo mi corazón.
            </p>
            <p className="font-dancing text-xl sm:text-2xl text-romantic-wine text-right w-full mt-4">
              Con todo mi amor. 💕
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="mt-6 px-5 py-2 bg-romantic-wine text-white text-xs font-semibold rounded-full shadow-md hover:bg-romantic-burgundy transition"
            >
              Guardar Carta
            </button>
          </motion.div>

          {/* Envelope Front (Left, Right, Bottom CSS triangles) - Al frente del bolsillo */}
          <div
            className="absolute inset-0 pointer-events-none rounded-b-md overflow-hidden"
            style={{ transform: "translateZ(20px)" }}
          >
            {/* Bottom Flap */}
            <div className="absolute bottom-0 w-0 h-0 
              border-l-150 sm:border-l-200 border-l-transparent
              border-r-150 sm:border-r-200 border-r-transparent
              border-b-120 sm:border-b-160 border-b-[#f49bb0]" />

            {/* Left Flap */}
            <div className="absolute top-0 left-0 w-0 h-0 
              border-t-100 sm:border-t-130 border-t-transparent
              border-b-100 sm:border-b-130 border-b-transparent
              border-l-150 sm:border-l-200 border-l-[#f9a6b9]" />

            {/* Right Flap */}
            <div className="absolute top-0 right-0 w-0 h-0 
              border-t-100 sm:border-t-130 border-t-transparent
              border-b-100 sm:border-b-130 border-b-transparent
              border-r-150 sm:border-r-200 border-r-[#f9a6b9]" />
          </div>

          {/* Envelope Top Flap */}
          <motion.div
            initial={{ rotateX: 0, z: 40 }}
            animate={
              isOpen
                // Cuando abre, pasa de 40 (frente a todo) a 5 (detrás de la carta z:10, detrás del frente z:20)
                ? { rotateX: [0, 180, 180, 180], z: [40, 5, 5, 5] }
                // Cuando cierra, vuelve a pasar al frente (z:40) para tapar la carta y el frente
                : { rotateX: [180, 180, 180, 0], z: [5, 5, 5, 40] }
            }
            transition={{
              duration: 1.5,
              times: isOpen ? [0, 0.2, 0.5, 1] : [0, 0.5, 0.8, 1],
              ease: "easeInOut"
            }}
            style={{ transformOrigin: "top" }}
            className="absolute top-0 left-0 right-0 pointer-events-none flex flex-col items-center"
          >
            {/* Triangle pointing down */}
            <div className="w-0 h-0 
              border-l-150 sm:border-l-200 border-l-transparent
              border-r-150 sm:border-r-200 border-r-transparent
              border-t-120 sm:border-t-150 border-t-[#f28da3] drop-shadow-md" />

            {/* Wax Seal */}
            <motion.div
              animate={
                isOpen
                  ? { opacity: [1, 0, 0, 0] }
                  : { opacity: [0, 0, 0, 1] }
              }
              transition={{
                duration: 1.5,
                times: isOpen ? [0, 0.2, 0.5, 1] : [0, 0.5, 0.8, 1],
              }}
              className="absolute top-25 sm:top-32.5 w-12 h-12 bg-romantic-wine text-white rounded-full flex items-center justify-center shadow-lg border-2 border-romantic-gold pointer-events-auto hover:scale-110 transition-transform"
            >
              <span className="text-xl">❤️</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
