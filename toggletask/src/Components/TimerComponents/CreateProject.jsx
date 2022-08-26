import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,useDisclosure, Text,Box, Input
  } from '@chakra-ui/react'
  import {AiOutlinePlus} from "react-icons/ai"
import SelectClient from './SelectClient'
const CreateProject=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
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
           <label><Text marginBottom={"3px"} fontSize="xs" fontWeight={"600"}>Name</Text><Input size={"sm"} borderRadius={"10px"} width={"100%"} placeholder='Project Name'/></label>
           <SelectClient/>
           </Box>
          </ModalBody>
          <ModalFooter>
            <Button width={"100%"} color={"white"} bg="rgb(221,111,209)" _hover={{bg:"rgb(217,129,208)"}} onClick={onClose}>
              Create project
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default CreateProject