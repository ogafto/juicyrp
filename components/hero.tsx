"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/lightswind/scroll-reveal";

export default function Hero() {
  return (
    <div className="flex w-full px-6 md:px-12 xl:px-[300px] items-start justify-between relative z-10 flex-col xl:flex-row">

      {/* Lewa strona - Teksty i przyciski */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col items-start justify-center text-left max-w-[600px] mt-[60px] md:mt-[110px] z-20"
      >

        {/* Tytuł */}
        <ScrollReveal textClassName="text-[#FFFFFF] text-[40px] sm:text-[48px] md:text-[72px] font-semibold tracking-tight leading-[1.1]">
          Twoja historia zaczyna się tutaj
        </ScrollReveal>

        {/* Opis */}
        <p className="mt-[24px] text-[#C4A48D] text-[16px] font-normal leading-[1.5]">
          Solidna rozgrywka, zero lagów i aktywna administracja. <br className="hidden md:block" /> Wbijaj do nas i graj tak, jak lubisz.
        </p>

        {/* Kontener na przyciski */}
        <div className="mt-[48px] flex flex-col sm:flex-row items-center gap-[24px] w-full sm:w-auto">

          {/* Przycisk Sklepu - z efektem premium shine */}
          <button
            className="w-full sm:w-auto group relative overflow-hidden text-[#FFFFFF] text-[14px] font-medium px-[24px] py-[12px] rounded-[8px] transition-all duration-300 hover:scale-[1.05] hover:-translate-y-0.5 cursor-pointer"
            style={{
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #FF6A00",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              outline: "none"
            }}
          >
            <span className="relative z-10 pointer-events-none">Zobacz sklep</span>
            {/* Połysk (Shine) - poprawna animacja */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg] transition-transform duration-[700ms] ease-in-out -translate-x-[150%] group-hover:translate-x-[150%] z-0 pointer-events-none" />
          </button>

          {/* Przycisk Dołącz do nas */}
          <button className="w-full sm:w-auto text-[#FFFFFF] text-[14px] font-medium px-[24px] py-[12px] rounded-[8px] border border-white/20 bg-transparent hover:bg-white/5 transition-all duration-300 hover:scale-[1.05] cursor-pointer text-center">
            Dołącz do nas
          </button>
        </div>

      </motion.div>

      {/* Prawa strona - Obrazek postaci */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="self-center xl:self-start absolute xl:relative right-0 xl:right-auto bottom-0 xl:bottom-auto w-[200px] md:w-[300px] xl:w-[424px]"
      >
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mt-[20px] xl:-mt-[20px] opacity-50 xl:opacity-100 pointer-events-none"
        >
        {/* W Next.js najlepiej byłoby użyć <Image>, ale skoro plik postac.png jest w public, użyjemy tagu img */}
        <img 
          src="/postac.png" 
          alt="Postać" 
          className="w-full h-auto object-contain"
        />
        </motion.div>
      </motion.div>

    </div>
  );
}
