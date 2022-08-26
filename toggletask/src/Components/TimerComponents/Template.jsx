import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,Text,Button
  } from '@chakra-ui/react'
  import {IoIosArrowDown} from "react-icons/io"
const Template = () => {
  return (
    <>
      <Menu>
      <label><Text marginBottom={"3px"} marginTop="10px" fontSize="xs" fontWeight={"600"}>Template</Text>
        <MenuButton size="sm" bg="none" _hover={"none"} _active={{bg:"rgb(255,243,250)"}} border={"1px solid grey"} padding={"10px"} as={Button} width="100%" rightIcon={<IoIosArrowDown />}>
          <Text fontSize={"sm"} textAlign="left">No Template</Text>
        </MenuButton></label>
        <MenuList  width={"150%"}>
          <MenuItem width={"90%"} marginX="5%"><Text fontWeight={"600"}  fontSize={"xs"}>...Developing</Text></MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
export default Template
