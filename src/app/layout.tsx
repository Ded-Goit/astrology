import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// ---- SEO METADATA ----
export const metadata: Metadata = {
  metadataBase: new URL("https://astrology-azure-zeta.vercel.app"),
  title: {
    default: "Астрологічні послуги — Професійна астрологиня",
    template: "%s | Астрологічні послуги",
  },
  description:
    "Професійні астрологічні консультації: натальна карта, сумісність, прогноз, кар'єра, стосунки. Особистий підхід та глибокий аналіз від досвідченої астрологині.",

  keywords: [
    "астрологія",
    "астрологиня",
    "гороскоп",
    "натальна карта",
    "сумісність",
    "астрологічні консультації",
    "астролог київ",
    "розбір карти",
    "астрологічний прогноз",
  ],

  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://astrology-azure-zeta.vercel.app",
    siteName: "Астрологічні послуги",
    title: "Астрологічні послуги — Професійна астрологиня",
    description:
      "Професійні астрологічні консультації: натальна карта, сумісність, прогноз, кар'єра та стосунки.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Астрологічні послуги - консультації астрологині",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Астрологічні послуги - Професійна астрологиня",
    description:
      "Персональні астрологічні консультації: натальна карта, сумісність, прогноз.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://astrology-azure-zeta.vercel.app",
  },

  authors: [{ name: "DED" }],
  creator: "DED",
  publisher: "DED",

  // Для покращення SEO та показу в пошуку
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Астрологиня",
              description:
                "Професійна астрологиня з досвідом: натальна карта, сумісність, прогноз, кар'єра, стосунки.",
              jobTitle: "Астролог",
              image: "https://astrology-azure-zeta.vercel.app/og-image.jpg",
              url: "https://astrology-azure-zeta.vercel.app",
              sameAs: ["https://www.instagram.com/", "https://t.me/"],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Астрологічні консультації",
              provider: {
                "@type": "Person",
                name: "Астрологиня",
              },
              areaServed: "Worldwide",
              availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: "https://astrology-azure-zeta.vercel.app",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Астрологічні послуги",
              url: "https://astrology-azure-zeta.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://astrology-azure-zeta.vercel.app/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
