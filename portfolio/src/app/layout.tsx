import type { Metadata } from "next";
import { Geist, Geist_Mono, Poetsen_One, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Footer from "./components/Footer";
import { ActiveSectionProvider } from './context/ActiveSectionContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poetsenOne = Poetsen_One({
  variable: "--font-poetsen-one",
  weight: "400",
  subsets: ["latin"],
  display: 'swap',
});


const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400"], 
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Catsenni",
  description: "Catsennis portfolio page",
  icons: {
    icon: "./1.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poetsenOne.variable} ${roboto.variable} antialiased relative h-full bg-gray-900`}
      >


        <div className="relative z-10 flex flex-col min-h-full ">
          <ActiveSectionProvider >
              <ParticlesBackground id={undefined} />
              <Navbar />
              <main className="flex-grow roboto-one-regular text-white">{children}</main>
              <Footer />
          </ActiveSectionProvider>
        </div>
      </body>
    </html>
  );
}

