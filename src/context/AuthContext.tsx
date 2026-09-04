import React, { createContext, useContext, useMemo, useState } from "react";

const STORAGE_FLAG = "ak-admin";
const STORAGE_PASSWORD = "ak-admin-password";

interface AuthContextValue {
  isAuthed: boolean;
  login: (password: string) => Promise<void>;
  logout: () => void;
  adminPassword: string;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [adminPassword, setAdminPassword] = useState(
    () => sessionStorage.getItem(STORAGE_PASSWORD) || ""
  );
  const [isAuthed, setIsAuthed] = useState(
    () => sessionStorage.getItem(STORAGE_FLAG) === "1" && !!sessionStorage.getItem(STORAGE_PASSWORD)
  );

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthed,
      adminPassword,
      login: async (password: string) => {
        const response = await fetch("/api/admin/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(data.error || "Wrong password");
        }
        sessionStorage.setItem(STORAGE_FLAG, "1");
        sessionStorage.setItem(STORAGE_PASSWORD, password);
        setAdminPassword(password);
        setIsAuthed(true);
      },
      logout: () => {
        sessionStorage.removeItem(STORAGE_FLAG);
        sessionStorage.removeItem(STORAGE_PASSWORD);
        setAdminPassword("");
        setIsAuthed(false);
      },
    }),
    [adminPassword, isAuthed]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
