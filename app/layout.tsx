import type { Metadata } from "next";
import { Dancing_Script, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Felices 6 Meses, Mi Amor 💕",
  description: "Un detalle especial por nuestros 6 meses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dancingScript.variable} ${playfairDisplay.variable} ${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen bg-romantic-cream text-romantic-burgundy font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
