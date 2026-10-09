"use client";

const events = [
  {
    title: "El Día que Todo Empezó",
    description: "Esa primera conversación donde conectamos de inmediato y supimos que había algo mágico flotando en el aire.",
    label: "El Inicio",
    icon: "✨",
  },
  {
    title: "Nuestra Primera Cita Especial",
    description: "Los nervios, las miradas tímidas y esas horas que se pasaron volando entre risas y confesiones.",
    label: "Nuestra Cita",
    icon: "☕",
  },
  {
    title: "Nos Volvimos Novios",
    description: "El momento en que decidimos caminar juntos de la mano y construir recuerdos imborrables.",
    label: "El \"Sí\"",
    icon: "💖",
  },
  {
    title: "6 Meses de Pura Felicidad",
    description: "Celebrando medio año de complicidad, amor bonito y sueños compartidos. ¡Y lo que nos falta!",
    label: "Hoy",
    icon: "🎉",
  },
];

export function Timeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-romantic-wine text-xs uppercase tracking-widest font-semibold">Nuestros Hitos</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-romantic-burgundy mt-1">Nuestra Historia de Amor 📖</h2>
      </div>

      <div className="relative border-l-2 border-romantic-deep/40 ml-4 sm:ml-32 space-y-12">
        {events.map((event, idx) => (
          <div key={idx} className="relative pl-8 group">
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 bg-romantic-rose border-2 border-romantic-deep rounded-full flex items-center justify-center text-xs">
              {event.icon}
            </div>
            <div className="sm:absolute sm:-left-36 sm:top-1 text-xs font-semibold text-romantic-wine uppercase tracking-wider mb-1 sm:mb-0">
              {event.label}
            </div>
            <div className="bg-white p-5 rounded-2xl border border-romantic-blush shadow-sm hover:shadow-md transition">
              <h3 className="font-serif text-lg font-bold text-romantic-burgundy">{event.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
