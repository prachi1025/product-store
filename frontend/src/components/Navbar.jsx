import React from 'react'
import { Container, Flex, Text, Link as ChakraLink, HStack, Button, useColorMode, Icon} from '@chakra-ui/react'
import { CiSquarePlus, CiLight, CiDark } from "react-icons/ci";
import {Link as ReactRouterLink } from 'react-router-dom'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode() 
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex alignItems={"center"}
            justifyContent={"space-between"}
            h={16}
            flexDir={{
                base: "column",
                sm: "row"
            }}
        >
            <Text bgGradient={'linear(to-l,rgb(23, 101, 255),rgb(44, 225, 239))'}
                bgClip={'text'}
                fontSize={{ base: "22px", sm: "28px" }}
                fontWeight={'bold'}
                textTransform={'uppercase'}
                textAlign={"center"}
            >
                <ChakraLink as={ReactRouterLink} to="/">
                    Product Store 🛒
                </ChakraLink>
            </Text>

            <HStack spacing={"2px"} alignItems={"center"}>
                <ChakraLink as={ReactRouterLink} to="/create">
                    <Button size={{ base: "sm", sm: "md", md: "lg" }}>
                    <Icon as={CiSquarePlus} fontSize={{ base: "20px", sm:"25px" }} />
                    </Button>
                </ChakraLink>
                <Button onClick={toggleColorMode} size={{ base: "sm", sm: "md", md: "lg" }}>
                    {colorMode === "light" ? <Icon as={CiLight} fontSize={{ base: "20px", sm:"25px" }} /> : <Icon as={CiDark} fontSize={{ base: "20px", sm:"25px" }} />}
                </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar