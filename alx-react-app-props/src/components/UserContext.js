import React,{ createContext } from "react";


//creat context with  default value
const UserContext = createContext(null);

export const UserProvider = ({ children, value}) =>{
    return 
    <UserContext.provider  value={value}>{children}

    </UserContext.provider>
};
export default UserContext;
