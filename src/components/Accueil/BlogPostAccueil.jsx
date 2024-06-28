import React from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

export default function PostWithLike() {
  return (
    <React.Fragment>
      <Heading margin={5} textAlign="center">Articles</Heading>
      <Flex justifyContent="center" flexWrap="wrap">
        <Box
          w={{ base: "90%", sm: "xs" }} // Adjust width based on screen size
          rounded="sm"
          my={5}
          mx={2} // Adjust horizontal margin
          overflow="hidden"
          bg="white"
          border="1px"
          borderColor="black"
          boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
          flex="1"
          maxW={{ base: "100%", sm: "xs" }} // Adjust maximum width based on screen size
          minW={{ base: "100%", sm: "xs" }} // Adjust minimum width based on screen size
        >
          <Box h="200px" borderBottom="1px" borderColor="black">
            <Img
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              roundedTop="sm"
              objectFit="cover"
              h="full"
              w="full"
              alt="Blog Image"
            />
          </Box>
          <Box p={4}>
            <Heading color="black" fontSize="2xl" noOfLines={1}>
              React v18.0
            </Heading>
            <Text color="gray.500" noOfLines={2}>
              In this post, we will give an overview of what is new in React 18,
              and what it means for the future.
            </Text>
          </Box>
          <HStack borderTop="1px" borderColor="black" p={4} justify="space-between">
            <Text fontSize="md" fontWeight="semibold">
              View more
            </Text>
            <BsArrowUpRight />
          </HStack>
        </Box>

        {/* Second Card */}
        <Box
          w={{ base: "90%", sm: "xs" }} // Adjust width based on screen size
          rounded="sm"
          my={5}
          mx={2} // Adjust horizontal margin
          overflow="hidden"
          bg="white"
          border="1px"
          borderColor="black"
          boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
          flex="1"
          maxW={{ base: "100%", sm: "xs" }} // Adjust maximum width based on screen size
          minW={{ base: "100%", sm: "xs" }} // Adjust minimum width based on screen size
        >
          <Box h="200px" borderBottom="1px" borderColor="black">
            <Img
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              roundedTop="sm"
              objectFit="cover"
              h="full"
              w="full"
              alt="Blog Image"
            />
          </Box>
          <Box p={4}>
            <Heading color="black" fontSize="2xl" noOfLines={1}>
              React v18.0
            </Heading>
            <Text color="gray.500" noOfLines={2}>
              In this post, we will give an overview of what is new in React 18,
              and what it means for the future.
            </Text>
          </Box>
          <HStack borderTop="1px" borderColor="black" p={4} justify="space-between">
            <Text fontSize="md" fontWeight="semibold">
              View more
            </Text>
            <BsArrowUpRight />
          </HStack>
        </Box>
      </Flex>
    </React.Fragment>
  );
}
