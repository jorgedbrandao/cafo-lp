import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Cafo — A plataforma para gestão de cafeterias",
  description:
    "Finalmente — a tecnologia que faltava no mundo do café. Uma plataforma integrada do barista à gestão, com IA, CRM e crescimento para o negócio em café.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable}`}
        style={{
          fontFamily: "var(--font-sans)",
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
