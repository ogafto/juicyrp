"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Start", href: "/" },
    { label: "Podania", href: "/#podania" },
    { label: "Zarząd", href: "/#zarzad" },
    { label: "Regulamin", href: "/regulamin" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex items-center justify-between px-6 md:px-12 xl:px-[300px] py-[32px] absolute top-0 left-0 z-50"
      >

        {/* Lewa strona - Nawigacja (ukryte na mobile) */}
        <div className="hidden xl:flex items-center gap-[24px]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`inline-block text-[14px] font-medium transition-all duration-300 hover:scale-110 ${pathname === link.href ? "text-[#FFFFFF]" : "text-[#A3968F] hover:text-[#FFFFFF]"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Środek - Logo */}
        <div className="flex xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 z-50">
          <Link href="/" className="cursor-pointer">
            <img src="/logo.png" alt="JuicyRP Logo" className="w-[64px] h-[64px] object-contain transition-all duration-300 hover:scale-110" />
          </Link>
        </div>

        {/* Prawa strona - Przyciski (ukryte na mobile) */}
        <div className="hidden xl:flex items-center gap-[24px]">
          <Link href="https://discord.gg/juicyrp" target="_blank" rel="noopener noreferrer" className="text-[#A3968F] hover:text-[#FFFFFF] transition-all duration-300 hover:scale-110 cursor-pointer flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
            </svg>
          </Link>

          <button
            className="group relative overflow-hidden text-[#FFFFFF] text-[14px] font-medium px-[24px] py-[12px] rounded-[8px] transition-all duration-300 hover:scale-[1.05] hover:-translate-y-0.5 cursor-pointer"
            style={{
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #FF6A00",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              outline: "none"
            }}
          >
            <span className="relative z-10 pointer-events-none">Zobacz sklep</span>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg] transition-transform duration-[700ms] ease-in-out -translate-x-[150%] group-hover:translate-x-[150%] z-0 pointer-events-none" />
          </button>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="flex xl:hidden items-center z-50">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-white hover:text-[#FF6A00] transition-colors p-2"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </motion.nav>

      {/* Rozwijane Menu Mobile (Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#0F0905]/95 backdrop-blur-md flex flex-col items-center justify-center px-6"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-[40px] right-6 md:right-12 text-white hover:text-[#FF6A00] transition-colors p-2"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex flex-col items-center gap-[32px] text-center w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-[32px] font-semibold transition-colors ${pathname === link.href ? "text-[#FFFFFF]" : "text-[#A3968F] hover:text-[#FFFFFF]"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex flex-col gap-[16px] mt-[48px] w-full max-w-[250px]">
                <button className="text-[#FFFFFF] text-[20px] font-medium py-[12px] border border-white/20 rounded-[8px] hover:bg-white/5 transition-colors">
                  Discord
                </button>
                <button
                  className="w-full relative overflow-hidden text-[#FFFFFF] text-[16px] font-medium px-[24px] py-[16px] rounded-[8px] transition-all duration-300"
                  style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #FF6A00",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    outline: "none"
                  }}
                >
                  <span className="relative z-10 pointer-events-none">Zobacz sklep</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
