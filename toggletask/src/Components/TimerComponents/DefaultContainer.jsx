import {Box, Image, Text,Button} from "@chakra-ui/react"
import styles from "../../Styles/defaultContainer.module.css"
import {BsApple} from "react-icons/bs"
import {DiAndroid,DiApple,DiChrome} from "react-icons/di"
import {FiMonitor} from "react-icons/fi"
import {GiPlug} from "react-icons/gi"
const DefaultContainer=()=>{
    return(
        <Box className={styles.default}>
            <Box>
               <Box>
                 <Image src="https://public-assets.toggl.com/b/static/illo-desktop-mobile-cf42e1f520c9e57b534affd23bcc4340.png"/>
               </Box>
               <Box>
                 <Text fontSize={"xl"} fontWeight="700">Your day, tracked!!</Text>
                 <Text fontWeight={"500"} fontSize="sm" color={"grey"}>You can't turn back time, but you can track it.</Text>
                 <Text fontWeight={"500"} fontSize="sm" color={"grey"}>Track time to make most of it.</Text>
               </Box>
               <Box>
                  <DiApple/>
                  <DiAndroid/>
                  <DiChrome/>
                  <FiMonitor/>
                  <GiPlug/>
               </Box>
               <Box>
                   <Button size={"sm"} borderRadius="22px" _active={"none"} _hover="none" bg={"rgb(209,100,197)"}><Text fontSize={"xs"} color={"white"}>Start tracking!</Text></Button>
               </Box>
               <Box>
                <Text fontSize={"sm"} textDecoration={"underline"}>Check shortcuts</Text>
               </Box>
            </Box>
        </Box>
    )
}
export default DefaultContainer