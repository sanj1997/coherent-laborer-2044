import { Highlight, Text, Box } from "@chakra-ui/react";
import {AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsGithub,BsTwitter,BsFacebook,BsYoutube } from "react-icons/bs";
import styles from "../Styles/home.module.css";
const hover = () => {
  return {
    cursor: "pointer",
    color: "rgb(229,124,216)",
  };
};
const hoverProp = hover();
const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Box>
        <Text fontSize="3xl" color={"rgb(229,124,216)"}>
          <Highlight
            query="toggl"
            styles={{ fontWeight: "800", color: "rgb(229,124,216)" }}
          >
            toggl track
          </Highlight>
        </Text>
        <Box>
          <Box>
            <Text fontSize="md" fontWeight="600" color="rgb(169,145,152)">
              TOGGL GLOBAL
            </Text>
            <Box>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Blog
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Our Mission
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Working at Toggl
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Legal Terms
              </Text>
            </Box>
          </Box>
          <Box>
            <Text fontSize="md" fontWeight="600" color="rgb(169,145,152)">
              PRODUCT
            </Text>
            <Box>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Features
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Pricing
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Integrations
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Case Studies
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                API
              </Text>
            </Box>
          </Box>
          <Box>
            <Text fontSize="md" fontWeight="600" color="rgb(169,145,152)">
              USE CASES
            </Text>
            <Box>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Billing and Invoicing
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Employee Time Tracking
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Project Budgeting
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Reporting
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Payroll
              </Text>
            </Box>
          </Box>
          <Box>
            <Text fontSize="md" fontWeight="600" color="rgb(169,145,152)">
              DOWNLOAD
            </Text>
            <Box>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Mobile Apps
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Desktop Apps
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Browser Extensions
              </Text>
            </Box>
          </Box>
          <Box>
            <Text fontSize="md" fontWeight="600" color="rgb(169,145,152)">
              HELP
            </Text>
            <Box>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Support & Knowledge
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Base
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Request A Demo
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Contact Us
              </Text>
            </Box>
          </Box>
          <Box>
            <Text fontSize="md" fontWeight="600" color="rgb(169,145,152)">
              RESOURCES
            </Text>
            <Box>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Time Management Hub
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Work From Home Hub
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Buisness Resources
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Productivity Resources
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Timesheet Templates
              </Text>
              <Text fontSize="sm" color={"rgb(252,229,216)"} _hover={hoverProp}>
                Media Kit
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.socialAccounts}>
          <BsTwitter />
          <BsFacebook />
          <AiFillInstagram />
          <BsYoutube />
          <BsLinkedin />
          <BsGithub />
        </Box>
    </Box>
  );
};
export default Footer;
