import {Box,Button, Input,Text,FormControl,FormErrorMessage } from "@chakra-ui/react"
import styles from "../Styles/login.module.css"
import {FcGoogle} from "react-icons/fc"
import {BsApple,BsFillLockFill} from "react-icons/bs"
import {IoMdArrowDropright} from "react-icons/io"
import { AppContext } from "../Context/AppContext"
import { useContext, useState } from "react"
import {useNavigate} from "react-router-dom"
import { signUp } from "../Context/api"
const LoginForm=()=>{
    const [user,setUser]=useState({email:"",password:""})
    const {email,handleLogin}=useContext(AppContext)
    const [isError,setError]=useState(false)
    const navigate=useNavigate()
    const handleUser=(e)=>{
      const {name,value}=e.target
      setError(false)
      setUser({...user,[name]:value})
    }
    const ShowRequired=()=>{
        console.log("hello")
       let  bool = user.email === ''
        setError(bool)
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
        signUp(user).then((res)=>{
            console.log(res)
            handleLogin(user.email)
            navigate("/timer")
          }).catch((res)=>{
            console.log(res)
          })
    }
    return(
        <FormControl isInvalid={isError}>
        <Box className={styles.loginForm}>
           <Box>
           <Button gap={"10px"} borderRadius={"22px"} color={"black"} _active="none" bg="white" _hover={{bg:"rgb(250,227,215)"}}><FcGoogle/>Sign up via Google</Button>
            <Button gap={"10px"} borderRadius={"22px"} color={"black"}  _active="none" bg="white" _hover={{bg:"rgb(250,227,215)"}}><BsApple/>Sign up via Apple</Button>
           </Box>
           <Box>
            <Box width={"100%"}>
            <label style={{width:"100%"}} ><Text color="rgb(244,209,176)" >Email</Text> <Input onFocus={ShowRequired} name="email" onChange={handleUser}  color={"brand.100"} backgroundColor={"rgb(44,19,56)"} _focus={{bg:"brand.100",color:"black"}} type={"email"} placeholder='Email' /></label>
            {isError ? <FormErrorMessage >Email is required.</FormErrorMessage>:null}
            </Box>
            <label style={{width:"100%"}} ><Text color="rgb(244,209,176)" >Password</Text> <Input name="password" onChange={handleUser} color={"brand.100"} backgroundColor={"rgb(44,19,56)"} _focus={{bg:"brand.100",color:"black"}} type={"password"} placeholder='Password' /></label>
            <Text marginRight={"-70%"}  width="30%" display="flex" justifyContent={"flex-end"} textDecoration="underline"  _hover={{color:"rgb(229,124,216)",cursor:"pointer"}} color={"rgb(244,209,176)"} fontSize="sm">Forgot password?</Text>
            <Button onClick={handleSubmit} width={"60%"} borderRadius={"22px"} _active={"none"} color="white" bg="rgb(229,124,216)" _hover={{bg:"rgb(65,42,76)"}}>Log in</Button>
            <Button marginTop={"20px"}  _active={"none"} bg="none" color="rgb(244,209,176)" _hover={{color:"rgb(229,124,216)"}}><BsFillLockFill/>Company login (SSO)<IoMdArrowDropright/></Button>
           </Box>
        </Box>
        </FormControl>
    )
}
export default LoginForm