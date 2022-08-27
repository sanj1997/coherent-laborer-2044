import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,useDisclosure, Text,Box, Input
  } from '@chakra-ui/react'
import {useContext, useState} from "react" 
import {AiOutlinePlus} from "react-icons/ai"
import { AppContext } from '../../Context/AppContext'
import { getMyTime } from '../../Context/getTime'
import SelectClient from './SelectClient'
import Template from './Template'
import Visibility from './Visibility'
const CreateProject=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {name,duration,user,setUser,setShowButton}=useContext(AppContext)
    const [project,setProject]=useState("")
  const handleAddProject=(company)=>{
      let time=getMyTime()
      // console.log(time)
      setUser({...user,client_name:company,project_name:project,name_of_user:name,start_time:time})
  }
  const handleAddUser=()=>{
    onClose()
    setShowButton(false)
    // console.log(user)
  }  
  return (
    <>
      <Button onClick={onOpen} fontSize={"sm"} _active={"none"} bg="none" _hover={{bg:"rgb(241,240,242)"}} gap={"10px"}><AiOutlinePlus  color="rgb(217,129,208)"/>Create a project</Button>
      <Modal size="sm" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><Text fontSize="sm">Create new project</Text></ModalHeader>
          <ModalCloseButton color={"grey"} fontSize="10px"/>
          <ModalBody>
           <Box>
           <label><Text marginBottom={"3px"} fontSize="xs" fontWeight={"600"}>Name</Text><Input onChange={(e)=>setProject(e.target.value)} size={"sm"} borderRadius={"10px"} width={"100%"} placeholder='Project Name'/></label>
           <SelectClient handleAddProject={handleAddProject}/>
           <Template/>
           <Visibility/>
           </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleAddUser} width={"100%"} color={"white"} bg="rgb(221,111,209)" _hover={{bg:"rgb(217,129,208)"}}>
              Create project
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default CreateProject