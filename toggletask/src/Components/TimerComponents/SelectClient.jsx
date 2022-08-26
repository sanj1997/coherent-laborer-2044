import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,Button,Text,Box
} from "@chakra-ui/react";
import {IoIosArrowDown} from "react-icons/io"
const SelectClient = () => {
  return (
    <>
      <Menu>
        <label><Text marginBottom={"3px"} marginTop="10px" fontSize="xs" fontWeight={"600"}>Client</Text><MenuButton size="sm" bg="none" _hover={"none"} _active={{bg:"rgb(255,243,250)"}} border={"1px solid grey"} padding={"10px"} as={Button} width="100%" rightIcon={<IoIosArrowDown />}>
          <Text fontSize={"sm"} textAlign="left">No client</Text>
        </MenuButton></label>
        <MenuList width={"150%"}>
          <Box>
           
          </Box>
        </MenuList>
      </Menu>
    </>
  );
};
export default SelectClient;
