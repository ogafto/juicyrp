"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/lightswind/scroll-reveal";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div 
      className="w-full flex flex-col items-center justify-center min-h-[90vh] text-center relative"
      style={{
        backgroundImage: "url('/bgjuicy.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-[#0F0905]/40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent to-[#0F0905] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center px-6">
      
      {/* 404 Text */}
      <ScrollReveal 
        textClassName="text-[#FF6A00] text-[120px] md:text-[180px] font-bold leading-none tracking-tighter"
      >
        404
      </ScrollReveal>
      
      {/* Subtitle */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-[#FFFFFF] text-[32px] md:text-[40px] font-semibold mt-[24px]"
      >
        Zgubiłeś drogę?
      </motion.h2>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-[#C4A48D] text-[16px] max-w-[400px] mt-[16px]"
      >
        Strona, której szukasz, nie istnieje lub została przeniesiona. Wróć na naszą główną stronę, żeby dołączyć do gry.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-[48px]"
      >
        <Link href="/">
          <button
            className="group relative overflow-hidden text-[#FFFFFF] text-[16px] font-medium px-[32px] py-[16px] rounded-[8px] transition-all duration-300 hover:scale-[1.05] hover:-translate-y-0.5 cursor-pointer"
            style={{
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #FF6A00",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              outline: "none"
            }}
          >
            <span className="relative z-10 pointer-events-none">Wróć na stronę główną</span>
            {/* Połysk (Shine) */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg] transition-transform duration-[700ms] ease-in-out -translate-x-[150%] group-hover:translate-x-[150%] z-0 pointer-events-none" />
          </button>
        </Link>
      </motion.div>

    </div>
    </div>
  );
}
