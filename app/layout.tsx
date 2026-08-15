import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beshoy Eissa Azer | Frontend Developer",
  description:
    "Beshoy Eissa Azer - Frontend Developer specialized in React, Next.js and modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}