import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const geistOnest = localFont({
  src: "./fonts/Onest-Regular.ttf",
  variable: "--geist-onest",
  weight: "100 900"
})



export const metadata: Metadata = {
  title: "Corte Universitario",
  description: "Tu página para saber tu futuro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" >
      <body
        className={`${geistOnest.variable}  antialiased`}
        
      >

        
        {children}
      </body>
    </html>
  );
}
