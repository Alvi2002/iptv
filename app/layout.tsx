import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientPopupWrapper from "./components/ClientPopupWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// এখানে আপনার Vercel-এর লিঙ্কটি দিন (যেমন: https://iptv-alvi.vercel.app)
const siteUrl = "https://redxtvbyalvi.vercel.app/"; 

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070414" },
    { media: "(prefers-color-scheme: light)", color: "#070414" },
  ],
};

export const metadata: Metadata = {
  title: "REDXTV — Watch 6500+ Live TV Channels Free", // অ্যাপের নাম পরিবর্তন
  description:
    "Stream 6500+ live TV channels from Bangladesh, India, and worldwide on REDXTV. Premium IPTV web player with HLS streaming, custom playlist support, and a modern UI.",
  keywords: [
    "REDXTV",
    "IPTV",
    "live TV",
    "streaming",
    "HLS player",
    "Bangladesh TV",
    "free TV",
    "online TV",
  ],
  authors: [{ name: "Alvi Ahmed", url: "https://github.com/Alvi2002" }], // আপনার নাম ও লিঙ্ক
  creator: "Alvi Ahmed", // আপনার নাম
  publisher: "Alvi Ahmed", // আপনার নাম
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "REDXTV", // অ্যাপের নাম
    title: "REDXTV — Watch 6500+ Live TV Channels Free",
    description:
      "Stream 6500+ live TV channels from Bangladesh, India, and worldwide on REDXTV. Premium IPTV web player with HLS streaming.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "REDXTV — Live TV streaming",
        type: "image/png",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  category: "entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // এগুলা Vercel Environment Variables থেকে কন্ট্রোল করা যায়
  const showPopup = process.env.SHOW_POPUP?.toLowerCase() === "true";
  const disableWcPopup = process.env.DISABLE_WC_POPUP?.toLowerCase() === "true";
  const disableTgPopup = process.env.DISABLE_TG_POPUP?.toLowerCase() === "true";

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <ClientPopupWrapper
          showPopup={showPopup}
          disableWcPopup={disableWcPopup}
          disableTgPopup={disableTgPopup}
        />
      </body>
    </html>
  );
    }
