"use client";
import ClientProvider from "@/src/components/ClientProvider";
import Sidebar from "@/src/components/Sidebar";
import { Toaster } from "sonner";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <html lang="en">
      <body>
        <Toaster position="top-center" />
        <ClientProvider>
          <div className="flex max-w-screen min-h-screen">
            {/* Hamburger Menu Icon for small devices */}
            <div className="lg:hidden fixed top-0 left-0 p-4">
              <Menu
                className="text-black cursor-pointer"
                size={30}
                onClick={toggleSidebar}
              />
            </div>
            {/* Sidebar */}
            <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
            <div className="flex-1">{children}</div>
          </div>
        </ClientProvider>
      </body>
    </html>
  );
}
