import { Text,Box, Button } from '@chakra-ui/react'
import styles from "../../Styles/Projectcontainer.module.css"
import {BiSelectMultiple} from "react-icons/bi"
import {RiArrowDownSLine} from "react-icons/ri"
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import ManageButton from './ManageButton';
import ModifyProject from './modifyProject';

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
            <Text display={"flex"} alignItems="center" gap="5px" fontWeight={"600"} color="grey" fontSize="xs">TODAY  <Text color={"black"} fontSize="xs" fontWeight="600">{TimeString(user.end_duration)}</Text></Text>
            <Text display={"flex"} alignItems="center" gap="5px" fontWeight={"600"} color="grey" fontSize="xs">WEEK TOTAL <Text color={"black"} fontSize="xs" fontWeight="600">{TimeString(user.end_duration)}</Text></Text>
            <Button gap="2px" bg="none" _hover={{bg:"rgb(241,220,201)"}} _active="none"><Text fontWeight={"600"} color="grey" fontSize="xs">VIEWS</Text><RiArrowDownSLine/></Button>
        </Box>
      </Box>
      <Box>
        <Box>
          <Box>
            <Text fontWeight={700} fontSize="xs">TODAY</Text>
          </Box>
          <Box>
          <Text fontWeight={700} fontSize="sm">{TimeString(user.end_duration)}</Text>
          <Button><BiSelectMultiple/></Button>
          </Box>
        </Box>
        <Box>
          <Box>
            <ManageButton/>
          </Box>
          <Box>
            <Box>
              <Text fontSize="sm" color={"rgb(126,110,134)"}>{user.start_time} {user.start_time>"12"? "PM":"AM"}{" "}- {" "}{user.end_time}  {user.end_time>"12"? "PM":"AM"}</Text>
            </Box>
            <Box>
              <Text fontSize="sm" color={"rgb(126,110,134)"}>{TimeString(user.end_duration)}</Text>
              <ModifyProject/>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ProjectContainer;
