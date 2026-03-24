import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ParticlesBackground from "@/components/ParticlesBackground";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mohit Sai | Portfolio",
  description: "J Mohit Sai's personal developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased relative`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CustomCursor />
          <ParticlesBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
