import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SessionProvider } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lkhedma - Your Skill. Your Opportunity.",
  description: "Discover trusted Moroccan professionals and get the help you need — fast, simple and secure.",
  keywords: ["freelance", "services", "Morocco", "marketplace", "jobs", "skills"],
  authors: [{ name: "Lkhedma" }],
  openGraph: {
    title: "Lkhedma - Your Skill. Your Opportunity.",
    description: "Discover trusted Moroccan professionals and get the help you need — fast, simple and secure.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <SessionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
