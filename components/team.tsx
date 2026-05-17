"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/lightswind/scroll-reveal";

const teamMembers = [
  { name: "Oliwierek", role: "CEO", image: "/logoteam.gif" },
  { name: "ogfr3kless", role: "CEO", image: "/logoteam.gif" },
  { name: "nieznany", role: "CEO", image: "/logoteam.gif" },
];

export default function Team() {
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
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 1
      } 
    }
  };

  return (
    <section className="w-full px-6 md:px-12 xl:px-[300px] mt-[100px] md:mt-[200px] relative z-10 pb-[50px] md:pb-[100px]">

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
            <span className="text-[#FF6A00] text-[14px] font-medium tracking-wide">Zarząd</span>
          </div>
          <ScrollReveal 
            containerClassName="mt-[12px]"
            textClassName="text-[#FFFFFF] text-[32px] md:text-[40px] font-semibold leading-[1.2] tracking-tight max-w-[450px]"
          >
            Ludzie, którzy ogarniają ten projekt.
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
          <p className="text-[#C4A48D] text-[16px] font-normal leading-[1.6] max-w-[480px]">
            Nie jesteśmy tu od banowania za byle co. Pilnujemy porządku i dbamy o to, żeby każdemu grało się dobrze.
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
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full bg-[#1A1009] rounded-[24px] p-[24px] border border-[#3D2616] group cursor-pointer transition-transform duration-300 hover:scale-[1.02] flex flex-col justify-between"
          >
            {/* Górna część - Profil */}
            <div className="flex items-center gap-[12px]">
              <img
                src={member.image}
                alt={member.name}
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-[0px]">
                <span className="text-[#D8D9DF] text-[18px] font-medium">{member.name}</span>
                <span className="text-[#FF6A00] text-[14px] font-medium">{member.role}</span>
              </div>
            </div>

            {/* Przycisk dolny - identyczny z efektem shine */}
            <div className="mt-[32px] relative w-full">
              <button
                className="w-full relative overflow-hidden text-[#FFFFFF] text-[14px] font-medium px-[24px] py-[12px] rounded-[8px] transition-all duration-300 flex items-center justify-between cursor-pointer"
                style={{
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #FF6A00",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  outline: "none"
                }}
              >
                <span className="relative z-10 pointer-events-none">Skontaktuj się</span>
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
