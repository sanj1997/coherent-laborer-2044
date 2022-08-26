import React, { useState } from "react"
export const AppContext=React.createContext()
const AppConetxtProvider=({children})=>{
    const [isAuth,setAuth]=useState(false)
    const [email,setEmail]=useState(null)
    const handleLogin=(email)=>{
        setAuth(true)
        setEmail(email)
    }
    const handleLogout=()=>{
       setAuth(false)
       setEmail(null)
    }
    return(
        <AppContext.Provider value={{handleLogin,handleLogout,email,isAuth}}>{children}</AppContext.Provider>
    )
}
export default AppConetxtProvider