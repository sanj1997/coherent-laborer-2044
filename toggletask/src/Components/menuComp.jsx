import {Menu,MenuButton,MenuList,MenuItem, Button,Text,Box} from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
const MenuComp=({name,email})=>{
    const {handleLogout}=useContext(AppContext)
  return(
    <Menu placement="right">
    <MenuButton _active="none" bg="none" textAlign={"left"} _hover={{bg:"rgb(65,42,76)"}} as={Button} >
    <Text color={"rgb(252,229,216)"} fontSize="xs">{name}</Text>
    <Text color={"rgb(252,229,216)"} fontSize="xs">{email}</Text>
    </MenuButton>
    <MenuList>
    <MenuItem>
     <Box>
     <Text color={"black"} fontSize="sm">{name}</Text>
     <Text color={"grey"} fontSize="xs">{email}</Text>
     </Box>
    </MenuItem>
    <MenuItem>Profile Settings</MenuItem>
    <MenuItem onClick={handleLogout}>Log Out</MenuItem>
    </MenuList>
    </Menu>
  )
}
export default MenuComp