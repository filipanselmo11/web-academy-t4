import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import BootstrapClient from "./components/BootstrapClient/BootstrapClient";

export const metadata: Metadata = {
  title: "Loja do Fílip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar titulo="Loja do Fílip"></Navbar>
        {children}
        <BootstrapClient></BootstrapClient>
      </body>
    </html>
  );
}
