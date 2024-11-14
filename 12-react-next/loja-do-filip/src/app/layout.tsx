import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import BootstrapClient from "./components/BootstrapClient/BootstrapClient";
import { ReactQueryClientProvider } from "./components/ReactQueryClient/ReactQueryClient";

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
        <ReactQueryClientProvider>
          <Navbar titulo="Loja do Fílip"></Navbar>
          {children}
          <BootstrapClient></BootstrapClient>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
