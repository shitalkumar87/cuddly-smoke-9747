import { Box,Text,Spacer, Heading,InputLeftAddon,InputGroup,Input,InputRightAddon,Stack,Image,Hr} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import React from "react"
 import {BiStoreAlt} from "react-icons/bi"
  import {HiOutlineShoppingBag} from "react-icons/hi"
  import {BsFillPersonFill} from "react-icons/bs"
  import Imageslider from "./Imageslider"
 
function Navbar(){
    return(
          <>
             <Box display="flex" height="30px" bg="pink.100" >
                <Text textAlign="center" fontWeight="600" fontSize="10px" marginLeft="50px" marginTop="5px">Pick Any product At Rs 199</Text>
                <Text marginTop="4px"  color="pink.300" fontWeight="800" fontSize="12px" marginLeft="30px"> SHOP NOW</Text>
                <Spacer />
                
                  <Text marginTop="4px" marginRight="5px"><BiStoreAlt    size="20px"/></Text>
                 <Text  marginTop="4px" fontWeight="600"  marginRight="20px" fontSize="12px">MyGlamm Store</Text>
                
             </Box> 

             <Box height="50px"   marginTop="20px" display="flex" justifyContent="space-around"  >
             

             <Image src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" width="180px"/>
             <Stack  >
                <InputGroup size='md' width="600px" marginRight="200px" marginTop="8px">
                    <InputLeftAddon  children={<SearchIcon color='gray.300' />} />
                        <Input placeholder='Find Lipstick, Eyeliner Makeup, Tutorial etc' />
                    
                </InputGroup>
                    </Stack>
                <Text marginTop="10px" marginRight="80px" display="flex" gap="30px"> <HiOutlineShoppingBag size="30px"/>
                             
                   <BsFillPersonFill size="30px"/>
                </Text>
                    
             </Box>
              
              <Box display="flex" justifyContent="space-evenly" marginTop="10px"  > 
                <ul>Home </ul>
                <ul>MAKEUP </ul>
                <ul>HAIR CARE</ul>
                <ul>SKIN CARE  </ul>
                <ul>SANITIZING CARE</ul>
                <ul>COLLECTION </ul>
                <ul>REWARDS </ul>
                <ul>MYGLAMM STUDIO </ul>
                <ul>OFFERS</ul>
              </Box>
              
             <Text> <Imageslider /> </Text>

             <Box marginTop="60PX" marginLeft="80px">
                <Image   width="1100px" height="300px" src="https://files.myglamm.com/site-images/original/ULt2240x614.jpg" alt=""/>
             </Box>

             <Box marginTop="20PX" marginLeft="20px">
                <Image   width="1200px" height="300px" src="https://files.myglamm.com/site-images/original/2240x614-Gifting-Store-KV-refresh.jpg" alt=""/>
             </Box>

             <Heading marginTop="20px" fontSize="20px">IN THE SPOTLIGHT</Heading>

             <Box display="flex" marginLeft="50px"  gap="90px" marginTop="30PX">
                 <Box>
                 <Image src="https://files.myglamm.com/site-images/original/Ult700x488.jpg" width="320px" height="200px" />
                    <Text  bg="black" color="white">A perfect lipistick For Everyday Wear</Text>
                 </Box>
                 <Box>
                 <Image src="https://files.myglamm.com/site-images/original/MM700X488_2.jpg" width="320px" height="200px" />
                 <Text  bg="black" color="white">Manish Malhotra Face Range</Text>
                 </Box>
                 
                <Box>
                
                <Image src="https://files.myglamm.com/site-images/original/Lit700x488.png" width="320px" height="200px"  />
                <Text  bg="black" color="white">Lit Matee About it Lip Color</Text>
                </Box>

             </Box>
                
             <Box marginTop="60PX" marginLeft="50px">
                <Image   width="1150px" height="300px" src="https://files.myglamm.com/site-images/original/make2240X614.jpg" alt=""/>
             </Box>
                  
             <Box marginTop="60PX" marginLeft="50px">
                <Image   width="1150px" height="300px" src="https://files.myglamm.com/site-images/original/2240x614dod_22.jpg" alt=""/>
             </Box>
          </>
    )
}

export default Navbar