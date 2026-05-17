"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/lightswind/scroll-reveal";

const faqs = [
  {
    question: "Jak dołączyć na serwer JuicyRP?",
    answer: "Aby dołączyć, musisz połączyć się przez aplikację FiveM i znaleźć nas na liście serwerów lub wkleić IP z naszego Discorda w konsoli (F8). Wymagane jest też przejście krótkiego procesu rekrutacji (WhiteList)."
  },
  {
    question: "Czy na serwerze obowiązuje WhiteList?",
    answer: "Tak, zależy nam na wysokim poziomie RolePlay, dlatego dostęp do serwera mają tylko gracze, którzy pomyślnie zdali prostą weryfikację głosową lub pisemną."
  },
  {
    question: "Jak mogę założyć własną organizację przestępczą?",
    answer: "Wnioski na własną organizację (gang/mafia/kartel) można składać na naszym Discordzie w odpowiednim dziale. Wymagamy sensownego pomysłu, historii postaci i zgranej ekipy startowej."
  },
  {
    question: "Gdzie mogę zgłosić błąd lub złamanie regulaminu?",
    answer: "Wszelkie błędy (bugi) oraz przewinienia innych graczy (VDM/RDM/FailRP) prosimy natychmiast zgłaszać poprzez system ticketów na Discordzie. Administracja zajmie się tym od razu."
  },
  {
    question: "Czy mogę nagrywać i streamować z serwera?",
    answer: "Oczywiście! Bardzo cenimy twórców i streamerów. Pamiętaj tylko, aby przestrzegać zasad serwera, unikać metagamingu i zgłosić się po rangę twórcy na serwerze Discord."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: -15, filter: "blur(8px)" },
    show: { 
      opacity: 1, 
      x: 0,
      filter: "blur(0px)",
      transition: { 
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      } 
    }
  };

  return (
    <section className="w-full px-6 md:px-12 xl:px-[300px] mt-[100px] md:mt-[200px] relative z-10 pb-[100px] flex flex-col xl:flex-row justify-between items-start gap-12 xl:gap-0">

      {/* Lewa strona - Tytuł i przycisk */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-start text-left w-full xl:w-[500px] shrink-0"
      >
        <div className="flex items-center gap-[8px]">
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF6A00]"></div>
          <span className="text-[#FF6A00] text-[14px] font-medium tracking-wide">FAQ</span>
        </div>

        <ScrollReveal 
          containerClassName="mt-[12px]"
          textClassName="text-[#FFFFFF] text-[40px] font-semibold leading-[1.2] tracking-tight"
        >
          Najczęściej zadawane pytania.
        </ScrollReveal>

        <p className="mt-[24px] text-[#C4A48D] text-[16px] font-normal leading-[1.6]">
          Masz jakiś problem albo czegoś nie wiesz? Tutaj znajdziesz szybkie
          odpowiedzi w kwestiach związanych z serwerem.
        </p>

        {/* Przycisk discorda (Premium Shine) */}
        <div className="mt-[48px]">
          <button
            className="group relative overflow-hidden text-[#FFFFFF] text-[14px] font-medium px-[24px] py-[12px] rounded-[8px] transition-all duration-300 hover:scale-[1.05] hover:-translate-y-0.5 cursor-pointer flex items-center justify-center"
            style={{
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #FF6A00",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              outline: "none"
            }}
          >
            <span className="relative z-10 pointer-events-none">Dołącz na discorda</span>
            {/* Połysk (Shine) włączany po najechaniu na przycisk */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg] transition-transform duration-[700ms] ease-in-out -translate-x-[150%] group-hover:translate-x-[150%] z-0 pointer-events-none" />
          </button>
        </div>
      </motion.div>

      {/* Prawa strona - Akordeon FAQ */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        className="flex flex-col gap-[16px] w-full xl:w-[648px] shrink-0"
      >
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`w-full rounded-[12px] border cursor-pointer transition-all duration-300 overflow-hidden ${isOpen
                  ? "bg-[#1A1009] border-[#FF6A00]"
                  : "bg-[#1A1009] border-[#3D2616] hover:bg-[#FF6A00] hover:border-[#FF6A00]"
                }`}
            >
              {/* Pytanie w akordeonie (stała wysokość min. 56px z paddingiem) */}
              <div className="px-[24px] py-[16px] flex justify-between items-center min-h-[56px]">
                <span className={`text-[16px] font-medium transition-colors duration-300 ${isOpen ? "text-[#FF6A00]" : "text-[#FFFFFF]"}`}>
                  {faq.question}
                </span>
                <span className={`text-[24px] font-normal leading-none mb-[4px] transition-transform duration-300 ${isOpen ? "text-[#FF6A00] rotate-45" : "text-[#FFFFFF] rotate-0"}`}>
                  +
                </span>
              </div>

              {/* Odpowiedź (płynnie rozwijana z użyciem grid) */}
              <div
                className="grid transition-all duration-300 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="px-[24px] pb-[24px] pt-[0px]">
                    <p className="text-[#C4A48D] text-[14px] font-normal leading-[1.6]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}
