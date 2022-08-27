import { Text,Box, Button } from '@chakra-ui/react'
import styles from "../../Styles/Projectcontainer.module.css"
import {BiSelectMultiple} from "react-icons/bi"
import {RiArrowDownSLine} from "react-icons/ri"
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
const formateZero = (time) => {
  return time < 10 ? `0` + time : time;
};

const TimeString = (time) => {
  // let mili = time % 1000;
  const seconds = time % 60;
  const minute = Math.floor(time / 60)  % 60;
  const hour=Math.floor(time/(60*60))%13
  return `${formateZero(hour)}:${formateZero(minute)}:${formateZero(seconds)}`;
};
const ProjectContainer = () => {
  const {user}=useContext(AppContext)
  return (
    <Box className={styles.pContainer}>
      <Box>  
        <Box>
            <Text fontWeight={"600"} fontSize="xs">THIS WEEK</Text>
        </Box>
        <Box>
            <Text fontWeight={"600"} color="grey" fontSize="xs">TODAY  {TimeString(user.end_duration)}</Text>
            <Text fontWeight={"600"} color="grey" fontSize="xs">WEEK TOTAL {TimeString(user.end_duration)}</Text>
            <Button gap="2px" bg="none" _hover={{bg:"rgb(241,220,201)"}} _active="none"><Text fontWeight={"600"} color="grey" fontSize="xs">VIEWS</Text><RiArrowDownSLine/></Button>
        </Box>
      </Box>
      <Box>
        <Box>
          <Box>
            <Text fontWeight={700} fontSize="xs">TODAY</Text>
          </Box>
          <Box>
          <Text fontWeight={700} fontSize="xs">{TimeString(user.end_duration)}</Text>
          <Button><BiSelectMultiple/></Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ProjectContainer;
