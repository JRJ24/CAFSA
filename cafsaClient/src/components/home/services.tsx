import type { IServicesImgAndDescription } from "@/interfaces/IServicesImgAndDescription";
import { Card } from "../ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const servicesImgAndDescription: IServicesImgAndDescription = [
  {
    img: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80",
    title: "Servicio de 2DA Generacion",
    description: "Una experiencia para la segunda camada de CAFSA",
    schedule: "Todos los sabados",
    time: "5:00PM - 7:00PM",
  },
  {
    img: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80",
    title: "Servicios Dominicales",
    description: "Nuestra reunión principal de adoración",
    schedule: "Domingos en la mañana",
    time: "10:00AM - 12:00AM",
  },
  {
    img: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80",
    title: "Servicios Juventud",
    description: "Espacio dinámico para jóvenes.",
    schedule: "Domingos en la noche",
    time: "8:00PM - 10:00PM",
  },
];

const Services = () => {
  const [index, setIndex] = useState<number>(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % servicesImgAndDescription.length);
  };

  const currentService = servicesImgAndDescription[index];
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center 
                  /* Aumentamos a gap-32 en escritorio para dar aire */ lg:gap-40 
                  p-6 md:p-10 min-h-200 lg:min-h-175 overflow-hidden"
    >
      {/* CONTENEDOR DE TARJETAS */}
      <div
        className="relative w-64 h-87.5 sm:w-80 sm:h-112.5 lg:w-100 lg:h-137.5 cursor-pointer"
        onClick={nextCard}
      >
        {servicesImgAndDescription.map((service, i) => {
          const isCenter = i === index;
          const isNext = i === (index + 1) % servicesImgAndDescription.length;

          return (
            <motion.div
              key={service.title}
              style={{ zIndex: isCenter ? 30 : 10 }}
              animate={{
                // Mantener un desplazamiento que no invada el espacio del texto
                x: isCenter ? 0 : isNext ? 100 : -100,
                rotate: isCenter ? 0 : isNext ? 12 : -12,
                scale: isCenter ? 1 : 0.85,
                opacity: isCenter ? 1 : 0.3,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="absolute inset-0"
            >
              <Card className="w-full h-full overflow-hidden shadow-2xl rounded-[2.5rem] border-none">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* CONTENEDOR DE TEXTO - Ajustes de separación */}
      <div
        className="w-full max-w-xl space-y-6 text-center lg:text-left 
                    /* lg:pl-12 añade un colchón extra de espacio a la izquierda del texto */
                    mt-16 lg:mt-0 px-4"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.title}
            initial={{ opacity: 0, x: 30 }} // Aparece desde la derecha para enfatizar la separación
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
              {currentService.title}
            </h2>
            <div className="space-y-1">
              <p className="italic text-slate-500 text-lg">
                {currentService.schedule}
              </p>
              <p className="text-xl font-bold text-blue-600">
                {currentService.time}
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg max-w-112.5">
              {currentService.description ||
                "Únete a nosotros en este tiempo especial de comunidad."}
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={nextCard}
          className="mt-6 px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl active:scale-95"
        >
          Siguiente servicio
        </button>
      </div>
    </div>
  );
};

export default Services;
