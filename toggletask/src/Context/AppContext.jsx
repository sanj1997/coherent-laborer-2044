import React, { useState } from "react"
export const AppContext=React.createContext()
const initialState={
    name_of_user:"",
    project_name:"",
    client_name:"",
    start_duration:0,
    start_time:null,
    end_time:null,
    end_duration:null
}
const AppConetxtProvider=({children})=>{
    const [isAuth,setAuth]=useState(false)
    const [email,setEmail]=useState(null)
    const [name,setName]=useState(null)
    const [duration,setDuration]=useState(0)
    const [showButton,setShowButton]=useState(true)
    const [user,setUser]=useState(initialState)
    const [showProject,setShowProject]=useState(false)
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
        <AppContext.Provider value={{showProject,setShowProject,user,setUser,handleLogin,handleLogout,setName,name,email,isAuth,duration,setDuration,showButton,setShowButton}}>{children}</AppContext.Provider>
    )
}
export default AppConetxtProvider