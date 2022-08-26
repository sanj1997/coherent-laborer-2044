import styles from "../Styles/loader.module.css";
import { Box, Text, Highlight,Spinner } from "@chakra-ui/react";
const LoaderPage = () => {
  return (
    <Box className={styles.loader}>
      <Box>
        <Text fontSize="5xl" color={"rgb(229,124,216)"}>
          <Highlight
            query="toggl"
            styles={{ fontWeight: "800", color: "rgb(229,124,216)" }}
          >
            toggl track
          </Highlight>
        </Text>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="rgb(229,124,216)"
          size="xl"
        />
        </Box>
    </Box>
  );
};
export default LoaderPage;
