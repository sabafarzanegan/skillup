import "./globals.css";

import type { Metadata } from "next";

import { Vazirmatn } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/provider/theme-provider";

const vazir = Vazirmatn({
  variable: "--font-vazir-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "اسکیلاپ",
  description: "پلتفرم برای آموزش و یادگیری",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <ThemeProvider>
        <body className={`${vazir.variable}  `}>
          <main className="">{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
