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
    "Cafo é a plataforma completa para cafeterias — do PDV ao CRM, com IA que monitora seu negócio em tempo real. Conheça seus clientes, aumente o faturamento e tome decisões com dados. Comece grátis.",
  keywords: [
    "plataforma para cafeteria",
    "gestão de cafeteria",
    "PDV para café",
    "CRM para cafeteria",
    "sistema para cafeteria",
    "IA para negócios",
    "fidelização de clientes",
    "gestão de café",
  ],
  authors: [{ name: "Cafo", url: "https://cafo.com.br" }],
  creator: "Cafo",
  metadataBase: new URL("https://cafo.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://cafo.com.br",
    siteName: "Cafo",
    title: "Cafo — A plataforma para gestão de cafeterias",
    description:
      "Do PDV ao CRM, com IA que monitora seu negócio em tempo real. Conheça seus clientes, aumente o faturamento e tome decisões com dados.",
    images: [
      {
        url: "/thumbnail-site.png",
        width: 1200,
        height: 630,
        alt: "Cafo — Plataforma para gestão de cafeterias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafo — A plataforma para gestão de cafeterias",
    description:
      "Do PDV ao CRM, com IA que monitora seu negócio em tempo real. Conheça seus clientes, aumente o faturamento e tome decisões com dados.",
    images: ["/thumbnail-site.png"],
  },
  icons: {
    icon: [
      { url: "/fav-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/fav-icon.svg",
    apple: "/fav-icon.svg",
  },
  robots: {
    index: true,
    follow: true,
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
