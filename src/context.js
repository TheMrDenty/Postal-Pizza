import React, { useContext, useState } from "react";


const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    
    
    
    
    /* NavModal */

    const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

    const openNavDropdown = () => {
        setIsNavDropdownOpen(true);
        console.log('clicked');
    }

    const closeNavDropdown = () => {
        setIsNavDropdownOpen(false);
    }

    return <AppContext.Provider value={{
        isNavDropdownOpen, openNavDropdown, closeNavDropdown,
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}