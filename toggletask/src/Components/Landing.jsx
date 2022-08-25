import Navbar from "./Navbar"
import {Text,Highlight, Box, Image,Button} from "@chakra-ui/react"
import Signup from "./SignUp"
import HomeCounter from "./Home_Counter"
import styles from "../Styles/home.module.css"
import {IoMdArrowDropright,IoMdArrowRoundUp} from "react-icons/io"
import SignUpEmail from "./SignUpEmail"
import Footer from "./Footer"
import FooterBanner from "./FooterBanner"
const Landing=()=>{
    return(
        <div>
          <Navbar/>
          <Box  width="100%" margin={"auto"} backgroundColor="rgb(44,19,56)" paddingBottom={"50px"}>
            <Box width="90%" margin={"auto"}>
            <Text width={"70%"} color={"white"} fontSize='6xl'><Highlight query='better' styles={{fontStyle:"italic",color:"rgb(229,124,216)"}}>Time tracking for better work, not overwork.</Highlight></Text>
            </Box>
            <Box  display={"flex"} width="90%" margin={"auto"} marginTop="40px" justifyContent={"space-between"} alignItems="center">
                <Signup/>
                <HomeCounter/>
            </Box>
            <Box className={styles.features}>
              <Box>
                <Box><Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MCA1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ0Ljc2NjEgMzcuNDU1QzQzLjkwMDYgMzYuODExMiA0Mi42NzcyIDM2Ljk5MDkgNDIuMDMzMyAzNy44NTYzQzQxLjY3OTIgMzguMzMyMyA0MS4zMDAzIDM4Ljc5OTIgNDAuOTA3MSAzOS4yNDRDNDAuMTkyNyA0MC4wNTIxIDQwLjI2ODYgNDEuMjg2NSA0MS4wNzY3IDQyLjAwMDlDNDEuNDQ4NCA0Mi4zMjk0IDQxLjkwOTggNDIuNDkwOCA0Mi4zNjk1IDQyLjQ5MDhDNDIuOTA5OCA0Mi40OTA4IDQzLjQ0NzcgNDIuMjY3OCA0My44MzM2IDQxLjgzMTJDNDQuMjk5MyA0MS4zMDQ0IDQ0Ljc0ODEgNDAuNzUxNSA0NS4xNjc0IDQwLjE4NzdDNDUuODExMiAzOS4zMjI0IDQ1LjYzMTcgMzguMDk4OCA0NC43NjYxIDM3LjQ1NVoiIGZpbGw9IiMyQzExMzgiLz4KPHBhdGggZD0iTTQ4LjAzMjYgMjguMjk1NkM0Ni45NzkzIDI4LjA2NjIgNDUuOTM4MiAyOC43MzQ2IDQ1LjcwODggMjkuNzg4NUM0NS41ODI1IDMwLjM2ODMgNDUuNDMgMzAuOTQ5MiA0NS4yNTUxIDMxLjUxNTJDNDQuOTM2NiAzMi41NDU5IDQ1LjUxMzkgMzMuNjM5NCA0Ni41NDQ1IDMzLjk1NzlDNDYuNzM2NiAzNC4wMTcyIDQ2LjkzMDcgMzQuMDQ1NCA0Ny4xMjE4IDM0LjA0NTRDNDcuOTU1NyAzNC4wNDU0IDQ4LjcyOCAzMy41MDY5IDQ4Ljk4NzIgMzIuNjY4MkM0OS4xOTQ4IDMxLjk5NjYgNDkuMzc1OSAzMS4zMDcyIDQ5LjUyNTcgMzAuNjE5NEM0OS43NTUxIDI5LjU2NTUgNDkuMDg2NiAyOC41MjUxIDQ4LjAzMjYgMjguMjk1NloiIGZpbGw9IiMyQzExMzgiLz4KPHBhdGggZD0iTTM1LjM2NTEgNDMuNzEwNUMzNC44NDY1IDQ0IDM0LjMwOTYgNDQuMjcwNSAzMy43Njk0IDQ0LjUxNDVDMzIuNzg2MyA0NC45NTg1IDMyLjM0OTMgNDYuMTE1MyAzMi43OTMyIDQ3LjA5ODRDMzMuMTE5NCA0Ny44MjA3IDMzLjgzMDIgNDguMjQ4MSAzNC41NzQ0IDQ4LjI0ODFDMzQuODQzMSA0OC4yNDgxIDM1LjExNjIgNDguMTkyMyAzNS4zNzcxIDQ4LjA3NDZDMzYuMDE4IDQ3Ljc4NTEgMzYuNjU0NSA0Ny40NjQzIDM3LjI2OTQgNDcuMTIxMUMzOC4yMTEzIDQ2LjU5NTMgMzguNTQ4NSA0NS40MDU0IDM4LjAyMjUgNDQuNDYzNkMzNy40OTY4IDQzLjUyMTkgMzYuMzA3IDQzLjE4NDcgMzUuMzY1MSA0My43MTA1WiIgZmlsbD0iIzJDMTEzOCIvPgo8cGF0aCBkPSJNMjMuMDQ2OCA5LjY1NDNWMjQuNDcwM0wxNS44ODQ4IDMxLjYzMjJDMTUuMTIyMSAzMi4zOTUgMTUuMTIyMSAzMy42MzE2IDE1Ljg4NDggMzQuMzk0M0MxNi4yNjYyIDM0Ljc3NTggMTYuNzY1OSAzNC45NjY0IDE3LjI2NTkgMzQuOTY2NEMxNy43NjU3IDM0Ljk2NjQgMTguMjY1NiAzNC43NzU3IDE4LjY0NzEgMzQuMzk0M0wyNi4zODExIDI2LjY2MDRDMjYuNzQ3MyAyNi4yOTQxIDI2Ljk1MyAyNS43OTczIDI2Ljk1MyAyNS4yNzkzVjkuNjU0M0MyNi45NTMgOC41NzU1OSAyNi4wNzg2IDcuNzAxMTcgMjQuOTk5OSA3LjcwMTE3QzIzLjkyMTIgNy43MDExNyAyMy4wNDY4IDguNTc1NTkgMjMuMDQ2OCA5LjY1NDNaIiBmaWxsPSIjMkMxMTM4Ii8+CjxwYXRoIGQ9Ik00OC4wNDY5IDQuNDc4NTJDNDYuOTY4MiA0LjQ3ODUyIDQ2LjA5MzggNS4zNTI5MyA0Ni4wOTM4IDYuNDMxNjRWMTEuODU1MUM0MS41NDc3IDQuNzI1MzkgMzMuNjA4NSAwLjI3OTI5NyAyNSAwLjI3OTI5N0MxOC4zMjIzIDAuMjc5Mjk3IDEyLjA0NDIgMi44Nzk3OSA3LjMyMjI3IDcuNjAxNTZDMi42MDA0OSAxMi4zMjM1IDAgMTguNjAxNiAwIDI1LjI3OTNDMCAzMS45NTcgMi42MDA0OSAzOC4yMzUxIDcuMzIyMjcgNDIuOTU3QzEyLjA0NDIgNDcuNjc4OCAxOC4zMjIzIDUwLjI3OTMgMjUgNTAuMjc5M0MyNS4wMTY1IDUwLjI3OTMgMjUuMDMyNCA1MC4yNzcyIDI1LjA0ODggNTAuMjc2OUMyNS4wNjUyIDUwLjI3NzIgMjUuMDgxMiA1MC4yNzkzIDI1LjA5NzcgNTAuMjc5M0MyNS44MDE2IDUwLjI3OTMgMjYuNTEyNCA1MC4yNDk2IDI3LjIxMDYgNTAuMTkxMkMyOC4yODU1IDUwLjEwMTIgMjkuMDg0IDQ5LjE1NjggMjguOTk0IDQ4LjA4MTlDMjguOTAzOSA0Ny4wMDcgMjcuOTYwOCA0Ni4yMDgyIDI2Ljg4NDcgNDYuMjk4NkMyNi4yOTQ0IDQ2LjM0NzkgMjUuNjkzMyA0Ni4zNzMgMjUuMDk3NyA0Ni4zNzNDMjUuMDgxMiA0Ni4zNzMgMjUuMDY1MiA0Ni4zNzUxIDI1LjA0ODggNDYuMzc1NUMyNS4wMzI0IDQ2LjM3NTEgMjUuMDE2NSA0Ni4zNzMgMjUgNDYuMzczQzEzLjM2ODggNDYuMzczIDMuOTA2MjUgMzYuOTEwNCAzLjkwNjI1IDI1LjI3OTNDMy45MDYyNSAxMy42NDgxIDEzLjM2ODggNC4xODU1NSAyNSA0LjE4NTU1QzMyLjQ5NTkgNC4xODU1NSAzOS4zOTAzIDguMTgwOTYgNDMuMTU3OCAxNC41MzcxSDM3Ljc4NzRDMzYuNzA4NyAxNC41MzcxIDM1LjgzNDMgMTUuNDExNSAzNS44MzQzIDE2LjQ5MDJDMzUuODM0MyAxNy41Njg5IDM2LjcwODcgMTguNDQzNCAzNy43ODc0IDE4LjQ0MzRINDMuNzVDNDQuOTM5NSAxOC40NDM0IDQ2LjA1MjIgMTguMTA5MSA0Ni45OTk3IDE3LjUzQzQ3LjA2MDYgMTcuNDk1MiA0Ny4xMTkyIDE3LjQ1NzggNDcuMTc1MSAxNy40MTc1QzQ4Ljg3NDkgMTYuMjk5MiA1MCAxNC4zNzU3IDUwIDEyLjE5MzRWNi40MzE2NEM1MCA1LjM1MjkzIDQ5LjEyNTYgNC40Nzg1MiA0OC4wNDY5IDQuNDc4NTJaIiBmaWxsPSIjMkMxMTM4Ii8+Cjwvc3ZnPgo=" /></Box>
                <Box><Text>No credit card required. Sign up and start tracking!</Text></Box>
              </Box>
              <Box>
                <Box><Image src="https://public-assets.toggl.com/b/static/icon-rating-712209c54fe77980309de799b72d2bbf.svg" /></Box>
                <Box><Text>4.7 out of 5 stars from 3,800 user reviews.</Text></Box>
              </Box>
              <Box>
                <Box><Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA0NSA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ0LjA4NDkgOS4yNTg1NUMzNi45MzAzIDcuMjk4MTkgMjkuNzMzNyA0LjI0NTc0IDIzLjI3MyAwLjQzMTI1OUMyMi45Mjk5IDAuMjI4NjQzIDIyLjUwNCAwLjIyODY0MyAyMi4xNjA5IDAuNDMxMjU5QzE1LjUxMzkgNC4zNTUzMiA4LjcwNjE2IDcuMjQyNjQgMS4zNDg0OCA5LjI1ODU1QzAuODczMTY5IDkuMzg4NjUgMC41NDM3MDEgOS44MjA3IDAuNTQzNzAxIDEwLjMxMzZWMjEuNDkwMUMwLjU0MzcwMSAzMi45OTk0IDUuODUzMjggNDAuNjE3OCAxMC4zMDc2IDQ0Ljk4MjFDMTUuMTAzIDQ5LjY4MDkgMjAuNjg4OSA1Mi4yNzkzIDIyLjcxNyA1Mi4yNzkzQzI0Ljc0NDkgNTIuMjc5MyAzMC4zMzA4IDQ5LjY4MDkgMzUuMTI2MiA0NC45ODIxQzM5LjU4MDQgNDAuNjE3OSA0NC44ODk3IDMyLjk5OTYgNDQuODg5NyAyMS40OTAxVjEwLjMxMzVDNDQuODg5NyA5LjgyMDcgNDQuNTYwMiA5LjM4ODY1IDQ0LjA4NDkgOS4yNTg1NVpNNDIuNzAyIDIxLjQ5QzQyLjcwMiAzMi4yMzk3IDM3Ljc0OTcgMzkuMzQ4NSAzMy41OTUgNDMuNDE5M0MyOC44Nzk0IDQ4LjAzOTkgMjMuODM3NSA1MC4wOTE1IDIyLjcxNyA1MC4wOTE1QzIxLjU5NjQgNTAuMDkxNSAxNi41NTQzIDQ4LjAzOTkgMTEuODM4NSA0My40MTkzQzcuNjgzOTQgMzkuMzQ4NCAyLjczMTQ1IDMyLjIzOTcgMi43MzE0NSAyMS40OVYxMS4xNDM4QzkuNzY3NDkgOS4xNDYxMiAxNi4zMjAxIDYuMzU4MTMgMjIuNzE3MiAyLjY0MDY1QzI4Ljk1NDUgNi4yNTk1MSAzNS44MzQxIDkuMTg2MTMgNDIuNzAyIDExLjE0MzRWMjEuNDlaIiBmaWxsPSIjMkMxMzM4Ii8+CjxwYXRoIGQ9Ik0xMy4wMjE0IDExLjAyMTRDMTIuOCAxMC40NTkyIDEyLjE2NDkgMTAuMTgzMSAxMS42MDI3IDEwLjQwNDZDOS42NDg2NCAxMS4xNzQ1IDcuNjQyOTggMTEuODgzMiA1LjY0MTQ5IDEyLjUxMTFDNS4xODUzNyAxMi42NTQzIDQuODc1IDEzLjA3NjggNC44NzUgMTMuNTU0N1YxNy43Nzg4QzQuODc1IDE4LjM4MjkgNS4zNjQ4NCAxOC44NzI2IDUuOTY4ODMgMTguODcyNkM2LjU3MjgyIDE4Ljg3MjYgNy4wNjI2NSAxOC4zODI5IDcuMDYyNjUgMTcuNzc4OFYxNC4zNTQxQzguODU4MTcgMTMuNzczMiAxMC42NTE4IDEzLjEzMDYgMTIuNDA0NiAxMi40Mzk5QzEyLjk2NjggMTIuMjE4NiAxMy4yNDI5IDExLjU4MzUgMTMuMDIxNCAxMS4wMjE0WiIgZmlsbD0iIzJDMTMzOCIvPgo8cGF0aCBkPSJNMTUuMDk5IDExLjIyOTFDMTUuMjQ1OCAxMS4yMjkxIDE1LjM5NDggMTEuMTk5NiAxNS41Mzc3IDExLjEzNzJMMTUuNTU3OCAxMS4xMjg1QzE2LjExMTIgMTAuODg2IDE2LjM2MDQgMTAuMjQxNyAxNi4xMTc5IDkuNjg4NTRDMTUuODc1MSA5LjEzNTEzIDE1LjIyNzMgOC44ODQ3OCAxNC42NzQ1IDkuMTI3MUwxNC42NTY4IDkuMTM0NzJDMTQuMTAzMSA5LjM3NjU0IDEzLjg1MyAxMC4wMjAyIDE0LjA5NDkgMTAuNTczOEMxNC4yNzQzIDEwLjk4NDcgMTQuNjc3IDExLjIyOTEgMTUuMDk5IDExLjIyOTFaIiBmaWxsPSIjMkMxMzM4Ii8+CjxwYXRoIGQ9Ik0zNS43NDkzIDM1LjU1MDNDMzUuMjQzOSAzNS4yMTk5IDM0LjU2NiAzNS4zNjIgMzQuMjM1MyAzNS44Njc3QzMzLjMzMzkgMzcuMjQ3MyAzMi4yNzY0IDM4LjU2ODQgMzEuMDkxOCAzOS43OTRDMzAuMTE3NiA0MC44MDE3IDI5LjA2MiA0MS43NDA5IDI3Ljk1NDIgNDIuNTg1NEMyNy40NzM5IDQyLjk1MTcgMjcuMzgxNSA0My42MzggMjcuNzQ3NyA0NC4xMTg1QzI3Ljk2MzEgNDQuNDAwNyAyOC4yODg4IDQ0LjU0OTIgMjguNjE4MiA0NC41NDkyQzI4Ljg0OTYgNDQuNTQ5MiAyOS4wODI3IDQ0LjQ3NjIgMjkuMjgwNyA0NC4zMjUxQzMwLjQ3NTYgNDMuNDE0IDMxLjYxNDEgNDIuNDAxMSAzMi42NjQ1IDQxLjMxNDZDMzMuOTQ1MyAzOS45ODk4IDM1LjA4OTkgMzguNTU5OCAzNi4wNjY3IDM3LjA2NDNDMzYuMzk3MyAzNi41NTg1IDM2LjI1NSAzNS44ODA3IDM1Ljc0OTMgMzUuNTUwM1oiIGZpbGw9IiMyQzEzMzgiLz4KPHBhdGggZD0iTTI1LjQxNCA0NC4zMDA5TDI1LjM1MTIgNDQuMzM3OUMyNC44Mjg1IDQ0LjY0MDYgMjQuNjQ5OCA0NS4zMDk3IDI0Ljk1MjUgNDUuODMyNUMyNS4xNTUzIDQ2LjE4MjggMjUuNTIyNSA0Ni4zNzg1IDI1LjkwMDIgNDYuMzc4NUMyNi4wODYgNDYuMzc4NSAyNi4yNzQ3IDQ2LjMzMSAyNi40NDcxIDQ2LjIzMUwyNi41MTk1IDQ2LjE4ODRDMjcuMDQwOCA0NS44ODMxIDI3LjIxNTkgNDUuMjEzMSAyNi45MTA2IDQ0LjY5MThDMjYuNjA1MSA0NC4xNzA3IDI1LjkzNSA0My45OTU5IDI1LjQxNCA0NC4zMDA5WiIgZmlsbD0iIzJDMTMzOCIvPgo8cGF0aCBkPSJNMTUuMjYwOCAyNC4wNDdDMTQuNTg5MiAyMy4zNzUzIDEzLjY5NiAyMy4wMDU2IDEyLjc0NTkgMjMuMDA1NkMxMS43OTU5IDIzLjAwNTYgMTAuOTAyNiAyMy4zNzU0IDEwLjIzMDYgMjQuMDQ3QzguODQ0MDIgMjUuNDM0IDguODQ0MDIgMjcuNjkwNyAxMC4yMzA2IDI5LjA3NzVMMTYuNjg5NiAzNS41MzYzQzE3LjM2MTMgMzYuMjA3OCAxOC4yNTQ2IDM2LjU3NzYgMTkuMjA0NyAzNi41Nzc2QzIwLjE1NDggMzYuNTc3NiAyMS4wNDggMzYuMjA3OCAyMS43MTk5IDM1LjUzNjFMMzUuMjAzNCAyMi4wNTI1QzM2LjU4OTkgMjAuNjY1MiAzNi41ODk5IDE4LjQwODggMzUuMjAzMiAxNy4wMjI0QzM0LjUzMTUgMTYuMzUwNiAzMy42MzgyIDE1Ljk4MSAzMi42ODggMTUuOTgxQzMxLjczNzkgMTUuOTgxIDMwLjg0NDYgMTYuMzUwNyAzMC4xNzI4IDE3LjAyMjRMMTkuMjA0NiAyNy45OTA2TDE1LjI2MDggMjQuMDQ3Wk0zMS43MTk4IDE4LjU2OTRDMzEuOTc4MyAxOC4zMTA5IDMyLjMyMjMgMTguMTY4NiAzMi42ODgxIDE4LjE2ODZDMzMuMDU0MSAxOC4xNjg2IDMzLjM5NzggMTguMzEwOSAzMy42NTY1IDE4LjU2OTRDMzQuMTkwMiAxOS4xMDMxIDM0LjE5MDIgMTkuOTcxOCAzMy42NTYzIDIwLjUwNThMMjAuMTczIDMzLjk4OTJDMTkuOTE0NSAzNC4yNDc2IDE5LjU3MDUgMzQuMzg5OSAxOS4yMDQ3IDM0LjM4OTlDMTguODM4OSAzNC4zODk5IDE4LjQ5NDkgMzQuMjQ3NiAxOC4yMzYzIDMzLjk4OTJMMTEuNzc3NSAyNy41MzA2QzExLjI0MzYgMjYuOTk2NyAxMS4yNDM2IDI2LjEyNzkgMTEuNzc3MyAyNS41OTQyQzEyLjAzNTkgMjUuMzM1OCAxMi4zNzk5IDI1LjE5MzMgMTIuNzQ1OCAyNS4xOTMzQzEzLjExMTggMjUuMTkzMyAxMy40NTU2IDI1LjMzNTYgMTMuNzE0IDI1LjU5NEwxOC40MzExIDMwLjMxMTJDMTguNjM2MyAzMC41MTYyIDE4LjkxNDQgMzAuNjMxNSAxOS4yMDQ2IDMwLjYzMTVDMTkuNDk0OCAzMC42MzE1IDE5Ljc3MjggMzAuNTE2MyAxOS45Nzc5IDMwLjMxMTJMMzEuNzE5OCAxOC41Njk0WiIgZmlsbD0iIzJDMTMzOCIvPgo8L3N2Zz4K" /></Box>
                <Box><Text>GDPR-compliant. Your security is our highest priority.</Text></Box>
              </Box>
            </Box>
            <Box className={styles.onBoarding}><Text>Onboarding a team?</Text><Button color={"rgb(229,124,216)"} _active={"none"} bg="none" _hover={"none"}>Book a demo<IoMdArrowDropright/></Button></Box>
          </Box>
          <Box  width="100%" margin={"auto"} backgroundColor="rgb(255,243,237)" paddingBottom={"300px"}  paddingTop={"50px"} >
              <Box width={"55%"} margin="auto" ><Text width={"95%"} color="rgb(65,42,76)" textAlign={"center"} fontWeight={600} fontSize={"4xl"}><Highlight query='time and money' styles={{fontStyle:"italic",color:"rgb(229,124,216)"}}>Toggl Track saves you time and money, no matter how you use it.</Highlight></Text></Box>
              <Box className={styles.homecards}>
                <Box>
                  <Text fontWeight={600} color="rgb(229,124,216)">BILLING AND INVOICING</Text>
                  <Text fontWeight={600} fontSize="2xl"  width={"62%"} ><Highlight query="sell your time?" styles={{fontStyle:"italic"}}>Do you sell your time? We'll help you get the numbers right. Every time.</Highlight></Text>
                  <Button marginTop={"30px"} color={"white"} _active="none" bg={"rgb(229,124,216)"} _hover={{bg:"rgb(64,43,76)"}} borderRadius="22px">Learn more</Button>
                  <Image width={"80%"} src="https://public-assets.toggl.com/b/static/97ac29cd39b328b13d2e4d1654a5756a/264eb/feature-billing.avif"/>
                  <Box marginTop={"260px"}>
                  <Text fontWeight={700}>"We saved $18,000 by identifying missing billable hours, thanks to Toggl Track"</Text>
                  <Text>— Platinum Companies, Operations Consulting</Text>
                  </Box>
                </Box>
                <Box>
                  <Text fontWeight={600} color="rgb(229,124,216)">EMPLOYEE TIME TRACKING</Text>
                  <Text fontWeight={600} fontSize="2xl" width={"70%"} ><Highlight query="happiness" styles={{fontStyle:"italic"}}>Improve team productivity and happiness without the micromanagement.</Highlight></Text>
                  <Button marginTop={"30px"} color={"white"} _active="none" bg={"rgb(229,124,216)"} _hover={{bg:"rgb(64,43,76)"}} borderRadius="22px">Learn more</Button>
                  <Image width={"80%"} src="https://public-assets.toggl.com/b/static/35bb9131ff56d5ba4d6a37f8be9ca3b1/5ca66/feature-employee.avif"/>
                  <Box marginTop={"260px"}>
                  <Text fontWeight={700}>"We had a 100% adoption rate. Toggl Track was wholeheartedly accepted by everyone."</Text>
                  <Text>— Newlogic, Software Consulting</Text>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.typecards}>
                <Box>
                <Text fontWeight={600} color="rgb(229,124,216)">PROJECT BUDGETING</Text>
                <Text fontWeight={600} marginTop="15px" fontSize="xl" >No more anxiety over late deadlines and unprofitable projects. Plan and set budgets with confidence!</Text>
                <Button _active={"none"} bg="none" _hover={{color:"rgb(229,124,216)"}}>Learn more<IoMdArrowDropright/></Button>
                </Box>
                <Box>
                <Text fontWeight={600} color="rgb(229,124,216)">PROJECT BUDGETING</Text>
                <Text fontWeight={600} fontSize="xl" >No more anxiety over late deadlines and unprofitable projects. Plan and set budgets with confidence!</Text>
                <Button _active={"none"} bg="none" _hover={{color:"rgb(229,124,216)"}}>Learn more<IoMdArrowDropright/></Button>
                </Box>
                <Box>
                <Text fontWeight={600} color="rgb(229,124,216)">PROJECT BUDGETING</Text>
                <Text fontWeight={600} fontSize="xl" >No more anxiety over late deadlines and unprofitable projects. Plan and set budgets with confidence!</Text>
                <Button _active={"none"} bg="none" _hover={{color:"rgb(229,124,216)"}}>Learn more<IoMdArrowDropright/></Button>
                </Box>
              </Box>
          </Box>
          <Box className={styles.skewBox}>
                <Image src="https://public-assets.toggl.com/b/static/8b4370a93348ea0e12f37a78902eced6/67d97/illo-teams.avif"/>
                <Box>
                  <Text fontSize="3xl" width={"70%"}>
                  70,000+ customers use Toggl Track to hit their productivity and business goals
                  </Text>
                  <Box className={styles.caseStudy}>
                    <Box>
                      <Text fontSize="4xl" fontWeight={600} display="flex" alignItems={"center"}><IoMdArrowRoundUp color="rgb(229,124,216)" />20%</Text>
                      <Text textAlign={"center"}>
                      Toggl Track increased PR Agency Sweat+Co’s profitability by at least 20% with accurate billable hours tracking.
                      </Text>
                      <Button _active={"none"} bg="none" _hover={{color:"rgb(229,124,216)"}}>Real case study<IoMdArrowDropright/></Button>
                    </Box>
                    <Box>
                    <Text fontSize="4xl" fontWeight={600} >100%</Text>
                      <Text textAlign={"center"}>
                      Software consultancy Moove It provides 100% transparency to their clients, even in a company as large as 100+!
                      </Text>
                      <Button _active={"none"} bg="none" _hover={{color:"rgb(229,124,216)"}}>Real case study<IoMdArrowDropright/></Button>
                    </Box>
                    <Box>
                    <Text fontSize="4xl" fontWeight={600} display="flex" alignItems={"center"}><IoMdArrowRoundUp color="rgb(229,124,216)" />45%</Text>
                      <Text textAlign={"center"}>
                      Creative studio RogueMark Studios boosted resource allocation by 45% thanks to accurate labor forecasting.
                      </Text>
                      <Button _active={"none"} bg="none" _hover={{color:"rgb(229,124,216)"}}>Real case study<IoMdArrowDropright/></Button>
                    </Box>
                  </Box>
                  <Box className={styles.imageHolder}>
                    <Image src="https://public-assets.toggl.com/b/static/5fcebba893fe8a5ce67303e8f3fdb2e7/829a1/brands-paid-desktop.avif"/>
                    <Box>
                    <Button color={"white"} _active="none" bg={"rgb(229,124,216)"} _hover={{bg:"rgb(64,43,76)"}} borderRadius="22px">Start tracking for free</Button>
                    <Button _active={"none"} bg="none" _hover={{color:"rgb(229,124,216)"}}>or book a demo<IoMdArrowDropright/></Button>
                    </Box>
                </Box>
                </Box>
          </Box>
          <Box className={styles.toolUseage}>
             <Box>
              <Box>
                <Text fontSize="4xl" fontWeight={600}><Highlight query="anyone" styles={{color:"rgb(229,124,216)",fontStyle:"italic"}}>A time tracking tool anyone can use</Highlight></Text>
                <Text marginTop={"20px"}>Whether you are a team of one or a thousand, we understand that being productive is different for everyone. This is why Toggl Track is built into any workflow.</Text>
              </Box>
              <Box>
                <Image src="https://public-assets.toggl.com/b/static/d65ac20a8a6956148d7437345ec74581/0ff40/illo-human-point.avif"/>
                <Button color={"white"} _active="none" bg={"rgb(229,124,216)"} _hover={{bg:"rgb(64,43,76)"}} borderRadius="22px">Watch 1-minute video</Button>
              </Box>
             </Box>
             <Box>
              <Box>
                <Image src="https://public-assets.toggl.com/b/static/illo-integrations-6b17ecf23dcdd61c6225b50a3cb52c4b.png"/>
                <Text fontWeight={600} fontSize="lg" marginTop={"15px"}>100+ integrations</Text>
                <Text fontSize="md">Use Toggl Track with the tools you already use. Track time in 100+ popular tools with the Toggl Track browser extension.</Text>
              </Box>
              <Box>
                <Image src="https://public-assets.toggl.com/b/static/illo-desktop-mobile-cf42e1f520c9e57b534affd23bcc4340.png"/>
                <Text fontWeight={600} fontSize="lg" marginTop={"15px"}>Works where you work</Text>
                <Text fontSize="md">Track time on our web app, desktop, and mobile apps. You can even start the timer from your stopwatch!</Text>
              </Box>
              <Box>
                <Image src="data:image/png;base64,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"/>
                <Text fontWeight={600} fontSize="lg" marginTop={"15px"}>Designed to be easy</Text>
                <Text fontSize="md">No instruction manual needed. But if you ever need help, our support team has a track record of responding within 3 hours!</Text>
              </Box>
             </Box>
          </Box>
          <Box className={styles.signUpContainer}>
            <Box>
            <Text fontSize="4xl" fontWeight="600" textAlign="center"><Highlight query="track?" styles={{color:"rgb(229,124,216)",fontStyle:"italic"}}>Ready to get on Track?</Highlight></Text>
            </Box>
            <Box>
              <SignUpEmail/>
              <Box className={styles.productDemo}>
                <Text fontSize="3xl" fontWeight="600" >Prefer a product demo instead?</Text>
                <Text marginTop={"20px"}>Request a 30-minute personalized demo to see how Toggl Track can meet your time tracking goals</Text>
                <Button marginTop={"20px"} color={"white"} _active="none" bg={"rgb(229,124,216)"} _hover={{bg:"rgb(64,43,76)"}} borderRadius="22px">Book a demo</Button>
              </Box>
            </Box>
            <Box>
            <Image src="https://public-assets.toggl.com/b/static/50743fb0844854055a48bfacbe48040d/7c6f6/reviews-badge-desktop.avif"/>
            </Box>
          </Box>
          <Footer/>
          <FooterBanner/>
        </div>
    )
}
export default Landing