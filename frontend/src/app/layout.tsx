import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UMAV Media | Short-Form Content Distribution",
  description:
    "UMAV Media turns long-form content into short-form media and distributes it through a network built for scale.",
  metadataBase: new URL("https://umavmedia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UMAV Media | Short-Form Content Distribution",
    description:
      "UMAV Media turns long-form content into short-form media and distributes it through a network built for scale.",
    url: "https://umavmedia.com",
    siteName: "UMAV Media",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans bg-[#050505] text-[#ededed] antialiased min-h-screen flex flex-col selection:bg-[#00FF66] selection:text-[#050505] relative`}
      >
        <div className="fixed inset-0 z-0 noise-bg mix-blend-overlay"></div>
        <div className="relative z-10 flex flex-col flex-1">{children}</div>
      </body>
    </html>
  );
}
