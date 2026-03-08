import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jayasurya | Frontend Developer (React, Next.js)",
    template: "%s | Jayasurya",
  },
  description:
    "Jayasurya is a Frontend Developer with 4+ years of experience building scalable web applications using React, Next.js, JavaScript, and modern UI technologies.",
  keywords: [
    "Jayasurya",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Jayasurya" }],
  creator: "Jayasurya",
  metadataBase: new URL("https://my-portfolio-omega-wheat-25.vercel.app"),
  openGraph: {
    title: "Jayasurya | React & Next.js Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web applications with 4+ years experience building scalable products.",
    url: "https://my-portfolio-omega-wheat-25.vercel.app",
    siteName: "Jayasurya Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayasurya | React & Next.js Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web applications with 4+ years experience building scalable products.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-mono", jetbrainsMono.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0F0F13] text-white antialiased`}
      >
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
