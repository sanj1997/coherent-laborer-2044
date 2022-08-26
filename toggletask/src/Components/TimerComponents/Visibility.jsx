import {
    Menu,
    MenuButton,
    MenuList,
    Text,Button,Switch
  } from '@chakra-ui/react'
const Visibility = () => {
  return (
    <>
      <Menu>
      <label><Text marginBottom={"3px"} marginTop="10px" fontSize="xs" fontWeight={"600"}>Visibilty</Text>
        <MenuButton size="sm" bg="none" _hover={"none"} _active={{bg:"rgb(255,243,250)"}} border={"1px solid grey"} padding={"10px"} as={Button} width="100%" rightIcon={<Switch ringColor={"brand.1000"} size='sm' />}>
          <Text fontSize={"sm"} textAlign="left">Private</Text>
        </MenuButton></label>
        <MenuList  width={"150%"}>
        </MenuList>
      </Menu>
    </>
  );
};
export default Visibility