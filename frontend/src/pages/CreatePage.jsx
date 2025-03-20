import React from 'react'
import { Container, VStack, Heading, Box, FormControl, FormLabel, Button, Input, HStack, Flex, useColorModeValue } from '@chakra-ui/react'

const CreatePage = () => {
    const [newProduct, setNewProduct] = React.useState({
        name: "",
        price: "",
        image: ""
    })

    function addName(event) {
        setNewProduct((prevNewProduct) => {
         return {...prevNewProduct, name: event.target.value}
        })
    }

    function addPrice(event) {
        setNewProduct((prevNewProduct) => {
         return {...prevNewProduct, price: event.target.value}
        })
    }

    function addImage(event) {
        setNewProduct((prevNewProduct) => {
         return {...prevNewProduct, image: event.target.value}
        })
    }

    function addNewProduct(event) {
        event.preventDefault();
        console.log("Product added:", newProduct)
    }
    
  return (
    <Container maxW={"900px"} minH={"100vh"}>
        <VStack spacing={8}>
            <Heading as={"h1"} size={"24px"} textAlign={"center"}>
                Create New Product
            </Heading>
            
            <Flex flexDir={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                width={"600px"}
                >
            <Box width={"full"} bg={useColorModeValue("rgba(252, 255, 255, 0.38)", "rgba(80, 78, 116, 0.38)")}
            p={6}
            rounded={"lg"}
            shadow={"md"}>
                        <form style={{width: "100%"}} onSubmit={addNewProduct}>
                            <VStack spacing={4}>
                                    <FormControl id="name" isRequired>
                                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                                            <FormLabel htmlFor="name">
                                                Product Name:
                                            </FormLabel> <Input type='text' name='name' placeholder='e.g. Headphones'
                                            value={newProduct.name}
                                            onChange={addName}
                                            maxW={'400px'} /> 
                                        </Flex> 
                                </FormControl>

                                <FormControl id="price" isRequired>
                                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                                            <FormLabel htmlFor="price">
                                                Product Price:
                                            </FormLabel> <Input type='number' name='price' placeholder='e.g. 2000'
                                            value={newProduct.price}
                                            onChange={addPrice}
                                            maxW={'400px'} /> 
                                        </Flex> 
                                </FormControl>

                                <FormControl id="image" isRequired>
                                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                                            <FormLabel htmlFor="image">
                                                Image URL:
                                            </FormLabel> <Input type='text' name='image' placeholder='e.g. Headphones'
                                            value={newProduct.image}
                                            onChange={addImage}
                                            maxW={'400px'} /> 
                                        </Flex> 
                                </FormControl>

                                <Button type={"submit"} bg={useColorModeValue("rgb(216, 232, 234)", "rgb(50, 49, 73)")} boxShadow={"md"}> Create Product </Button>
                                
                            </VStack>
                        </form>
                    </Box>
            </Flex>
        </VStack>
    </Container>
  )
}

export default CreatePage