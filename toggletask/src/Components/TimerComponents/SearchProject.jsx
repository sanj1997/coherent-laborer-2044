import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
const SearchProject = () => {
    // const [state,setState]=useState(false)
    const handleSearch=(state)=>{
    //    if(state)
    //    {
        //  setState(false)
    //    }
    //    else
    //    {
        //  setState(true)
    //    }
    //   state.isOpen=true
      console.log(state)
    }
  return (
    <Menu>
      {({isOpen}) => (
        <>
          <Input on fontWeight={"600"} fontSize="xl" focusBorderColor = "white" outline={"none"} border={"none"} color={"black"} placeholder="What are you working on?"/>
          <MenuList>
            <MenuItem>Download</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
export default SearchProject;
