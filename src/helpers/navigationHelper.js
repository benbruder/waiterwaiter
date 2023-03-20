import React, { createContext } from 'react';

export const NavigationContext = createContext(null);

export const NavigationProvider = ({ children, navigation }) => (
      <NavigationContext.Provider value={navigation}>
         {children}
      </NavigationContext.Provider>
);