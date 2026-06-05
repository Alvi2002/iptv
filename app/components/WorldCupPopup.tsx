"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, X, Sparkles } from "lucide-react";

interface WorldCupPopupProps {
  showPopup: boolean;
}

export default function WorldCupPopup({ showPopup }: WorldCupPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!showPopup) return;

    // Check if user has already dismissed the popup
    const isDismissed = localStorage.getItem("dismissed_world_cup_popup_2026");
    if (isDismissed !== "true") {
      // Delay showing the popup slightly for a premium feel
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("dismissed_world_cup_popup_2026", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#070414]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.55, bounce: 0.15 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#0c0824]/90 p-6 shadow-2xl shadow-primary/25 backdrop-blur-2xl sm:p-8"
          >
            {/* Ambient Background Lights */}
            <div className="absolute -top-16 -left-16 -z-10 h-36 w-36 rounded-full bg-yellow-500/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 -z-10 h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition-all hover:bg-white/15 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header / Gold Trophy */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 shadow-xl shadow-yellow-500/5">
                <Trophy className="h-9 w-9 animate-pulse" />
                <Sparkles className="absolute -top-1 -right-1 h-5 w-5 text-yellow-300 animate-bounce" />
              </div>

              {/* World Cup 2026 Badge */}
              <span className="inline-flex items-center gap-1 rounded-full border border-yellow-500/20 bg-linear-to-r from-yellow-500/10 to-amber-500/10 px-3.5 py-1 text-[11px] font-bold tracking-wider text-yellow-400 uppercase">
                FIFA World Cup 2026
              </span>

              {/* Title */}
              <h3 className="mt-4 text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                Official Joint <span className="bg-linear-to-r from-yellow-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">Broadcasting Rights</span>
              </h3>
              <p className="mt-1 text-xs font-black tracking-widest text-cyan-400 uppercase">
                Live in Bangladesh
              </p>
            </div>

            {/* Announcement text */}
            <div className="mt-6 rounded-2xl border border-white/5 bg-white/[0.03] p-4 sm:p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-yellow-500 to-amber-600" />
              <p className="text-center sm:text-left text-sm leading-relaxed text-zinc-300">
                Bangladesh Television <span className="font-semibold text-white">(BTV)</span>,{" "}
                <span className="font-semibold text-white">T Sports</span>, and{" "}
                <span className="font-semibold text-white">Somoy TV</span> have officially acquired the joint broadcasting rights to telecast the{" "}
                <span className="font-semibold text-yellow-400">FIFA World Cup 2026</span> live in Bangladesh.
              </p>
            </div>

            {/* Broadcaster Logo Cards */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {/* BTV */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.01] p-3 text-center transition-all hover:bg-white/[0.04] hover:border-white/10 hover:translate-y-[-2px] group">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 font-black text-sm border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  BTV
                </div>
                <span className="mt-2 text-[10px] font-bold text-zinc-400">National TV</span>
              </div>

              {/* T Sports */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-red-500/10 bg-red-500/[0.02] p-3 text-center transition-all hover:bg-red-500/5 hover:border-red-500/30 hover:translate-y-[-2px] group">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500 font-black text-sm border border-red-500/20 group-hover:scale-105 transition-transform">
                  T Sports
                </div>
                <span className="mt-2 text-[10px] font-bold text-zinc-400">Premier Sports</span>
              </div>

              {/* Somoy TV */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-sky-500/10 bg-sky-500/[0.02] p-3 text-center transition-all hover:bg-sky-500/5 hover:border-sky-500/30 hover:translate-y-[-2px] group">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 font-black text-xs border border-sky-500/20 group-hover:scale-105 transition-transform">
                  SOMOY
                </div>
                <span className="mt-2 text-[10px] font-bold text-zinc-400">News & Live</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="mt-6 flex flex-col gap-2">
              <button
                onClick={handleClose}
                className="w-full rounded-2xl bg-linear-to-r from-yellow-500 to-amber-600 px-6 py-3 text-sm font-black text-black shadow-lg shadow-yellow-500/25 transition-all hover:from-yellow-400 hover:to-amber-500 hover:shadow-yellow-500/40 hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-center"
              >
                Watch Live Stream Now
              </button>
            </div>

            <p className="mt-3 text-center text-[9px] font-medium text-zinc-500">
              *Matches will stream live once the tournament begins.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
