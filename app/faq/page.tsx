"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  HelpCircle,
  ChevronDown,
  Tv,
  ListPlus,
  ShieldAlert,
  MessageCircle,
  Globe,
  BookOpen,
} from "lucide-react";

import BackgroundScene from "../components/BackgroundScene";
import Header from "../components/Header";

const faqs = [
  {
    id: "faq-1",
    question: "What is REDXTV and how does it work?",
    answer:
      "REDXTV is a high-performance, web-based IPTV player that allows you to stream live television content directly in your browser. It uses HLS technology to play .m3u8 and .m3u playlists from worldwide sources without needing any extra software.",
    icon: Tv,
  },
  {
    id: "faq-2",
    question: "How do I load or import custom playlists?",
    answer:
      "To import your own list, go to the 'Playlists Manager' tab. You can paste an M3U URL or upload a local file (.m3u, .json). REDXTV will store these securely in your browser's local storage so they remain available even after a refresh.",
    icon: ListPlus,
  },
  {
    id: "faq-3",
    question: "Why do some channels show 'Stream Unavailable'?",
    answer:
      "Live streams depend on the original broadcaster's server. If a channel doesn't load, it might be offline, geo-restricted, or the URL has expired. Try the 'Reload' button or check if other channels from the same list are working.",
    icon: ShieldAlert,
  },
  {
    id: "faq-4",
    question: "Do I need to install an Android/iOS app?",
    answer:
      "No. REDXTV is a Progressive Web App (PWA). You can simply use it from any browser. For an app-like experience on mobile, use the 'Add to Home Screen' option in your browser menu.",
    icon: Globe,
  },
  {
    id: "faq-5",
    question: "Is REDXTV free and safe?",
    answer:
      "Yes, REDXTV is 100% free and open-source. We do not host any media content; we only provide the player to view publicly available streams. Your privacy is protected as we don't track your viewing habits.",
    icon: BookOpen,
  },
  {
    id: "faq-6",
    question: "How can I contact Alvi Ahmed for support?",
    answer:
      "For technical support, feature requests, or reporting bugs, you can contact Alvi Ahmed directly on Telegram (@Real_Alvi). You can also follow our GitHub (Alvi2002/iptv) for the latest updates.",
    icon: MessageCircle,
  },
];

export default function FAQPage() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <main className="relative min-h-screen text-white overflow-hidden pb-16">
      <BackgroundScene />
      <div className="relative z-10">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12">
          {/* ─── Page Header ─── */}
          <div className="text-center max-w-3xl mx-auto space-y-5 mb-10 sm:mb-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 sm:border-white/5 backdrop-blur-sm"
            >
              <HelpCircle size={14} className="text-primary animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary">
                REDXTV Knowledgebase
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1]"
            >
              Frequently Asked <span className="gradient-text">Questions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-gray-400 font-medium max-w-xl mx-auto leading-relaxed"
            >
              Everything you need to know about REDXTV streaming, custom playlists, and compatibility.
            </motion.p>
          </div>

          {/* ─── FAQ List ─── */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const IconComponent = faq.icon;
              const isOpen = activeFaq === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 sm:border-white/5 bg-white/[0.015] hover:bg-white/[0.04] hover:border-primary/30 backdrop-blur-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className="p-2.5 rounded-xl border border-primary/20 bg-primary/10 text-primary flex-shrink-0"
                      >
                        <IconComponent size={18} strokeWidth={2} />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-white leading-tight">
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-zinc-400 flex-shrink-0"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-white/5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* ─── Support Callout (Updated to @Real_Alvi) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-6 rounded-2xl border border-white/10 sm:border-white/5 bg-white/[0.01] backdrop-blur-sm text-center max-w-xl mx-auto space-y-4"
          >
            <h3 className="text-base sm:text-lg font-bold">Still have questions?</h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium">
              If you couldn&apos;t find your answer here, feel free to reach out to the developer **Alvi Ahmed**.
            </p>
            <div className="pt-2">
              <a
                href="https://t.me/Real_Alvi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/95 text-white font-extrabold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-primary/10 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <MessageCircle size={15} />
                <span>Contact Alvi via Telegram</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
                  }
