import {Box, Highlight,Text,Button} from "@chakra-ui/react"
import styles from "../Styles/sideNav.module.css"
import {AiFillBell,AiFillClockCircle,AiOutlineTeam,AiFillTags,AiFillSetting,AiFillCheckCircle} from "react-icons/ai"
import {TbReportAnalytics} from "react-icons/tb"
import {IoIosFolder,IoMdContact,IoIosHelpCircleOutline} from "react-icons/io"
import {RiFundsBoxFill,RiInboxArchiveFill} from "react-icons/ri"
import {GiPlug} from "react-icons/gi" 
import {BsFillCloudDownloadFill,BsArrowUpRight} from "react-icons/bs"
import {FaMobileAlt,FaBuilding,FaSuitcase} from "react-icons/fa"
import {BiDesktop} from "react-icons/bi"
import {IoIosArrowDown} from "react-icons/io"
import { useContext, useState } from "react"
import { AppContext } from "../Context/AppContext"
import MenuComp from "./menuComp"

const SideNav=()=>{
    const {email,setName} =useContext(AppContext)
    let  str=""+email;
    let name=""
    for(let i=0;i<8;i++)
    {
        if(str[i]===".")
        {
            continue
        }
        name+=str[i]
    }
    setName(name)
    return(
        <Box className={styles.sideNav}>
         <Box>
            <Text fontSize="2xl" color={"rgb(221,111,209)"}><Highlight query="toggl" styles={{fontWeight:"700",color:"rgb(221,111,209)"}}>toggl track</Highlight></Text>
            <AiFillBell color="rgb(252,229,216)"/>
         </Box>
         <Box>
           <Box>
           <Text fontSize={"xs"} fontWeight="700" color="rgb(87,66,96)">TRACK</Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><AiFillClockCircle/><Text fontSize={"sm"}>Timer</Text></Text>
           </Box>
           <Box>
           <Text fontSize={"xs"} fontWeight="700" color="rgb(87,66,96)">ANALYZE</Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><TbReportAnalytics/><Text fontSize={"sm"}>Reports</Text></Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><RiFundsBoxFill/><Text fontSize={"sm"}>Insights</Text></Text>
           </Box>
           <Box>
           <Text fontSize={"xs"} fontWeight="700" color="rgb(87,66,96)">MANAGE</Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><IoIosFolder/><Text fontSize={"sm"}>Projects</Text></Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><IoMdContact/><Text fontSize={"sm"}>Clients</Text></Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><AiOutlineTeam/><Text fontSize={"sm"}>Team</Text></Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><AiFillTags/><Text fontSize={"sm"}>Tags</Text></Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><IoIosHelpCircleOutline/><Text fontSize={"sm"}>Help</Text></Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><RiInboxArchiveFill/><Text fontSize={"sm"}>Subscription</Text></Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><GiPlug/><Text fontSize={"sm"}>Integrations</Text></Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><BsFillCloudDownloadFill/><Text fontSize={"sm"}>import/Export</Text></Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><FaMobileAlt/><Text fontSize={"sm"}>Mobile App</Text></Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><BiDesktop/><Text fontSize={"sm"}>Desktop App</Text></Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><BsArrowUpRight/><Text fontSize={"sm"}>Blog</Text></Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><BsArrowUpRight/><Text fontSize={"sm"}>Jobs</Text></Text>
           </Box>
           <Box>
           <Text fontSize={"xs"} fontWeight="700" color="rgb(87,66,96)">ADMIN</Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><FaBuilding/><Text fontSize={"sm"}>Organization</Text></Text>
           <Text display={"flex"} alignItems="center" width={"70%"} height={"24px"} marginTop={"10px"} gap={"10px"} color={"rgb(252,229,216)"} _active={"none"} bg="none" _hover={{bg:"rgb(87,66,96)",cursor:"pointer"}}><AiFillSetting/><Text fontSize={"sm"}>Settings</Text></Text>
           </Box>
         </Box>
         <Box>
            <Box>
                <Text fontSize="xm" color={"rgb(252,229,216)"}>Trial: 29 days left</Text>
                <Text _hover={{cursor:"pointer"}} textDecoration={"underline"} textUnderlineOffset="2px" fontSize="xs" color={"rgb(252,229,216)"}>Upgrade today</Text>
            </Box>
            <Box>
                <Text gap={"4px"} display={"flex"} alignItems="center" fontSize="xs" color={"rgb(252,229,216)"}><AiFillCheckCircle/>Resume onboarding</Text>
            </Box>
         </Box>
         <Box>
            <Text fontSize={"xs"} fontWeight="700" color="rgb(87,66,96)">WORKSPACE</Text>
            <Box color={"rgb(252,229,216)"} fontSize="xs">
                <FaSuitcase/><Text>{name}'s Wo...</Text><IoIosArrowDown/>
            </Box>
         </Box>
         <Box>
            {/* <Text color={"rgb(252,229,216)"} fontSize="xs">{name}</Text> */}
            {/* <Text color={"rgb(252,229,216)"} fontSize="xs">{email}</Text> */}
             <MenuComp name={name} email={email}/>
         </Box>
        </Box>
    )
}
export default SideNav