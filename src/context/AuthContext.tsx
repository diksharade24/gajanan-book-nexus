import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types/book';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'customer' | 'seller') => Promise<boolean>;
  register: (name: string, email: string, password: string, role: 'customer' | 'seller') => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string, role: 'customer' | 'seller'): Promise<boolean> => {
    // Mock login - in real app, this would call an API
    const mockUser: User = {
      id: Math.random().toString(36).substring(7),
      name: email.split('@')[0],
      email,
      role,
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return true;
  };

  const register = async (name: string, email: string, password: string, role: 'customer' | 'seller'): Promise<boolean> => {
    const mockUser: User = {
      id: Math.random().toString(36).substring(7),
      name,
      email,
      role,
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
