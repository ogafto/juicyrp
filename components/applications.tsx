"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/lightswind/scroll-reveal";

const cards = [
  { name: "Policjant", image: "/juicyzdjecie.jpg" },
  { name: "Pogotowie ratunkowe", image: "/juicyzdjecie.jpg" },
  { name: "Mafia", image: "/juicyzdjecie.jpg" },
  { name: "Straż pożarna", image: "/juicyzdjecie.jpg" },
  { name: "Mechanik", image: "/juicyzdjecie.jpg" },
  { name: "Taxi", image: "/juicyzdjecie.jpg" },
];

export default function Applications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { 
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        mass: 1
      } 
    }
  };

  return (
    <section className="w-full px-6 md:px-12 xl:px-[300px] mt-[100px] md:mt-[150px] relative z-10">

      {/* Nagłówek sekcji */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 xl:gap-0">
        {/* Lewa strona - Tytuły */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-start text-left"
        >
          <div className="flex items-center gap-[8px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[#FF6A00]"></div>
            <span className="text-[#FF6A00] text-[14px] font-medium tracking-wide">Podania</span>
          </div>
          <ScrollReveal 
            containerClassName="mt-[12px]"
            textClassName="text-[#FFFFFF] text-[32px] md:text-[40px] font-semibold leading-[1.2] tracking-tight max-w-[450px]"
          >
            Wybierz ekipę i zacznij działać.
          </ScrollReveal>
        </motion.div>

        {/* Prawa strona - Opis */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-start xl:items-end text-left xl:text-right pb-[8px]"
        >
          <p className="text-[#C4A48D] text-[16px] font-normal leading-[1.6]">
            Szukasz pracy w policji, a może chcesz kręcić nielegalne interesy? <br className="hidden md:block" />
            Sprawdź dostępne frakcje, złóż podanie i pokaż, co potrafisz.
          </p>
        </motion.div>
      </div>

      {/* Siatka kart (Grid) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        className="mt-[48px] md:mt-[64px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px]"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative w-full h-[280px] rounded-[24px] overflow-hidden border border-[#3D2616] group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Tło obrazkowe */}
            <img
              src={card.image}
              alt={card.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[700ms] group-hover:scale-110"
            />

            {/* Nakładka przyciemniająca na dole dla lepszej czytelności i klimatu */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0905]/90 via-[#0F0905]/20 to-transparent pointer-events-none" />

            {/* Przycisk dolny - identyczny jak w navbarze z efektem shine */}
            <div className="absolute bottom-[24px] left-[24px] right-[24px]">
              <button
                className="w-full relative overflow-hidden text-[#FFFFFF] text-[14px] font-medium px-[24px] py-[12px] rounded-[8px] transition-all duration-300 flex items-center justify-between cursor-pointer"
                style={{
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #FF6A00",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  outline: "none"
                }}
              >
                <span className="relative z-10 pointer-events-none">{card.name}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 pointer-events-none transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* Połysk (Shine) włączany po najechaniu na całą kartę! */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg] transition-transform duration-[700ms] ease-in-out -translate-x-[150%] group-hover:translate-x-[150%] z-0 pointer-events-none" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
