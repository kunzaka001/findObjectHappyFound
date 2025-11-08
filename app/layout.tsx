import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin"],
  variable: '--font-noto-sans-thai',
  display: "swap",
});

export const metadata: Metadata = {
  title: "HappyFound | ของหายได้คืน",
  description: "ระบบของหายได้คืนที่จะคืนความสุขให้คุณ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansThai.className} antialiased bg-gradient-to-t from-[#1567e3] to-[#55a1ff]`}
      >
        {children}
      </body>
    </html>
  );
}
