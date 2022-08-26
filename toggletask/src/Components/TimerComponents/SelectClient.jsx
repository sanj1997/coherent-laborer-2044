import { Menu, MenuButton,MenuList,MenuItem,Button,Text,Box, Input,InputGroup,InputLeftElement} from "@chakra-ui/react";
import {  useState } from "react";
import {IoIosArrowDown,IoMdSearch} from "react-icons/io"
import {AiOutlinePlus} from "react-icons/ai"
import {  getAddClient,getClients, searchClient } from "../../Context/api";
const SelectClient = ({handleAddProject}) => {
  const [clients,setClients]=useState([])
  const [selectClient,setSelectClient]=useState("No client")
  const [addNewClient,setAddClient]=useState("")
  const handleClients=()=>{
    getClients().then((res)=>{
      setClients(res.data)
    }).catch((res)=>{
      console.log(res)
    })
  }
  const handleSelectClient=(title)=>{
    setSelectClient(title)
    handleAddProject(title)
  }
  const searchClients=(text)=>{
    console.log(text)
    setAddClient(text)
    searchClient(text).then((res)=>{
      setClients(res.data)
    }).catch((res)=>{
      console.log(res)
    })
  }
  const handleAddClient=()=>{
      getAddClient(addNewClient).then((res)=>{
        console.log(res)
        handleClients()
      }).catch((res)=>{
        console.log(res)
      })
  }
  return (
    <>
      <Menu>
        <label><Text marginBottom={"3px"} marginTop="10px" fontSize="xs" fontWeight={"600"}>Client</Text>
        <MenuButton onClick={handleClients} size="sm" bg="none" _hover={"none"} _active={{bg:"rgb(255,243,250)"}} border={"1px solid grey"} padding={"10px"} as={Button} width="100%" rightIcon={<IoIosArrowDown />}>
          <Text fontSize={"sm"} textAlign="left">{selectClient}</Text>
        </MenuButton></label>
        <MenuList width={"150%"}>
          <Box borderBottom={"1px solid rgb(229,229,229)"}>
           <InputGroup size={"sm"} width={"90%"} marginX={"5%"}>
             <InputLeftElement
              pointerEvents='none'
                   children={<IoMdSearch color='grey' />}/>
              <Input onInput={(e)=>{
                searchClients(e.target.value)
              }}  placeholder="Find client..." type='text'  />
            </InputGroup>
            <Box marginTop={"10px"} marginX="5%" width={"90%"}>
            <MenuItem onClick={()=>handleSelectClient("No Client")} borderRadius={"10px"}><Text fontSize={"sm"}>No client</Text></MenuItem>
            {clients?.map((el)=>(<MenuItem onClick={()=>handleSelectClient(el.title)} borderRadius={"10px"}><Text   fontSize={"sm"}>{el.title}</Text></MenuItem>))}
            </Box>
         </Box> 
         <Button onClick={handleAddClient} bg="none" _active={"none"} _hover="none" size={"sm"} fontSize={"xs"} gap="5px" width={"100%"}><AiOutlinePlus color="rgb(221,111,209)"/><Text>Add Client</Text></Button>
        </MenuList>
      </Menu>
    </>
  );
};
export default SelectClient;
