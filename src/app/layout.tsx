import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import TopBar from "@/components/topbar/topBar";
import CustomCursor from "@/components/cursor/customCursor";
import PortfolioChatbot from "@/components/chatBot/chatBot";
import AOSProvider from "@/components/AOSprovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishnu Prasad | Frontend Developer",

  description:
    "Portfolio of Vishnu Prasad, a frontend developer specializing in Angular, React, Next.js, Flutter and modern web development.",

  keywords: [
    "Vishnu Prasad",
    "Vishnu Prasad frontend developer",
    "Vishnu Prasad UI developer",
    "Vishnu Prasad Ravindran",
    "Vishnu Prasad Ravindran frontend developer",
    "Vishnu Prasad Ravindran UI developer",
    "Frontend Developer",
    "Angular Developer",
    "React Developer",
    "Next.js Developer",
    "UI Developer",
    "JavaScript Developer",
  ],

  authors: [
    {
      name: "Vishnu Prasad",
    },
  ],

  creator: "Vishnu Prasad",

  openGraph: {
    title: "Vishnu Prasad | Frontend Developer",
    description:
      "Frontend developer portfolio showcasing experience, skills, projects and more.",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-black text-white">

        {/* AOS */}
        <AOSProvider />

        {/* Custom Cursor */}
        <CustomCursor />

        {/* =========================
            FIXED BACKGROUND
        ========================== */}
        <div className="pointer-events-none fixed inset-0 -z-10">

          {/* Red → Black Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(
                  circle at 20% 25%,
                  rgba(100, 0, 0, 0.45),
                  transparent 45%
                ),
                linear-gradient(
                  120deg,
                  #180000,
                  #050505 55%,
                  #000000
                )
              `,
            }}
          />

          {/* Cross / Grid */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,0.5) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.5) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "80px 80px",
            }}
          />

        </div>

        {/* =========================
            TOPBAR
        ========================== */}
        <TopBar />

        {/* =========================
            PAGE CONTENT
        ========================== */}
        <main className="relative mt-20 min-h-screen w-full">
          {children}
        </main>

        {/* =========================
            GLOBAL CHATBOT
        ========================== */}
        <PortfolioChatbot />

      </body>
    </html>
  );
}