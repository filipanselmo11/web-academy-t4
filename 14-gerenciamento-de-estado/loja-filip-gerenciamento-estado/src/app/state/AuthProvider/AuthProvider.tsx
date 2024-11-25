"use client";

import { useRouter } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react";

interface IAuthContext {
  userEmail: string | null;
  login: (email: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      setUserEmail(savedEmail);
    }
  }, []);

  const login = (email: string) => {
    setUserEmail(email);
    localStorage.setItem("userEmail", email);
    router.push("/");
  };

  const logout = () => {
    setUserEmail(null);
    localStorage.removeItem("userEmail");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
