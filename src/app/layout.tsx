import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthSessionProvider } from "./provider";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock Verse",
  description: "Next Generation Investment Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthSessionProvider>
          <NextTopLoader />
          {children}
        </AuthSessionProvider>
      </body>
    </html>
  );
}
