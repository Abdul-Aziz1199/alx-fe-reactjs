import React,{ createContext } from "react";


//creat context with  default value
const UserContext = createContext(null);

export const UserProvider = ({ children, value}) =>{
    return 
    <UserContext.Provider  value={value}>{children}

    </UserContext.Provider>
};
export default UserContext;
