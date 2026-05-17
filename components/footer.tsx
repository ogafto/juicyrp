"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1009] border-t border-[#3D2616] mt-[100px] xl:mt-[200px] px-6 md:px-12 xl:px-[300px] py-[64px] xl:py-[128px] flex flex-col xl:flex-row justify-between items-start gap-[64px] xl:gap-0 relative z-10">
      
      {/* Lewa strona - Logo i opis */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex flex-col max-w-[360px]"
      >
        {/* Logo - link do strony głównej z animacją */}
        <Link href="/" className="self-start inline-block">
          <img src="/logofooter.png" alt="JuicyRP Logo" className="w-[134px] h-[48px] object-contain transition-transform duration-300 hover:scale-105" />
        </Link>
        
        <p className="text-[#C4A48D] text-[14px] font-normal leading-[1.6] mt-[24px] max-w-[360px]">
          Zanurz się w świecie JuicyRP i twórz własną historię na platformie FiveM. Rozbudowana gospodarka, autorskie skrypty i świetne RolePlay czekają!
        </p>

        <p className="text-[#FFFFFF] text-[14px] font-medium mt-[48px]">
          Strona stworzona przez: <Link href="https://afto.works" target="_blank" className="text-[#FF6A00] hover:underline">afto.works</Link>
        </p>
      </motion.div>

      {/* Prawa strona - Linki */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-[48px] xl:gap-[120px] w-full xl:w-auto"
      >
        
        {/* Nawigacja */}
        <div className="flex flex-col">
          <h4 className="text-[#FFFFFF] text-[16px] font-medium mb-[16px]">Nawigacja</h4>
          <div className="flex flex-col gap-[8px]">
            <Link href="/" className="text-[#A3968F] text-[14px] font-medium hover:text-[#FFFFFF] transition-colors">Start</Link>
            <Link href="/regulamin" className="text-[#A3968F] text-[14px] font-medium hover:text-[#FFFFFF] transition-colors">Regulamin</Link>
            <Link href="/#podania" className="text-[#A3968F] text-[14px] font-medium hover:text-[#FFFFFF] transition-colors">Podania</Link>
            <Link href="/#zarzad" className="text-[#A3968F] text-[14px] font-medium hover:text-[#FFFFFF] transition-colors">Zarząd</Link>
            <Link href="/#faq" className="text-[#A3968F] text-[14px] font-medium hover:text-[#FFFFFF] transition-colors">FAQ</Link>
          </div>
        </div>

        {/* Sociale */}
        <div className="flex flex-col">
          <h4 className="text-[#FFFFFF] text-[16px] font-medium mb-[16px]">Sociale</h4>
          <div className="flex flex-col gap-[8px]">
            <Link href="#" className="text-[#A3968F] text-[14px] font-medium hover:text-[#FFFFFF] transition-colors">Discord</Link>
            <Link href="#" className="text-[#A3968F] text-[14px] font-medium hover:text-[#FFFFFF] transition-colors">Youtube</Link>
            <Link href="#" className="text-[#A3968F] text-[14px] font-medium hover:text-[#FFFFFF] transition-colors">Instagram</Link>
            <Link href="#" className="text-[#A3968F] text-[14px] font-medium hover:text-[#FFFFFF] transition-colors">Tiktok</Link>
          </div>
        </div>

      </motion.div>
    </footer>
  );
}
