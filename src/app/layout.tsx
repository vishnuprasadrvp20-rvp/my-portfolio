import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/topbar/topBar";
import CustomCursor from "@/components/cursor/customCursor";
import PortfolioChatbot from "@/components/chatBot/chatBot";

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
  description: "Portfolio of Vishnu Prasad",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-black text-white">
        <CustomCursor />

        {/* Fixed Background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">

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

        {/* Fixed Topbar */}
        <TopBar />

        {/* Page Content */}
        <main className="relative mt-20">
          {children}
        </main>

        <PortfolioChatbot />

      </body>
    </html>
  );
}