import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loader, setLoader] = useState(true);



    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
               setUser(currentUser)
              
         
               setLoading(false)
           })
           return () => {
               unsubscribe
           }
       }, [auth])

    const userInfo = {
  
            user ,
            loading,
           
            
    
    }
    return (
        <AuthProvider.Provider value={userInfo}></AuthProvider.Provider>
    )
};

export default AuthProvider;