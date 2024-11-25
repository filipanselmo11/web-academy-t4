"use client";

import { mockProdutos } from "./mocks/produtos";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { useContext, useEffect } from "react";
import { AuthContext } from "./state/AuthProvider/AuthProvider";
import { useRouter } from "next/navigation";

export default function App() {

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext deve ser usado dentro de um AuthProvider");
  }

  const { userEmail } = authContext;

  const router = useRouter();
  const produtos = mockProdutos;

  useEffect(() => {
    if (!userEmail) {
      router.push("/login");
    }
  }, [userEmail, router]);

  return (
    <main>
        <div className="container p-5">
          <ListagemProdutos produtos={produtos} />
        </div>
    </main>
  );
}
