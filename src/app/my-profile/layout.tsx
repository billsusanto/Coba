import ClientProvider from "@/src/components/ClientProvider";
import Sidebar from "@/src/components/Sidebar";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-center" />
        <ClientProvider>
          <div className="flex w-screen min-h-screen">
            <Sidebar />
            {children}
          </div>
        </ClientProvider>
      </body>
    </html>
  );
}
