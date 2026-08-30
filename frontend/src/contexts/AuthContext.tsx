import { createContext, useContext, useState, type ReactNode } from "react";

export type User = {
  name: string;
  email: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("safehaven_user");
    return stored ? JSON.parse(stored) : null;
  });

  const register = (newUser: User) => {
    localStorage.setItem("safehaven_user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = (email: string, _password: string) => {
    // Placeholder only — no real backend/password check exists yet.
    // Any password is accepted for an email that has previously registered
    // on this browser. Replace with a real API call once a backend exists.
    const stored = localStorage.getItem("safehaven_user");
    if (stored) {
      const storedUser: User = JSON.parse(stored);
      if (storedUser.email === email) {
        setUser(storedUser);
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("safehaven_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}