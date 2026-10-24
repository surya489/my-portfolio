import type { Metadata } from "next";

const siteUrl = "https://my-portfolio-omega-wheat-25.vercel.app";

export const metadata: Metadata = {
  title: "Contact | Jaya Surya M - Full Stack Developer",
  description:
    "Get in touch with Jaya Surya M for Full Stack, Next.js, React, and Node.js developer opportunities, contracting, or architectural inquiries.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact | Jaya Surya M - Full Stack Developer",
    description:
      "Get in touch with Jaya Surya M for Full Stack, Next.js, and Node.js opportunities.",
    url: `${siteUrl}/contact`,
    siteName: "Jaya Surya M Portfolio",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Jaya Surya M",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Jaya Surya M - Full Stack Developer",
    description:
      "Get in touch with Jaya Surya M for Full Stack, Next.js, and Node.js opportunities.",
    images: ["/logo.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
