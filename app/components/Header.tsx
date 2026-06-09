"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Server, Tv, HelpCircle } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isFtpPage = pathname === "/ftp";
  const isFaqPage = pathname === "/faq";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${scrolled
          ? "bg-[#070414]/85 backdrop-blur-2xl border-white/[0.08] shadow-2xl shadow-black/40"
          : "bg-transparent border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-22">
          {/* Logo & Brand */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2.5 sm:gap-4.5 cursor-pointer group"
            >
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 sm:border-white/15 group-hover:border-primary/40 shadow-xl shadow-primary/20 bg-white/5 flex-shrink-0 transition-colors">
                <Image
                  src="/logo.png"
                  alt="REDXTV Logo"
                  fill
                  sizes="(max-width: 640px) 40px, 56px"
                  className="object-cover group-hover:scale-105 transition-transform"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                {/* Mobile UI Brand - REDXTV */}
                <span className="text-lg font-black tracking-tight text-white sm:hidden leading-none select-none uppercase">
                  REDX<span className="gradient-text">TV</span>
                </span>

                {/* Desktop UI Brand - REDXTV */}
                <div className="hidden sm:flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase">
                    REDX
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight gradient-text uppercase">
                    TV
                  </span>
                </div>

                {/* Live Broadcast Badge with Developer Name */}
                <div className="hidden sm:flex items-center gap-2 mt-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-red-400">
                      LIVE • BY ALVI AHMED
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Right side navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <Link
              href="/faq"
              className={`flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 active:scale-95 cursor-pointer ${
                isFaqPage
                  ? "border-primary/50 bg-primary/10 text-primary animate-pulse"
                  : "border-white/10 hover:border-primary/50 bg-white/5 hover:bg-primary/10 text-white"
              } font-bold text-xs sm:text-sm`}
            >
              <HelpCircle size={15} className="text-primary" />
              <span>FAQ</span>
            </Link>

            <Link
              href={isFtpPage ? "/" : "/ftp"}
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-white/10 hover:border-primary/50 bg-white/5 hover:bg-primary/10 text-white font-bold text-xs sm:text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 active:scale-95 cursor-pointer"
            >
              {isFtpPage ? (
                <>
                  <Tv size={15} className="text-primary" />
                  <span className="hidden sm:inline">Watch REDXTV</span>
                  <span className="sm:hidden">Live</span>
                </>
              ) : (
                <>
                  <Server size={15} className="text-primary" />
                  <span className="hidden sm:inline">FTP Servers</span>
                  <span className="sm:hidden">FTP</span>
                </>
              )}
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
      }
