import type { Metadata, Viewport } from "next"; // Import Viewport type
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Initialize Roboto with specific weights and configuration
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

// --- FIX 1: Pindahkan viewport ke export terpisah (Viewport Best Practice) ---
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Anda bisa menambahkan 'themeColor' di sini jika perlu
};

// --- METADATA (DIOOPTIMASI UNTUK SEO & BRANDING "Salt & Light" JAKARTA) ---
export const metadata: Metadata = {
  // FIX 2: metadataBase (Best Practice untuk Open Graph/Twitter Image)
  metadataBase: new URL("https://saltandlightevent.com"), // Ganti dengan domain ASLI Anda

  // 1. Title: Kata kunci utama + Merek
  title: "Salt & Light: Event Organizer Jakarta Terbaik | EO Profesional",

  // 2. Description: Ringkasan menarik dengan brand, kata kunci, dan lokasi
  description:
    "Salt & Light adalah Event Organizer profesional di Jakarta yang terpercaya. Kami menyediakan jasa EO lengkap untuk pernikahan, korporat, konser, dan acara spesial. Dapatkan layanan terbaik sekarang!",

  // 3. Keywords: Kata kunci yang relevan
  keywords: [
    "Salt & Light",
    "Event Organizer Jakarta",
    "EO Jakarta",
    "Jasa Event Organizer Salt & Light",
    "EO Profesional",
    "Penyelenggara Acara Jakarta",
    "Wedding Organizer Jakarta",
    "Event Korporat",
  ],
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: "/favicon.co",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },

  // 4. Canonical URL: Menggunakan contoh URL yang jelas
  alternates: {
    canonical: "https://saltandlightevent.com",
  },

  // 5. Open Graph (Untuk sharing di social media)
  openGraph: {
    title: "Salt & Light: Event Organizer Jakarta Terbaik | EO Profesional",
    description:
      "Salt & Light adalah Event Organizer profesional di Jakarta yang terpercaya. Kami menyediakan jasa EO lengkap untuk pernikahan, korporat, konser, dan acara spesial.",
    url: "https://saltandlightevent.com",
    siteName: "Salt & Light Event Organizer",
    images: [
      {
        url: "/logo.webp", // Path sekarang diselesaikan relatif terhadap metadataBase
        width: 1200,
        height: 630,
        alt: "Logo Salt & Light Event Organizer Jakarta",
      },
    ],
    locale: "id_ID", // Bahasa Indonesia
    type: "website",
  },

  // 6. Twitter Card (Untuk sharing di Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "Salt & Light: Event Organizer Jakarta Terbaik | EO Profesional",
    description:
      "Salt & Light adalah Event Organizer profesional di Jakarta yang terpercaya. Kami menyediakan jasa EO lengkap untuk pernikahan, korporat, konser, dan acara spesial.",
    creator: "@salnlightid", // Ganti dengan username Twitter/X brand Anda (opsional)
  },

  // 7. Robots (Mengizinkan Google untuk mengindeks halaman ini)
  robots: "index, follow",
};

// -------------------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fix Hydration Error: Menghindari spasi atau line break antara tag <html> dan <body>
  return (
    <html lang="id">
      <body className={`${roboto.variable} antialiased bg-primary`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
