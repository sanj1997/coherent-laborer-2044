import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,Button, Text
} from "@chakra-ui/react";
import { useContext } from "react";
import {IoMdMore} from "react-icons/io"
import { deleteUser } from "../../Context/api";
import { AppContext } from "../../Context/AppContext";
const ModifyProject = () => {
    const {setShowProject,setShowButton,user}=useContext(AppContext)
    const handleDelete=()=>{
       deleteUser(user.id).then((res)=>{
        console.log(res)
        setShowButton(true)
        setShowProject(false)
       }).catch((res)=>{
        console.log(res)
       })
    }
  return (
    <Menu >
      <MenuButton size="xs" padding={"5px"} bg={"rgb(240,240,240)"} _active="none" _hover={"none"} as={Button}>
      <IoMdMore fontSize={"20px"}/>
      </MenuButton>
      <MenuList matchWidth="true">
        <MenuItem><Text>Set as non-billable</Text></MenuItem>
        <MenuItem><Text>Duplicate</Text></MenuItem>
        <MenuItem><Text>Split</Text></MenuItem>
        <MenuItem><Text>Go to project</Text></MenuItem>
        <MenuItem><Text>Pin as favorite</Text></MenuItem>
        <MenuItem><Text>Copy start link</Text></MenuItem>
        <MenuItem onClick={handleDelete}><Text color={"red"}>Delete</Text></MenuItem>
      </MenuList>
    </Menu>
  );
};
export default ModifyProject
