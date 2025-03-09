import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import SideMenu from "../components/SideMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photo Album",
  description: "Made with Next.js, Tailwind CSS, Shadcn and Cloudinary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container min-w-screen md:min-w-[90vw] md:mx-auto">
            <div className="sticky top-0 z-50 bg-black">
              <Navbar />
            </div>

            <div className="flex">
              <SideMenu />
              <main className="w-full px-7">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
