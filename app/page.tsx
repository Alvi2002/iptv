"use client";

import BackgroundScene from "./components/BackgroundScene";
import Header from "./components/Header";
import IPTVPlayer from "./components/IPTVPlayer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundScene />
      <div className="relative z-10">
        <Header />
        <IPTVPlayer />
        
        {/* নিচে আপনার নিজের ক্রেডিট যোগ করতে চাইলে এটি ব্যবহার করতে পারেন */}
        <div className="text-center py-4 text-white/50 text-xs">
          © {new Date().getFullYear()} REDXTV - Developed by Alvi Ahmed
        </div>
      </div>
    </main>
  );
}
