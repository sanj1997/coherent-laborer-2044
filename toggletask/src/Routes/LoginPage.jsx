import { Image,Box,Text,Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Footer from "../Components/Footer"
import FooterBanner from "../Components/FooterBanner"
import LoginForm from "../Components/LoginForm"
import Navbar from "../Components/Navbar"
import styles from "../Styles/login.module.css"
const LoginPage=()=>{
    return(
        <Box className={styles.login}>
        <Navbar/>
        <Box>
            <Image width={"100%"} src="https://public-assets.toggl.com/b/static/a848ad9070fcf959a459fa1e878d2abb/4dbee/hero-laptops.avif"/>
            <Box>
            <Text color={"rgb(255,243,237)"} fontSize="6xl" fontWeight={"600"}>Log in to your account</Text>
            <Text color={"rgb(255,243,237)"} fontSize="lg">Let's get tracking!</Text>
            </Box>
        </Box>
        <Box>
            <LoginForm/>
            <Box className={styles.signUpBox}>
                <Text width={"100%"} textAlign="center" fontSize="lg" color={"rgb(252,229,216)"}>Don't have an account?</Text>
                <Link to="/"><Button width="100%" margin={"auto"} borderRadius={"22px"} _active={"none"} color="white" bg="rgb(229,124,216)" _hover={{bg:"rgb(65,42,76)"}}>Sign up for free</Button></Link>
            </Box>
        </Box>
        <Footer/>
        <FooterBanner/>
        </Box>
    )
}
export default LoginPage