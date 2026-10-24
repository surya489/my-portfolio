import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { Analytics } from "@vercel/analytics/next";

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const gaId = process.env.NEXT_PUBLIC_GA_ID;

const siteUrl = "https://my-portfolio-omega-wheat-25.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Jaya Surya M | Full Stack Developer (React.js, Next.js, TypeScript, Node.js)",
    template: "%s | Jaya Surya M",
  },
  description:
    "Jaya Surya M is a Full Stack Developer with 4.7 years of overall experience building production web applications with Next.js (App Router), React, TypeScript, Node.js, and MongoDB.",
  keywords: [
    "Jaya Surya M",
    "Jayasurya",
    "Full Stack Developer",
    "React Developer",
    "Next.js App Router",
    "TypeScript",
    "Node.js Developer",
    "Tailwind CSS",
    "Primer.io Payment Gateway",
    "Meta CAPI Conversion Tracking",
    "Web Developer Portfolio",
    "Coimbatore Web Developer",
  ],
  authors: [{ name: "Jaya Surya M", url: siteUrl }],
  creator: "Jaya Surya M",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Jaya Surya M | Full Stack Developer (React.js, Next.js, Node.js, TypeScript)",
    description:
      "Full Stack Developer with 4.7 years of overall experience building production web platforms using Next.js App Router, React, TypeScript, Node.js, and MongoDB.",
    url: siteUrl,
    siteName: "Jaya Surya M Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Jaya Surya M - Full Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaya Surya M | Full Stack Developer (React.js, Next.js, Node.js, TypeScript)",
    description:
      "Full Stack Developer with 4.7 years of overall experience building production web platforms using Next.js App Router, React, TypeScript, Node.js, and MongoDB.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Jaya Surya M",
      url: siteUrl,
      image: `${siteUrl}/logo.png`,
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer with 4.7 years of experience building production web applications using Next.js (App Router), React, TypeScript, Node.js, and MongoDB.",
      email: "suryajaya4899@gmail.com",
      telephone: "+916380489800",
      sameAs: [
        "https://github.com/surya489",
        "https://www.linkedin.com/in/jayasurya4899/",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      knowsAbout: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "REST APIs",
        "Primer.io",
        "Meta CAPI",
        "Socket.io",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Jaya Surya M Portfolio",
      description: "Portfolio of Jaya Surya M, Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="midnight"
      className={cn("font-mono", jetbrainsMono.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
