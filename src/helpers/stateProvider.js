import React, {createContext, useState} from 'react';

export const GlobalStateContext = createContext(null);

export const StateProvider = ({ children }) => {
   const [state, setState] = useState(new Map());

   return (
         <GlobalStateContext.Provider value={{state, setState}}>
            {children}
         </GlobalStateContext.Provider>
   );
}