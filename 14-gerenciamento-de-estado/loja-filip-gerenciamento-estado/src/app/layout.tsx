import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import BootstrapClient from "./components/BootstrapClient";
import { FavoritosProvider } from "./state/FavoritosProvider/FavoritosProvider";

export const metadata: Metadata = {
  title: "Loja do Fílip Gerenciamento de Estado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <FavoritosProvider>
          <Navbar />
          {children}
          <BootstrapClient />
        </FavoritosProvider>
      </body>
    </html>
  );
}
