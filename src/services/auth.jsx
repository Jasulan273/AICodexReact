import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser } from './api';
import * as jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwt_decode.jwtDecode(token);
        setUser({ email: decoded.sub });
      } catch (error) {
        console.error('Token decode error:', error);
        logout();
      }
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await loginUser(email, password);
      setToken(response.access_token);
      setUser({ email });
      localStorage.setItem('token', response.access_token);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  const isAuthenticated = () => {
    return token !== null;
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}