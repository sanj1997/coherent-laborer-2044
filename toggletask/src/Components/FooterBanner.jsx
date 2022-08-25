import {Box, Highlight, Text} from "@chakra-ui/react"
import styles from "../Styles/home.module.css"
const FooterBanner=()=>{
    return(
        <Box className={styles.banner}>
            <Box>
              <Box>
                <Box>
                    <Text width={"80%"}>Discover other Toggl tools:</Text>
                </Box>
                <Box>
                    <Text fontSize="3xl" color="rgb(168,118,245)"><Highlight styles={{fontWeight:"800",color:"rgb(168,118,245)"}} query="toggl">toggl plan</Highlight></Text>
                    <Text _hover={{cursor:"pointer",color:"rgb(168,118,245)"}}>Beautifully simple work planning</Text>
                </Box>
                <Box>
                    <Text fontSize="3xl" color="rgb(231,126,116)"><Highlight styles={{fontWeight:"800",color:"rgb(231,126,116)"}} query="toggl">toggl hire</Highlight></Text>
                    <Text _hover={{cursor:"pointer",color:"rgb(231,126,116)"}}>Skills-based hiring</Text>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Text>© 2022 Toggl. All rights reserved.</Text>
              </Box>
            </Box>
        </Box>
    )
}
export default FooterBanner