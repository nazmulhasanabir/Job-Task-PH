import { createContext, useState } from "react";



export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loader, setLoader] = useState(true);


    const userInfo = {

    }
    return (
        <AuthProvider.Provider value={userInfo}></AuthProvider.Provider>
    )
};

export default AuthProvider;