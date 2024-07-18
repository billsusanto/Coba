import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ClientProvider from "../components/ClientProvider";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Coba",
  description: "Collaborate through Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}