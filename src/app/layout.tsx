import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const MPLUS1 = localFont({
  src: "./fonts/MPLUS1.ttf",
  variable: "--font-m-plus-1",
  weight: "100 400 700 900",
});

export const metadata: Metadata = {
  title: "Hype Bank",
  description: "Aprovação de crédito - Hype Bank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${MPLUS1.variable} antialiased dark`}
        style={{
          marginRight: "0px !important",
          // @ts-ignore
          position: "initial !important",
        }}
      >
        {children}
      </body>
    </html>
  );
}
