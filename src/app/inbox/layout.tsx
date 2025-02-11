"use client";

import ClientProvider from "@/src/components/ClientProvider";
import Sidebar from "@/src/components/Sidebar";
import { Toaster } from "sonner";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isVisible, setIsVisible] = React.useState(true);
  const toggleSidebar = () => setIsVisible(!isVisible);

  return (
    <html lang="en">
      <body>
        <Toaster position="top-center" />
        <ClientProvider>
          <div className="flex w-screen min-h-screen">
            <Sidebar isVisible={isVisible} toggleSidebar={toggleSidebar} />
            {children}
          </div>
        </ClientProvider>
      </body>
    </html>
  );
}
