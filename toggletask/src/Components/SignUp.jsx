import { Box, Stack,Input,Text, HStack, Button,FormControl,FormErrorMessage } from "@chakra-ui/react"
import { useContext, useState } from "react"
import {GrGoogle,GrApple} from "react-icons/gr"
import { signUp } from "../Context/api"
import { AppContext } from "../Context/AppContext"
import styles from "../Styles/main.module.css"
import {useNavigate} from "react-router-dom"
const Signup=()=>{
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
        <>
           <Box width="53%">
            <FormControl isInvalid={isError}>
           <form onSubmit={handleSubmit}>
           <Stack  spacing={8} >
           <Text color={"rgb(252,229,216)"} fontSize='2xl' width={"85%"}>Join 5 million users in using the world's best time tracking software</Text>
           <Box>
           <Input onFocus={ShowRequired} name="email" onChange={handleUser} width={"65%"} color={"brand.100"} backgroundColor={"rgb(44,19,56)"} _focus={{bg:"brand.100",color:"black"}} type={"email"} placeholder='Email' />
            {isError ? <FormErrorMessage >Email is required.</FormErrorMessage>:null}
           </Box>
           <Input name="password" onChange={handleUser} width={"65%"} color={"brand.100"} backgroundColor={"rgb(44,19,56)"} _focus={{bg:"brand.100",color:"black"}} type={"password"} placeholder='A strong password' />
           <Box display={"flex"} justifyContent="space-between" width={"80%"} gap="10px">
            <Input border={"none"} _hover={{bg:"rgb(86,66,96)"}} padding="5px" height={"50px"} fontWeight="600" cursor={"pointer"} borderRadius={"22px"} width={"40%"} color={"white"} bg="rgb(229,124,216)" type={"submit"} value="Sign up with email"/>
            <Box display={"flex"} justifyContent="space-evenly" gap={"20px"} alignItems={"center"}>
            <Text color={"rgb(252,229,216)"}>Or sign up with:</Text>
            <button className={styles.button}><GrGoogle/></button>
            <button className={styles.button}><GrApple/></button>
            </Box>
           </Box>
           <Text color={"rgb(252,229,216)"} fontSize='xs'>By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.</Text>
           </Stack>
           </form>
           </FormControl>
           </Box>
        </>
    )
}
export default Signup