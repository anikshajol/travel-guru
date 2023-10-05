import {  createContext } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const name = {
        me: ' hello'
    }

    return (
        <AuthContext.Provider value={name} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;