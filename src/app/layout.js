import { Urbanist, Rufina } from "next/font/google";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans", // will map to Tailwind
  display: "swap",
});

const rufina = Rufina({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "Hedge Impact Partners",
  description: "Partnering for Sustainable Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urbanist.variable} ${rufina.variable}`}>
      <body className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
