"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import BootstrapClient from "./components/BootstrapClient";
import { FavoritosProvider } from "./state/FavoritosProvider/FavoritosProvider";
import { AuthProvider } from "./state/AuthProvider/AuthProvider";
import { usePathname } from "next/navigation";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  const isLoginCadastro = pathname === "/login" || pathname === "/cadastro";

  return (
    <html lang="pt-br">
      <body>
        <AuthProvider>
          <FavoritosProvider>
            {/* <Navbar /> */}
            {!isLoginCadastro && <Navbar/>}
            {children}
            <BootstrapClient />
          </FavoritosProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
