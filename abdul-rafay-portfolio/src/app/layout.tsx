import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Rafay - AI Automation Expert & Website Developer",
  description: "Professional portfolio of Abdul Rafay, an AI Automation Expert & Website Developer specializing in intelligent solutions, process automation, and modern web development.",
  keywords: [
    "AI automation",
    "web development",
    "artificial intelligence",
    "process automation",
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "machine learning",
    "business automation"
  ],
  authors: [{ name: "Abdul Rafay" }],
  creator: "Abdul Rafay",
  publisher: "Abdul Rafay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://abdulrafay.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abdul Rafay - AI Automation Expert & Website Developer",
    description: "Transforming ideas into intelligent solutions through AI automation and cutting-edge web development",
    url: "https://abdulrafay.dev",
    siteName: "Abdul Rafay Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Rafay - AI Automation Expert & Website Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rafay - AI Automation Expert & Website Developer",
    description: "Transforming ideas into intelligent solutions through AI automation and cutting-edge web development",
    images: ["/og-image.jpg"],
    creator: "@abdulrafay",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <body className="font-primary antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
