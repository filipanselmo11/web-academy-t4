"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import BootstrapClient from "./components/BootstrapClient";
import { FavoritosProvider } from "./state/FavoritosProvider/FavoritosProvider";
import { AuthProvider } from "./state/AuthProvider/AuthProvider";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const [queryClient] = useState(() => new QueryClient());

  const isLoginCadastro = pathname === "/login" || pathname === "/cadastro";

  return (
    <html lang="pt-br">
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <FavoritosProvider>
              {/* <Navbar /> */}
              {!isLoginCadastro && <Navbar />}
              {children}
              <BootstrapClient />
            </FavoritosProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
