"use client";

import { useState, useRef } from "react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-md border border-romantic-blush p-3 rounded-full shadow-lg flex items-center space-x-3 transition-all duration-300 hover:scale-105">
      <button
        onClick={toggleMusic}
        className="w-10 h-10 bg-romantic-wine text-white rounded-full flex items-center justify-center shadow-md hover:bg-romantic-burgundy transition"
      >
        {!isPlaying ? (
          <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        )}
      </button>
      <div className="hidden sm:block pr-2">
        <p className="text-xs font-semibold text-romantic-wine">Nuestra Canción 💕</p>
        <p className="text-[10px] text-gray-500 font-light">Melodía Romántica</p>
      </div>

      <audio ref={audioRef} loop src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112199.mp3" />
    </div>
  );
}
