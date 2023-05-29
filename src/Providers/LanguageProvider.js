import React, { createContext, useState } from 'react';

// Create the language context
export const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('br');

  const changeLanguage = () => {
    if (language === 'br') {
      setLanguage('en');
    }
    else {
      setLanguage('br');
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};