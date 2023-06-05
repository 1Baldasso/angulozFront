import React, { createContext, useState } from 'react';

// Create the language context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');


    const tryGetToken = () => {
        const lstoken = localStorage.getItem('token');
        console.log(lstoken)
        if(lstoken){
            setToken(lstoken);
        }
        console.log(token)
    }
    const setAuth = (token) => {
        if(token){
            localStorage.setItem('token',token);
        }
        else{
            localStorage.removeItem('token');
        }
        setToken(token);
    }

  return (
    <AuthContext.Provider value={{ token, tryGetToken, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};