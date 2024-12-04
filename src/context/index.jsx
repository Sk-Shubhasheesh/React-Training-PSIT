import { createContext, useState } from "react";

// Step 1 - create the context
export const GlobalContext = createContext(null);

// create the gobal state that receipe component as a children
function GlobalState({ children }){

    const [theme, setTheme] = useState('light')

    return <GlobalContext.Provider value={{theme, setTheme}}>{children}</GlobalContext.Provider>
}

export default GlobalState;