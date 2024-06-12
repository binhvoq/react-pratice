import React, { createContext, useState } from 'react';

// Create the MyContext object using createContext
export const MyContext = createContext();

// Create the MyContextProvider component
export const MyContextProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState('Initial value');

  const updateContextValue = () => {
    setContextValue('Updated value');
  };

  return (
    <MyContext.Provider value={{ contextValue, updateContextValue }}>
      {children}
    </MyContext.Provider>
  );
};