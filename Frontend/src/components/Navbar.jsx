import { Button, Container, Flex, HStack, useColorMode } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { CiSquarePlus } from "react-icons/ci";

const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
  return ( 
  <Container maxW={"1140px"} px={4} >
    <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{base:"column", sm:"row"}}>

    <Text
  bgGradient='linear(to-l, #4facfe, #00f2fe)'
  bgClip='text'
  fontSize={{base:22, sm:28 }}
  fontWeight='extrabold'>
  
  <Link to={"/"}>Product Store 🛒 </Link>
   </Text>

   <HStack spacing={1} alignItems={"center"}>
    <Link to={"/create"}>
     <Button mx={3}> 
     <CiSquarePlus fontSize={20} />
    </Button>   

    <Button onClick={toggleColorMode}>
        {colorMode === "light" ?  "🌑" :"🔆" }
    </Button>
    </Link>
   </HStack>
    </Flex> 
  </Container>
  );
};

export default Navbar;