"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Footer from "@/components/footer";

const rules = [
  {
    title: "1. Zasady Ogólne",
    items: [
      "Nieznajomość regulaminu nie zwalnia z jego przestrzegania.",
      "Każdy gracz zobowiązany jest do posiadania sprawnego mikrofonu i okazywania szacunku innym.",
      "Zakazuje się używania jakichkolwiek programów trzecich ułatwiających rozgrywkę (cheaty, exploity).",
      "Wszelkie błędy gry (bugi) należy niezwłocznie zgłaszać administracji, a ich wykorzystywanie jest karane."
    ]
  },
  {
    title: "2. Rozgrywka (RolePlay)",
    items: [
      "Głównym celem serwera jest czerpanie radości z wysokiego poziomu rozgrywki RolePlay.",
      "Zakazuje się działań typu RDM (Random Deathmatch) oraz VDM (Vehicle Deathmatch).",
      "Powergaming (wymuszanie akcji) oraz Metagaming (używanie informacji spoza gry) są surowo zabronione.",
      "Należy bezwzględnie szanować życie swojej postaci oraz innych graczy (FearRP)."
    ]
  },
  {
    title: "3. Przestępczość i Frakcje",
    items: [
      "Akcje przestępcze (porwania, napady) muszą mieć solidne podłoże fabularne.",
      "Frakcje porządkowe (LSPD, EMS) podlegają wewnętrznym regulaminom i hierarchii.",
      "Pracownicy frakcji w trakcie służby nie mogą brać udziału w akcjach przestępczych.",
      "Każdy napad musi być zgłoszony i przeprowadzony zgodnie z limitami osób określonymi na Discordzie."
    ]
  },
  {
    title: "4. Kary i Zgłoszenia",
    items: [
      "Łamanie regulaminu wiąże się z karami: ostrzeżenie (warn), więzienie (jail) lub ban.",
      "Decyzje administracji są ostateczne, jednak przysługuje od nich odwołanie w systemie ticketów.",
      "Toksyczność w stosunku do innych graczy lub administracji na kanałach OOC skutkuje permanentną blokadą."
    ]
  }
];

export default function Regulamin() {
  return (
    <div className="w-full flex flex-col bg-[#0F0905] min-h-screen">
      {/* Tło z obrazkiem na górze */}
      <div 
        className="w-full h-auto relative"
        style={{
          backgroundImage: "url('/bgjuicy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-[#0F0905]/20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent to-[#0F0905] pointer-events-none" />

        {/* Hero Regulaminu */}
        <section className="w-full px-6 md:px-12 xl:px-[300px] pt-[200px] pb-[80px] relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-[8px]"
        >
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF6A00]"></div>
          <span className="text-[#FF6A00] text-[14px] font-medium tracking-wide">Zasady JuicyRP</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-[#FFFFFF] text-[40px] md:text-[56px] font-bold leading-[1.1] mt-[16px] tracking-tight"
        >
          Regulamin Serwera
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-[24px] text-[#C4A48D] text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[600px]"
        >
          Zapoznaj się z poniższymi zasadami, aby zapewnić sobie i innym graczom najlepsze wrażenia z rozgrywki. Przestrzeganie regulaminu to klucz do świetnego RP.
        </motion.p>
      </section>
      </div>

      {/* Lista zasad */}
      <section className="w-full px-6 md:px-12 xl:px-[300px] pb-[100px] relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[800px] mx-auto flex flex-col gap-[48px]"
        >
          {rules.map((section, secIdx) => (
            <motion.div
              key={secIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: secIdx * 0.1 }}
              className="bg-[#1A1009] border border-[#3D2616] rounded-[24px] p-[32px] flex flex-col gap-[24px]"
            >
              <h2 className="text-[#FFFFFF] text-[22px] font-semibold flex items-center gap-[12px]">
                <span className="text-[#FF6A00]">#</span> {section.title}
              </h2>
              <ul className="flex flex-col gap-[16px]">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-[12px] text-[#C4A48D] text-[15px] leading-[1.6]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#FF6A00] mt-[10px] shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
