import { Button,Text } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../../Context/AppContext"
import {GoPrimitiveDot} from "react-icons/go"
const ManageButton=()=>{
    const {user}=useContext(AppContext)
    return(
        <>
        <Button _hover={"none"} bg={"rgb(213,237,205)"} size={"sm"} display={"flex"} justifyContent={"space-evenly"} alignItems="center" gap={"4px"}><GoPrimitiveDot color="rgb(47,167,10)" /><Text fontSize="sm">{user.project_name}</Text><GoPrimitiveDot fontSize="10px" color="rgb(150,145,153)"/><Text color={"rgb(150,145,153)"} fontSize="xs">{user.client_name}</Text></Button>
        </>
    )
}
export default ManageButton