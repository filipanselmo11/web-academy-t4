"use client";

import { AuthContext } from "@/app/state/AuthProvider/AuthProvider";
import Link from "next/link";
import { useContext } from "react";

export default function Navbar() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext deve ser usado dentro de um AuthProvider");
  }

  const { userEmail, logout } = authContext;

  return (
    <nav className="navbar navbar-expand-md bg-light border-bottom border-body sticky-top">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Loja do Fílip
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggle-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/favoritos">
                Lista de Favoritos
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {userEmail ? (
              <>
                <span className="me-3">Bem-vindo, {userEmail}</span>
                <button className="btn btn-outline-danger" onClick={logout}>
                  Sair
                </button>
              </>
            ) : (
              <Link className="btn btn-outline-primary" href="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
