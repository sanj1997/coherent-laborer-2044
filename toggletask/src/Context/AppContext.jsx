import React, { useState } from "react"
export const AppContext=React.createContext()
const AppConetxtProvider=({children})=>{
    const [isAuth,setAuth]=useState(true)
    const [email,setEmail]=useState(null)
    const [name,setName]=useState(null)
    const [duration,setDuration]=useState(0)
    const [showButton,setShowButton]=useState(true)
    const [user,setUser]=useState({client:"",project:"",user:""})
    const handleLogin=(email,name)=>{
        setAuth(true)
        setEmail(email)
        setName(name)
    }
    const handleLogout=()=>{
       setAuth(false)
       setEmail(null)
       setName(null)
    }
    return(
        <AppContext.Provider value={{user,setUser,handleLogin,handleLogout,setName,name,email,isAuth,duration,setDuration,showButton,setShowButton}}>{children}</AppContext.Provider>
    )
}
export default AppConetxtProvider