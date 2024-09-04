import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of your AuthContext
type AuthContextType = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
} | null;

const AuthContext = createContext<AuthContextType>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  const login = (token: string) => {
    setToken(token);
    // you may also want to save the token in localStorage or cookies
  };

  const logout = () => {
    setToken(null);
    // also remove the token from localStorage or cookies if you store it there
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
